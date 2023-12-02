<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Breadcrumb from '../../base-components/Breadcrumb'
import Lucide from '../../base-components/Lucide'
import { useLinkPage } from '../../composables/useLinkPage'
import { useDeleteModalStore } from '../../stores/modals/deleteModal'

const route = useRoute()
const { t } = useI18n()
const currentTab = ref(0)
const { type } = route.query
const { token, routeTitle, fetchConfig } = useLinkPage()
const linkId = ref<number>()

fetchConfig().then((res) => {
  linkId.value = res.id
})

const chatUrl = computed(() => {
  return `${location.origin}/${token.value}`
})

const deleteHandler = () => {
  useDeleteModalStore().showModal({
    deleteType: 'chatLink',
    title: t('delete-alert-title'),
    content: t('qrcode-page-delete-check-message'),
    deleteData: { token: token.value, id: linkId.value }
  })
}
</script>

<template>
  <Breadcrumb class="">
    <Breadcrumb.Link to="/dashboard">
      {{ $t('my-pages') }}
    </Breadcrumb.Link>
    <Breadcrumb.Link active>
      {{ token }}
    </Breadcrumb.Link>
    <Breadcrumb.Link>{{ routeTitle }}</Breadcrumb.Link>
  </Breadcrumb>
  <header
    class="mt-6 flex items-center rounded-lg bg-white px-4 py-2 dark:bg-darkmode-600"
  >
    <nav
      class="mx-2 mt-2 cursor-pointer pb-2"
      :class="{ 'border-b-2 border-primary font-bold': currentTab === 0 }"
      @click="currentTab = 0"
    >
      {{ $t('connent-info') }}
    </nav>
    <nav
      class="ml-12 mr-2 mt-2 cursor-pointer pb-2"
      :class="{ 'border-b-2 border-primary font-bold': currentTab === 1 }"
      @click="currentTab = 1"
    >
      {{ $t('menu-features-pinpage') }}
    </nav>
    <nav
      class="ml-12 mr-2 mt-2 cursor-pointer pb-2"
      :class="{ 'border-b-2 border-primary font-bold': currentTab === 2 }"
      @click="currentTab = 2"
    >
      {{ $t('edit-chat-room-title') }}
    </nav>
  </header>
  <main class="mt-2 rounded rounded-lg bg-white dark:bg-darkmode-600">
    <header class="border-b border-[#EDF2F7] p-5 text-base">
      {{ $t('connent-info') }}
    </header>
    <div class="p-5 ps-11">
      <ol class="relative dark:border-gray-700">
        <li class="border-s border-[#E3F2A5] pb-5 ps-6">
          <span
            class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-1 ring-white dark:bg-blue-900 dark:ring-gray-900"
          >
            1
          </span>
          <div class="flex items-center">
            <span>{{ $t('chatbot-message-action-type') }}</span>
            <Lucide icon="HelpCircle" width="14" class="ml-1" />
          </div>
          <div class="mt-3 text-[#939393]">
            {{
              type === 'direct' ? $t('edit-one-to-one') : $t('edit-group-chat')
            }}
          </div>
        </li>
        <li class="border-s border-[#E3F2A5] pb-5 ps-6">
          <span
            class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-1 ring-white dark:bg-blue-900 dark:ring-gray-900"
          >
            2
          </span>
          <div class="flex items-center">
            <span>{{ $t('chat-link') }}</span>
            <Lucide icon="HelpCircle" width="14" class="ml-1" />
          </div>
          <div class="mt-3 text-[#939393]">
            {{ chatUrl }}
          </div>
        </li>
        <li class="ms-6">
          <span
            class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-1 ring-white dark:bg-blue-900 dark:ring-gray-900"
          >
            3
          </span>
          <div class="flex items-center">
            <span>{{ $t('delete-chat-link') }}</span>
            <Lucide icon="HelpCircle" width="14" class="ml-1" />
          </div>
          <div class="mt-3 text-[#939393]">
            {{ $t('delete-chat-link-tip') }}
          </div>
          <button
            class="mt-5 rounded-lg bg-[#FF4D4F] px-5 py-2 text-white"
            @click="deleteHandler"
          >
            {{ $t('delete-btn') }}
          </button>
        </li>
      </ol>
    </div>
  </main>
</template>
1
