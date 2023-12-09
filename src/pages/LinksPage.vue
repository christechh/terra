<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useLinkStore } from '../stores/link'
import { useUserStore } from '../stores/user'
import { useNotificationsStore } from '../stores/notifications'
import IconButton from '../components/IconButton/index.vue'
import { useI18n } from 'vue-i18n'

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
const links = computed((): ILink[] =>
  linkStore.links.filter((link: { title: string }) =>
    link.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
)
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
            >{{ link.title }}</span
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
          <IconButton class="dark:bg-darkmode-600" :link="getSettingLink(link)">
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
</template>
<style>
.table-border {
  border: 1px solid #000;
}
</style>
