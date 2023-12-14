<script setup lang="ts">
import { ref, computed, onErrorCaptured } from 'vue'

import BoxHead from '@/components/Box/BoxHead.vue'
import CButton from '@/base-components/Button/Button.vue'
import Steps from '@/components/Steps/index.vue'
import Lucide from '@/base-components/Lucide/Lucide.vue'
import { useThird } from './useThird'

defineOptions({
  name: 'WhatAppDisconnect'
})

// const type = 'what-app-2'
const { title, subtitle, steps, originalConfig, disconnectWhatAppToken } =
  useThird('what-app-2')

const loadingTarget = ref<string>('')
const showDisconnectBtn = computed(() => {
  return (
    !!originalConfig?.value.whatsapp_phone_number_id &&
    !!originalConfig?.value.whatsapp_access_token
  )
})

const handleLoadingSubmit = (target: string, callback?: () => void) => {
  loadingTarget.value = target
  callback && callback()
}

onErrorCaptured((callback) => {
  console.log('callback', callback)
})
</script>

<template>
  <div>
    <div v-if="showDisconnectBtn" class="box" :key="`${showDisconnectBtn}`">
      <BoxHead :title="title">
        <template #subtitle>
          <component :is="subtitle" />
        </template>
      </BoxHead>
      <div class="p-5">
        <Steps :items="steps" />
        <CButton
          variant="danger"
          class="text-white disabled:opacity-50"
          @click="
            handleLoadingSubmit('disconnectWhatApp', disconnectWhatAppToken)
          "
        >
          <Lucide icon="Trash2" class="mr-2 h-4" />
          <span>{{ $t('what-app-txt18') }}</span>
        </CButton>
      </div>
    </div>
  </div>
</template>
