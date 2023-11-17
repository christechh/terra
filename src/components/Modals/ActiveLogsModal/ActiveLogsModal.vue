<script setup lang="ts">
import { Dialog } from '../../../base-components/Headless'

export interface ActiveLog {
  browser: string
  os: string
  ip: string
  createdAt: string
}
interface Props {
  activeLogs: Array<ActiveLog>
  modelValue: boolean
}

const { activeLogs } = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <Dialog
    :open="modelValue"
    size="lg"
    @close="() => emit('update:modelValue', false)"
  >
    <Dialog.Panel>
      <div
        class="grid h-[600px] grid-cols-4 gap-x-3 gap-y-3 overflow-auto p-7 text-center"
      >
        <span class="font-bold">{{ $t('user-login-browser-title') }}</span>
        <span class="font-bold">{{ $t('user-login-device-title') }}</span>
        <span class="font-bold">{{ $t('user-login-ip-title') }}</span>
        <span class="font-bold">{{ $t('user-login-time-title') }}</span>
        <template v-for="log in activeLogs" :key="log">
          <span>{{ log.browser }}</span>
          <span>{{ log.os }}</span>
          <span>{{ log.ip }}</span>
          <span>{{ log.createdAt }}</span>
        </template>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
