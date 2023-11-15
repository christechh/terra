<script setup lang="ts">
import Button from '../../base-components/Button'
import FormLabel from '../../base-components/Form/FormLabel.vue'
import FormInput from '../../base-components/Form/FormInput.vue'
import { FormSwitch, FormCheck, InputGroup } from '../../base-components/Form'
import Lucide from '../../base-components/Lucide/index'
import HeadUploadModal from '../../components/Modals/HeadUploadModal'
import { reactive, ref } from 'vue'
import { useNotificationsStore } from '../../stores/notifications'
import ActiveLogsModal from '../../components/Modals/ActiveLogsModal/'
import { useDeleteModalStore } from '../../stores/modals/deleteModal'
import { useI18n } from 'vue-i18n'
import axios from '../../axios'
import ContryCodePicker from '../../components/ContryCodePicker'
import { AsYouType } from 'libphonenumber-js'

const { t } = useI18n()

const showHeadUploadPopup = ref(false)
const showActiveLogPopup = ref(false)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userInfo: any = reactive({})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const activeLogs: any = ref([])
const allLogs = ref([])
const accountSettingChange = ref(false)
const nofityChange = ref(false)
const oldPsd = ref('')
const newPsd = ref('')
const newPsdAgain = ref('')
const resetPsdError = ref('')
const phoneCode = ref('+886')

const getUserInfo = async () => {
  await axios.get('/auth/setting').then((res) => {
    const { data } = res.data.data
    Object.assign(userInfo, data)
    const ast = new AsYouType()
    ast.input(userInfo.notify_phone)
    console.log(ast.getNumber())
    phoneCode.value = `+${ast.getCallingCode() as string}`
    userInfo.notify_phone = ast.getNationalNumber()
  })
}

const getLogs = async (page: number, pageSize: number) => {
  return axios.get('/user/login', { params: { page, pageSize } })
}

const getUserActiveLog = () => {
  getLogs(0, 5).then((res) => {
    const { data } = res.data.data
    activeLogs.value = data
  })
}

const updateAccountSetting = async () => {
  try {
    const res = await axios.post('/auth/setting', {
      image_id: userInfo.image_id,
      ...(!userInfo.image_id && { avatar: userInfo.avatar }),
      name: userInfo.name
    })
    const { data } = res.data
    Object.assign(userInfo, data)
    useNotificationsStore().showSaveSuccess()
  } catch (e) {
    console.log(e)
  } finally {
    accountSettingChange.value = false
  }
}

const updatePassword = async () => {
  try {
    await axios.put('/auth/updatePassword', {
      new_password: newPsd.value,
      new_password_confirmation: newPsdAgain.value,
      old_password: oldPsd.value
    })
    oldPsd.value = ''
    newPsd.value = ''
    newPsdAgain.value = ''
    useNotificationsStore().showSaveSuccess()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    resetPsdError.value = e.response.data.message
  }
}

const updateNotification = async () => {
  try {
    await axios.put('/user/notify', {
      email: userInfo.notify_email,
      is_open_notify: userInfo.is_open_notify,
      phone: `${phoneCode.value}${userInfo.notify_phone}`,
      type: userInfo.notify_type
    })
    nofityChange.value = false
    useNotificationsStore().showSaveSuccess()
  } catch (e) {
    console.log(e)
  }
}

const viewMore = async () => {
  const res = await getLogs(0, 999)
  const { data } = res.data.data
  allLogs.value = data
  showActiveLogPopup.value = true
}

const confirmDeleteAccout = () => {
  useDeleteModalStore().showModal({
    deleteType: 'account',
    title: '',
    content: t('delete-account-modal-desc'),
    deleteData: { id: userInfo.id }
  })
}

const headChangehandler = (img: { img: string; id: number }) => {
  // eslint-disable-next-line no-debugger
  debugger
  userInfo.image_id = ''
  if (img.id) {
    userInfo.image_id = img.id
  }
  if (img.img) {
    userInfo.avatar = img.img
  }
  accountSettingChange.value = true
}

