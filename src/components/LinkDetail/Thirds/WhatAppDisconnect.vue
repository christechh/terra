<script setup lang="ts">
import { h, ref, computed } from 'vue'

import BoxHead from '@/components/Box/BoxHead.vue'
import CButton from '@/base-components/Button/Button.vue'
import Steps from '@/components/Steps/index.vue'
import Lucide from '@/base-components/Lucide/Lucide.vue'
import { useThird } from './useThird'
import { useEnterpointsConfigStore } from '../../../stores/enterpoint/config'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'WhatAppDisconnect'
})

const { t } = useI18n()
const { disconnectWhatAppToken } = useThird('what-app-2')

const enterpointsConfigStore = useEnterpointsConfigStore()
const originalConfig = computed(() => enterpointsConfigStore.originData)
const loadingTarget = ref<boolean>(false)
const title = computed(() => t('what-app-txt12'))
const subtitle = computed(() => {
  return h(
    'div',
    {
      class: 'text-[#939393]'
    },
    h('span', null, t('what-app-txt13'))
  )
})
const steps = computed(() => [
  {
    title: t('what-app-txt14'),
    render: () => h('div', null, [h('span', null, t('what-app-txt15'))])
  },
  {
    title: t('what-app-txt16'),
    render: () => h('div', null, [h('span', null, t('what-app-txt17'))])
  }
])
const showDisconnectBtn = computed(() => {
  return (
    !!originalConfig?.value?.whatsapp_phone_number_id &&
    !!originalConfig?.value?.whatsapp_access_token
  )
})

const handleLoadingSubmit = (callback?: () => void) => {
  loadingTarget.value = true
  callback && callback()
}
</script>

<template>
  <div class="intro-y">
    <div v-if="showDisconnectBtn" class="box">
      <BoxHead :title="title">
        <template #subtitle>
          <component :is="subtitle" />
        </template>
      </BoxHead>
      <div class="p-5">
        <Steps :items="steps" />
        <CButton
          variant="danger"
          class="text-white disabled:opacity-80"
          :loading="loadingTarget"
          @click="handleLoadingSubmit(disconnectWhatAppToken)"
        >
          <Lucide icon="Trash2" class="mr-2 h-4" />
          <span>{{ $t('what-app-txt18') }}</span>
        </CButton>
      </div>
    </div>
  </div>
</template>
