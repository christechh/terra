<script setup lang="ts">
import { debounce } from 'lodash'
import { computed, reactive, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

import Table from '../../base-components/Table'
import Breadcrumb from '../../base-components/Breadcrumb'
import LoadingIcon from '../../base-components/LoadingIcon'
import FormInput from '../../base-components/Form/FormInput.vue'
import Dialog from '../../base-components/Headless/Dialog'
import CButton from '../../base-components/Button'
import Avatar from '../../components/Avatar/index.vue'
import CustomerEditDialog from '../../components/Dialogs/CustomerEditDialog.vue'
import { useTable } from '../../composables/useTable'
import { formatDate } from '../../utils/helper'
import axios from '../../axios'
import { useNotificationsStore } from '../../stores/notifications'
import { useI18n } from 'vue-i18n'

interface ITag {
  id: string
  name: string
}
export interface ICustomer {
  chat_room_id: string
  avatar: string
  email: string
  phone: string
  date: string // appointment
  other: string // company_name
  memo: string
  nickname: string
  joined_at: string
  sent_at: string
  tags: ITag[]
}

const { t } = useI18n()
const route = useRoute()

const openExportDialog = ref(false)
const form = reactive({
  keyword: ''
})

const isExporting = ref(false)
const exportType = ref('')
const exportEmail = ref('')
const customerEditForm = ref<ICustomer | undefined>()

const showCustomerEditDialog = computed(() => {
  return !!customerEditForm.value?.chat_room_id
})
const token = computed(() => {
  return route.query.token as string
})
const itemClass = computed(() => {
  return 'flex h-[40px] w-[40px] items-center justify-center rounded-full bg-light_yellow [&.active]:bg-light_yellow'
})

const { list, pageLoading, setQuery, toPage } = useTable<ICustomer>({
  url: `/chat/enterpoints/customer/${token.value}`,
  query: {
    token: route.query.token as string
  },
  listTransformer: (list) => {
    return list.map((item) => {
      return {
        ...item,
        joined_at:
          item.joined_at && formatDate(item.joined_at, 'YYYY-MM-DD HH:mm:ss'),
        sent_at: item.sent_at && formatDate(item.sent_at, 'YYYY-MM-DD HH:mm:ss')
      }
    })
  }
})
const routeTitle = computed(() => {
  return route.meta.title
})
const linkDetailBaseSetting = computed(() => {
  return `/dashboard/enterpoint?token=${token.value}&type=direct`
})
const exportItemClass = computed(() => {
  return 'relative flex grow basis-[200px] cursor-pointer flex-col items-center justify-end p-5 hover:bg-[#F6F6F6] rounded-xl border-2 border-white [&.active]:border-placeholder_font'
})
const exportDisabled = computed(() => {
  if (!exportType.value || isExporting.value) {
    return true
  }

  if (exportType.value === 'cvs-email') {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(exportEmail.value)
    return !isEmail
  }

  if (exportType.value === 'google-sheet') {
    return true
  }

  return false
})
const handleExport = async () => {
  isExporting.value = true

  const settings = {
    url: `/chat/enterpoints/customer/export/${token.value}`,
    method: 'GET'
  }
  if (exportType.value === 'cvs-download') {
    await axios(settings)
      .then((response) => {
        const { url } = response?.data?.data?.data || {}
        if (!url) return

        window.open(url)
        handleCloseExportDialog()
      })
      .finally(() => {
        isExporting.value = false
      })
    return
  }

  if (exportType.value === 'cvs-email') {
    settings.url = `/chat/enterpoints/customer/export/email/${exportEmail.value}/${token.value}`

    await axios(settings)
      .then(() => {
        useNotificationsStore().showSuccess({
          title: t('export-modal-send-email-success') + ` ${exportEmail.value}`
        })
        handleCloseExportDialog()
      })
      .finally(() => {
        isExporting.value = false
      })
    return
  }
}
const handleCloseExportDialog = () => {
  exportEmail.value = ''
  exportType.value = ''
  openExportDialog.value = false
}
const handleCloseCustomerEditDialog = () => {
  customerEditForm.value = undefined
  toPage()
}

const handleSearchDebounce = debounce(() => {
  setQuery({
    keyword: form.keyword
  })
  toPage()
}, 300)

watch(
  () => form.keyword,
  () => {
    handleSearchDebounce()
  }
)
</script>

<template>
  <section>
    <Breadcrumb class="">
      <Breadcrumb.Link to="/dashboard">
        {{ $t('my-pages') }}
      </Breadcrumb.Link>
      <Breadcrumb.Link active :to="linkDetailBaseSetting">
        {{ token }}
      </Breadcrumb.Link>
      <Breadcrumb.Link>{{ routeTitle }}</Breadcrumb.Link>
    </Breadcrumb>
    <div class="mt-6 rounded-t-lg bg-white p-4">
      <div class="flex justify-between">
        <div>
          <div class="text-[16px] font-semibold">
            {{ $t('export-customer-list') }}
          </div>
          <div class="text-[#728195]">
            {{ $t('export-customer-list-desc') }}
          </div>
        </div>
        <div>
          <button
            id="customer-data-download"
            class="flex items-center rounded-[12px] bg-theme1 px-8 py-2 font-semibold text-white"
            @click="() => (openExportDialog = true)"
          >
            <img
              src="@/assets/images/svg/export-FFFFFF.svg"
              class="mr-1 h-4 w-4"
            />

            {{ $t('export') }}
          </button>
        </div>
      </div>
    </div>
    <div class="mt-1 rounded-b-lg bg-white p-4">
      <FormInput
        type="text"
        v-model="form.keyword"
        class="w-full max-w-[320px]"
        :placeholder="$t('search')"
      />
      <!-- Optimize Table component with using config. This way is bad. -->
      <div class="overflow-x-auto">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="w-[90px]">{{ $t('client-avatar') }}</Table.Th>
              <Table.Th class="w-[140px]">{{ $t('client-nickname') }}</Table.Th>
              <Table.Th>{{ $t('client-joined-on') }}</Table.Th>
              <Table.Th>{{ $t('client-last-message') }}</Table.Th>
              <Table.Th>{{ $t('client-tags') }}</Table.Th>
              <Table.Th>{{ $t('client-enter-chat') }}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody v-show="!pageLoading">
            <TransitionGroup name="list">
              <Table.Tr
                v-for="(customer, index) in list"
                :key="customer.chat_room_id"
              >
                <Table.Td class="w-[90px]">
                  <Avatar :name="customer.nickname" :avatar="customer.avatar" />
                  <!-- <div
                    class="h-[40px] w-[40px] overflow-hidden rounded-full bg-slate-100"
                  >
                    <img :src="customer.avatar" />
                  </div> -->
                </Table.Td>
                <Table.Td class="w-[140px]">{{ customer.nickname }}</Table.Td>
                <Table.Td class="text-center">{{
                  customer.joined_at
                }}</Table.Td>
                <Table.Td class="text-center">{{ customer.sent_at }}</Table.Td>
                <Table.Td class="text-center">
                  <span v-for="tag in customer.tags" :key="tag.id">
                    {{ tag.name }}
                  </span>
                </Table.Td>
                <Table.Td class="text-center">
                  <div class="flex items-center justify-center gap-3">
                    <a
                      :href="`/dashboard/chat?room=${token}&roomId=${customer.chat_room_id}`"
                      :class="itemClass"
                      target="_blank"
                    >
                      <img
                        class="h-5 w-5"
                        src="@/assets/images/chat.png"
                        width="20"
                        height="20"
                        style="box-shadow: none; display: inline-flex"
                      />
                    </a>
                    <a
                      :class="itemClass"
                      href="#"
                      :data-index="index"
                      @click="customerEditForm = customer"
                    >
                      <img
                        class="h-5 w-5"
                        src="@/assets/images/writing.png"
                        width="20"
                        height="20"
                        style="box-shadow: none; display: inline-flex"
                      />
                    </a>
                  </div>
                </Table.Td>
              </Table.Tr>
            </TransitionGroup>
          </Table.Tbody>
        </Table>
      </div>
      <div v-if="pageLoading" class="mb-4 mt-8">
        <div class="flex justify-center">
          <LoadingIcon icon="three-dots" class="w-[60px]" />
        </div>
      </div>
    </div>
    <Dialog :open="openExportDialog" @close="handleCloseExportDialog">
      <Dialog.Panel class="sm:w-[720px]">
        <Dialog.Description>
          <form @submit.prevent="handleExport">
            <div class="flex justify-end">
              <img
                class="export-modal-close cursor-pointer"
                src="@/assets/images/modal-close.png"
                @click="handleCloseExportDialog"
              />
            </div>
            <div class="px-2 pb-5 text-center text-[20px] font-medium">
              {{ $t('export-modal-title') }}
            </div>

            <div class="flex flex-wrap gap-4">
              <div
                :class="[
                  exportItemClass,
                  exportType === 'cvs-download' && 'active'
                ]"
                @click="() => (exportType = 'cvs-download')"
              >
                <img
                  src="@/assets/images/csv-download.png"
                  alt="icon"
                  class="h-[38px]"
                />
                <div class="mt-5 text-center">
                  {{ $t('export-modal-download') }}
                </div>
              </div>
              <div
                :class="[
                  exportItemClass,
                  exportType === 'cvs-email' && 'active'
                ]"
                @click="() => (exportType = 'cvs-email')"
              >
                <img
                  src="@/assets/images/csv-email.png"
                  alt="icon"
                  class="h-[38px]"
                />
                <div class="mt-5 text-center">
                  {{ $t('export-modal-send-csv') }}
                </div>
              </div>
              <div
                :class="[
                  exportItemClass,
                  exportType === 'google-sheet' && 'active'
                ]"
                @click="() => (exportType = 'google-sheet')"
              >
                <span class="label-coming">{{
                  $t('export-modal-upcoming')
                }}</span>
                <img
                  src="@/assets/images/svg/cvs-google.svg"
                  alt="icon"
                  class="h-[38px]"
                />
                <div class="mt-5 text-center">
                  {{ $t('export-modal-export-google') }}
                </div>
              </div>
              <div
                class="flex grow basis-[200px] flex-col items-center justify-end"
              ></div>
            </div>

            <div
              class="relative mb-5 mt-2 flex items-center justify-center"
              v-if="exportType === 'cvs-email'"
            >
              <span class="mr-2">{{
                $t('export-modal-enter-your-email')
              }}</span>
              <div class="relative w-full max-w-[320px]">
                <FormInput
                  type="email"
                  class="w-full"
                  v-model="exportEmail"
                  :placeholder="$t('export-modal-enter-your-email')"
                />
              </div>
            </div>
            <div class="mb-2 mt-2 flex justify-center gap-3 px-2">
              <CButton
                class="px-8"
                type="button"
                @click="handleCloseExportDialog"
              >
                {{ $t('export-modal-cancel') }}
              </CButton>
              <CButton
                class="px-8"
                variant="primary"
                :disabled="exportDisabled"
                :loading="isExporting"
              >
                <span>{{ $t('export-modal-confirm') }}</span>
              </CButton>
            </div>
          </form>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
    <CustomerEditDialog
      :open="showCustomerEditDialog"
      :form="customerEditForm"
      @close="handleCloseCustomerEditDialog"
    />
  </section>
</template>

<style scoped lang="css">
.label-coming {
  background: #f4fabd;
  color: #02b13f;
  padding: 4px 8px;
  display: inline-block;
  border-radius: 16px;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 12px;
}
</style>
