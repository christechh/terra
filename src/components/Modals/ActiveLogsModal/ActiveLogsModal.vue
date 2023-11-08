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
  <Dialog :open="modelValue" @close="() => emit('update:modelValue', false)">
    <Dialog.Panel>
      <div class="grid grid-cols-4 gap-y-3 p-4 text-xs">
        <span>{{ $t('browser') }}</span>
        <span>{{ $t('device') }}</span>
        <span>{{ $t('IP') }}</span>
        <span>{{ $t('time') }}</span>
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
