<script setup lang="ts">
import { computed, ref } from 'vue'
import Breadcrumb from '../../base-components/Breadcrumb'
import ChatSetting from '../../components/LinkDetail/BaseSetting/ChatSetting.vue'
import LinkInfo from '../../components/LinkDetail/BaseSetting/LinkInfo.vue'
import PinBoard from '../../components/LinkDetail/BaseSetting/PinBoard.vue'
import { useLinkPage } from '../../composables/useLinkPage'

const currentTab = ref(1)
const { token, routeTitle } = useLinkPage()

const tabContent = computed(() => {
  const map = [LinkInfo, PinBoard, ChatSetting]
  return map[currentTab.value]
})
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
    class="mt-6 flex items-center rounded-xl bg-white px-4 pb-3 pt-2 dark:bg-darkmode-600"
  >
    <nav
      class="mx-2 mt-2 cursor-pointer pb-2"
      :class="{
        'border-b-[3px] border-primary text-primary': currentTab === 0
      }"
      @click="currentTab = 0"
    >
      {{ $t('connent-info') }}
    </nav>
    <nav
      class="ml-12 mr-2 mt-2 cursor-pointer pb-2"
      :class="{
        'border-b-[3px] border-primary text-primary': currentTab === 1
      }"
      @click="currentTab = 1"
    >
      {{ $t('menu-features-pinpage') }}
    </nav>
    <nav
      class="ml-12 mr-2 mt-2 cursor-pointer pb-2"
      :class="{
        'border-b-[3px] border-primary text-primary': currentTab === 2
      }"
      @click="currentTab = 2"
    >
      {{ $t('edit-chat-room-title') }}
    </nav>
  </header>
  <component :is="tabContent" />
</template>
1