getUserInfo()
getUserActiveLog()
</script>
<template>
  <div class="block lg:flex">
    <div class="flex-1">
      <div class="rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('accountSetting') }}</div>
          <Button
            variant="primary"
            :disabled="!accountSettingChange"
            @click="updateAccountSetting"
            >{{ $t('save') }}</Button
          >
        </div>
        <div class="grid cursor-pointer grid-cols-4 gap-y-3 p-4">
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('head') }}</FormLabel
          >
          <div class="col-span-3">
            <div class="relative h-32 w-32" @click="showHeadUploadPopup = true">
              <img
                :src="userInfo.avatar"
                width="128"
                height="128"
                alt=""
                class="rounded-full"
              />
              <div
                class="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary p-2"
              >
                <Lucide icon="Camera" color="white" />
              </div>
            </div>
          </div>
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('displayName') }}</FormLabel
          >
          <FormInput
            v-model="userInfo.name"
            class="col-span-3"
            type="text"
            @input="accountSettingChange = true"
          />
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('email') }}</FormLabel
          >
          <FormInput v-model="userInfo.email" class="col-span-3" disabled />
        </div>
      </div>
      <div class="mt-4 rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('changePassword') }}</div>
          <Button
            variant="primary"
            :disabled="[newPsd, newPsdAgain, oldPsd].some((i) => !i)"
            @click="updatePassword"
            >{{ $t('confirmEdit') }}</Button
          >
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4">
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('oldPassword') }}</FormLabel
          >
          <FormInput
            v-model="oldPsd"
            :placeholder="$t('inputOldPSD')"
            class="col-span-3"
            type="password"
          />
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('newPassword') }}</FormLabel
          >
          <FormInput
            v-model="newPsd"
            :placeholder="$t('inputNewPSD')"
            class="col-span-3"
            type="password"
            :class="resetPsdError ? 'border border-danger' : ''"
          />
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            >{{ $t('edit-confirm-new-password-label') }}</FormLabel
          >
          <FormInput
            v-model="newPsdAgain"
            :placeholder="$t('inputNewPSDAgain')"
            type="password"
            class="col-span-3"
            :class="resetPsdError ? 'border border-danger' : ''"
          />
          <template v-if="resetPsdError">
            <FormLabel
              class="col-span-1 mb-0 mr-2 flex items-center justify-end"
            />
            <div class="col-span-3 text-xs text-danger">
              {{ resetPsdError }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="mt-3 flex-1 lg:ml-3 lg:mt-0">
      <div class="rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('notifySetting') }}</div>
          <Button
            variant="primary"
            :disabled="!nofityChange"
            @click="updateNotification"
            >{{ $t('save') }}</Button
          >
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4">
          <FormCheck class="col-span-1">
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              v-model="userInfo.notify_type"
              :value="20"
              @change="nofityChange = true"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('email') }}
            </FormCheck.Label>
          </FormCheck>
          <FormInput
            v-model="userInfo.notify_email"
            class="col-span-3"
            @input="nofityChange = true"
            type="text"
          />
          <FormCheck class="col-span-1">
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              v-model="userInfo.notify_type"
              :value="10"
              @change="nofityChange = true"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('phone') }}
            </FormCheck.Label>
          </FormCheck>
          <InputGroup class="col-span-3">
            <ContryCodePicker v-model="phoneCode" />
            <FormInput
              v-model="userInfo.notify_phone"
              @input="nofityChange = true"
              type="text"
            />
          </InputGroup>
          <FormLabel
            class="col-span-1 mb-0 mr-2 flex items-center justify-start"
            >{{ $t('switch') }}</FormLabel
          >
          <div class="mt-2">
            <FormSwitch>
              <FormSwitch.Input
                v-model="userInfo.is_open_notify"
                id="checkbox-switch-7"
                type="checkbox"
                @change="nofityChange = true"
              />
            </FormSwitch>
          </div>
        </div>
      </div>
      <div class="mt-4 rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div>{{ $t('activeLog') }}</div>
          <Button variant="outline-primary" @click="viewMore">{{
            $t('viewAll')
          }}</Button>
        </div>
        <div class="grid grid-cols-4 gap-y-3 p-4 text-xs">
          <span>{{ $t('browser') }}</span>
          <span>{{ $t('device') }}</span>
          <span>{{ $t('IP') }}</span>
          <span>{{ $t('time') }}</span>
          <template v-for="log in activeLogs" :key="log">
            <span>{{ log.browser }}</span>
            <span>{{ log.os }}</span>
            <span>{{ log.ip }}</span>
            <span>{{ log.createdAt }}</span>
          </template>
        </div>
      </div>
      <div class="mt-4 rounded-xl bg-white dark:bg-darkmode-600">
        <div class="flex items-center justify-between px-4 pt-4">
          <div>{{ $t('deleteAccount') }}</div>
        </div>
        <div class="flex items-center justify-between px-4 pb-4">
          <span class="desc-font text-xs">{{ $t('deleteAlert') }}</span>
          <Button variant="danger" @click="confirmDeleteAccout">{{
            $t('delete')
          }}</Button>
        </div>
      </div>
    </div>
    <HeadUploadModal
      v-if="showHeadUploadPopup"
      v-model="showHeadUploadPopup"
      :image-id="userInfo.image_id"
      @save="headChangehandler"
    />
    <ActiveLogsModal :active-logs="allLogs" v-model="showActiveLogPopup" />
  </div>
</template>
