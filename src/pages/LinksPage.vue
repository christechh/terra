<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useLinkStore } from '../stores/link'
import { useUserStore } from '../stores/user'
import { useNotificationsStore } from '../stores/notifications'
import IconButton from '../components/IconButton/index.vue'
import { useI18n } from 'vue-i18n'
import { Dialog } from '../base-components/Headless'
import QrcodeVue from 'qrcode.vue'
import CreateLinkModal from '../components/Modals/CreateLinkModal.vue'

interface ILink {
  id: string
  title: string
  imageUrl: string
  token: string
}

const searchKeyword = ref('')
const userStore = useUserStore()
const linkStore = useLinkStore()
const notificationStore = useNotificationsStore()
const { t } = useI18n()
const links = computed((): ILink[] => {
  if (searchKeyword.value) {
    return linkStore.links.filter(
      (link: { title: string }) =>
        link.title?.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
  } else {
    return linkStore.links
  }
})
const getSettingLink = (link: ILink): string => {
  return `/dashboard/enterpoint?token=${link.token}&type=direct`
}
const copyToPasteboard = async (text: string) => {
  const el = document.createElement('textarea')
  const domain = import.meta.env.VITE_DOMAIN as string
  el.value = `${domain}/${text}`
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  notificationStore.showSuccess({ title: t('copy-notify'), content: '' })
}
const navigateToChatRoom = (link: ILink | null) => {
  window.open(
    `/chat/#/?token=${userStore.imkitToken}&roomTag=${link?.token ?? ''}`,
    '_blank'
  )
}
const tab = ref(0)
const qrcode = ref('')
const selectedLink = ref<ILink>()
const qrcodeRef = ref<HTMLElement>()
const showQRCodeModal = (link: ILink) => {
  tab.value = 0
  selectedLink.value = link
  const domain = import.meta.env.VITE_DOMAIN as string
  qrcode.value = `${domain}/${link?.token}`
  dialogOpen.value = true
}
const downloadQrCode = () => {
  if (qrcodeRef.value === undefined) return
  let canvasImage = qrcodeRef.value
    .getElementsByTagName('canvas')[0]
    .toDataURL('image/png')
  let xhr = new XMLHttpRequest()
  xhr.responseType = 'blob'
  xhr.onload = function () {
    let a = document.createElement('a')
    a.href = window.URL.createObjectURL(xhr.response)
    a.download = `${selectedLink.value?.token}.png`
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
  xhr.open('GET', canvasImage)
  xhr.send()
}
const dialogOpen = ref(false)
const createLinkDialogOpen = ref(false)
onMounted(() => {
  userStore.fetchSetting()
  linkStore.fetchLinks()
})
</script>

<template>
  <div class="min-h-screen rounded-xl bg-white p-6 dark:bg-darkmode-600">
    <div class="space-y-5">
      <div class="flex flex-wrap gap-3">
        <div class="flex gap-3">
          <button
            class="flex h-[40px] items-center justify-center gap-2 rounded-lg border border-primary px-5 text-base font-bold text-primary"
            @click="createLinkDialogOpen = true"
          >
            {{ $t('create-new-link') }}
            <img
              width="20"
              height="20"
              src="@/assets/images/new-link.svg"
              alt=""
            />
          </button>
          <button
            class="flex h-[40px] items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-5 text-base font-bold text-white"
            @click="navigateToChatRoom(null)"
          >
            {{ $t('all-chat-rooms') }}
            <img
              width="20"
              height="20"
              src="@/assets/images/arrow-right.png"
              alt=""
            />
          </button>
        </div>
        <div
          class="ml-auto flex h-[40px] items-center justify-center gap-2 rounded-lg bg-gray-100 pr-2"
        >
          <input
            ref="searchInput"
            class="rounded-lg border-none bg-gray-100 outline-none focus:border-none focus:ring-0"
            v-model="searchKeyword"
            :placeholder="$t('search')"
          />
          <img width="20" height="20" src="@/assets/images/search.png" alt="" />
        </div>
      </div>
      <div
        v-for="link in links"
        :key="link.id"
        class="flex flex-col flex-wrap items-start justify-center gap-6 rounded-xl border border-gray-200 p-5 dark:border-darkmode-700 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-center space-x-3">
          <img
            :src="
              link.imageUrl ??
              'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/1b2c230b653c274f793ec60dc50704ad.png'
            "
            alt=""
            class="h-10 w-10 rounded-full"
          />
          <span
            class="overflow-hidden text-ellipsis whitespace-nowrap font-bold text-gray-800 dark:text-slate-100"
            >{{ link.title ?? link.token }}</span
          >
          <img
            class="cursor-pointer"
            width="18"
            height="18"
            src="@/assets/images/copy.png"
            alt=""
            @click="copyToPasteboard(link.token)"
          />
        </div>
        <div class="flex items-center">
          <IconButton
            class="dark:bg-darkmode-600"
            @click="showQRCodeModal(link)"
          >
            <img
              width="20"
              height="20"
              src="@/assets/images/qr-code_1.svg"
              alt=""
            />
          </IconButton>
          <IconButton
            class="dark:bg-darkmode-600"
            @click="navigateToChatRoom(link)"
          >
            <img width="20" height="20" src="@/assets/images/chat.png" alt="" />
          </IconButton>
          <IconButton class="dark:bg-darkmode-600" :link="getSettingLink(link)">
            <img
              width="20"
              height="20"
              src="@/assets/images/setting.png"
              alt=""
            />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  <Dialog :open="dialogOpen" @close="dialogOpen = false">
    <Dialog.Panel>
      <div class="flex flex-col gap-5 p-6">
        <div class="flex">
          <div class="tab" :class="{ active: tab === 0 }" @click="tab = 0">
            分享聊天 QR Code
          </div>
          <div class="tab" :class="{ active: tab === 1 }" @click="tab = 1">
            分享聊天連結
          </div>
        </div>
        <div v-if="tab === 0" class="flex items-center justify-center">
          <div
            ref="qrcodeRef"
            class="flex flex-grow items-center justify-center"
          >
            <qrcode-vue :value="qrcode" :size="150" level="H" />
          </div>

          <div class="flex flex-grow flex-col gap-4 p-4">
            <button
              class="flex h-[40px] items-center justify-center gap-2 rounded-xl border border-primary px-5 text-base font-bold text-primary"
            >
              {{ $t('qrcode-display') }}
            </button>
            <button
              class="flex h-[40px] items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-5 text-base font-bold text-white"
              @click="downloadQrCode"
            >
              {{ $t('qrcode-download') }}
            </button>
          </div>
        </div>
        <div
          v-else-if="tab === 1"
          class="flex flex-col items-center justify-center gap-5"
        >
          <div
            class="flex gap-8 rounded-full bg-[#f0f0f0] p-2 pl-4 text-[16px]"
          >
            <span class="h-8 leading-8">{{ qrcode }}</span>
            <span
              class="h-8 cursor-pointer rounded-full bg-primary px-4 align-middle text-sm leading-8 text-white"
              @click="copyToPasteboard(qrcode)"
            >
              {{ $t('qrcode-page-copy') }}
            </span>
          </div>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
  <CreateLinkModal v-model="createLinkDialogOpen"></CreateLinkModal>
</template>
<style>
.table-border {
  border: 1px solid #000;
}
.tab {
  @apply flex-grow cursor-pointer border-b-[2px] p-4 text-center text-[18px] font-medium;
  &.active {
    @apply border-[#d9e756] text-[#02b13f];
  }
  /* f0f0f0 */
}
</style>
