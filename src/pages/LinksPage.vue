<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useLinkStore } from '../stores/link'
import { computed } from 'vue'
const searchKeyword = ref('')
const userStore = useUserStore()
const linkStore = useLinkStore()
const links = computed(
  (): {
    id: string
    title: string
    imageUrl: string
  }[] => linkStore.links
)
userStore.fetchSetting()
linkStore.fetchLinks()
</script>

<template>
  <div class="min-h-screen rounded-xl bg-white p-6">
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
            class="flex h-[40px] items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-5 text-base font-bold text-primary text-white"
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
            class="rounded-lg border-none bg-gray-100 outline-none"
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
            class="overflow-hidden text-ellipsis whitespace-nowrap font-bold text-gray-800"
            >{{ link.title }}</span
          >
          <img width="18" height="18" src="@/assets/images/copy.png" alt="" />
        </div>
        <div class="flex items-center space-x-5">
          <img
            width="20"
            height="20"
            src="@/assets/images/qr-code_1.svg"
            alt=""
          />
          <img width="20" height="20" src="@/assets/images/chat.png" alt="" />
          <img
            width="20"
            height="20"
            src="@/assets/images/setting.png"
            alt=""
          />
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
