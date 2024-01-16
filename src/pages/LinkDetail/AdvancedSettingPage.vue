<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import ChatWidgetSetting from '@/components/LinkDetail/Advanced/ChatWidgetSetting/index.vue'
import Breadcrumb from '@/components/LinkDetail/Common/Breadcrumb.vue'
const SurveySetting = defineAsyncComponent(
  () => import('@/components/LinkDetail/Advanced/SurveySetting/index.vue')
)

const SubAccountSetting = defineAsyncComponent(
  () => import('@/components/LinkDetail/Advanced/SubAccountSetting/index.vue')
)

const { t } = useI18n()

const tabs = ref([
  {
    id: 'qrcode-setting-tab-chat-widget',
    name: t('qrcode-setting-tab-chat-widget'),
    component: ChatWidgetSetting
  },
  {
    id: 'survey-setting-tab',
    name: t('survey-setting-tab'),
    component: SurveySetting
  },
  {
    id: 'qrcode-setting-tab-sub-account',
    name: t('qrcode-setting-tab-sub-account'),
    component: SubAccountSetting
  },
  {
    id: 'qrcode-setting-tab-chatbot',
    name: t('qrcode-setting-tab-chatbot')
  },
  {
    id: 'custom-domain-title',
    name: t('custom-domain-title')
  }
])
const currentTab = ref(tabs.value[0])
const currentTabId = computed(() => currentTab.value.id)
const currentTabComponent = computed(() => currentTab.value.component)
</script>

<template>
  <section>
    <Breadcrumb />
    <div class="box mb-2 mt-6">
      <div
        class="flex flex-col items-center justify-start gap-10 px-10 pb-3 pt-2 sm:flex-row"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="text-text_dark cursor-pointer border-b-[3px] border-transparent py-3 transition-all duration-300 hover:border-primary hover:text-primary"
          :class="{
            '!border-primary !text-primary': currentTabId === tab.id
          }"
          @click="currentTab = tab"
        >
          <span class="h-[22px]">{{ tab.name }}</span>
        </button>
      </div>
    </div>
    <div
      class="box"
      :class="{
        'bg-transparent': currentTabId === 'survey-setting-tab'
      }"
      :style="{
        boxShadow: currentTabId === 'survey-setting-tab' ? 'none' : ''
      }"
    >
      <component :is="currentTabComponent" />
    </div>
  </section>
</template>
