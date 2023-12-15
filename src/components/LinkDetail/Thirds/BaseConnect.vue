<script setup lang="ts">
import { ref, computed, PropType } from 'vue'

import BoxHead from '@/components/Box/BoxHead.vue'
import CButton from '@/base-components/Button/Button.vue'
import Steps from '@/components/Steps/index.vue'
import Lucide from '@/base-components/Lucide/Lucide.vue'
import { ConnectType, useThird } from './useThird'

defineOptions({
  name: 'BaseConnect'
})
const props = defineProps({
  type: {
    type: String as PropType<ConnectType>,
    required: true
  }
})

const {
  title,
  subtitle,
  steps,
  originalConfig,
  isDifferent,
  onSubmit,
  btnLoading,
  disconnectLineToken,
  disconnectMessageToken,
  disconnectIgToken,
  disconnectSlackToken
} = useThird(props.type)

const loadingTarget = ref<string>('')
const showBlockLineConnectionBtn = computed(() => {
  return (
    props.type === 'line' &&
    originalConfig?.value.line_messaging_channel_access_token
  )
})
const showMessageDisconnectBtn = computed(() => {
  return (
    props.type === 'messenger' &&
    originalConfig?.value.fb_page_id &&
    originalConfig?.value.fb_page_access_token
  )
})
const showIgDisconnectBtn = computed(() => {
  return (
    props.type === 'instagram' &&
    originalConfig?.value.ig_page_id &&
    originalConfig?.value.ig_page_access_token
  )
})
const showSlackDisconnectBtn = computed(() => {
  return props.type === 'slack' && originalConfig?.value.slack_webhook_url
})

const saveConfig = () => {
  onSubmit && onSubmit()
}
const handleLoadingSubmit = (target: string, callback?: () => void) => {
  loadingTarget.value = target
  callback && callback()
}
</script>

<template>
  <div v-if="type" class="box">
    <BoxHead :title="title">
      <template #subtitle>
        <component :is="subtitle" />
      </template>
      <template #right>
        <div class="flex items-center gap-2">
          <CButton
            v-if="showBlockLineConnectionBtn && !btnLoading"
            variant="danger"
            class="text-white disabled:opacity-50"
            @click="handleLoadingSubmit('disconnectLine', disconnectLineToken)"
          >
            <Lucide icon="Trash2" class="mr-1 h-4" />
            <span>{{ $t('what-app-txt18') }}</span>
          </CButton>
          <CButton
            v-if="showMessageDisconnectBtn && !btnLoading"
            variant="danger"
            class="text-white disabled:opacity-50"
            @click="
              handleLoadingSubmit('disconnectMessage', disconnectMessageToken)
            "
          >
            <Lucide icon="Trash2" class="mr-1 h-4" />
            <span>{{ $t('what-app-txt18') }}</span>
          </CButton>
          <CButton
            v-if="showIgDisconnectBtn && !btnLoading"
            variant="danger"
            class="text-white disabled:opacity-50"
            @click="handleLoadingSubmit('disconnectIg', disconnectIgToken)"
          >
            <Lucide icon="Trash2" class="mr-1 h-4" />
            <span>{{ $t('what-app-txt18') }}</span>
          </CButton>
          <CButton
            v-if="showSlackDisconnectBtn && !btnLoading"
            variant="danger"
            class="text-white disabled:opacity-50"
            @click="
              handleLoadingSubmit('disconnectSlack', disconnectSlackToken)
            "
          >
            <Lucide icon="Trash2" class="mr-1 h-4" />
            <span>{{ $t('what-app-txt18') }}</span>
          </CButton>

          <CButton
            variant="primary"
            class="w-24 text-white disabled:opacity-50"
            :disabled="!isDifferent"
            :loading="btnLoading && loadingTarget === 'save'"
            @click="handleLoadingSubmit('save', saveConfig)"
          >
            {{ $t('save-btn') }}
          </CButton>
        </div>
      </template>
    </BoxHead>
    <div class="p-5">
      <Steps :items="steps" />
    </div>
  </div>
</template>
