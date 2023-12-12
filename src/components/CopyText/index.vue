<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { v4 as uuidv4 } from 'uuid'

import { useNotificationsStore } from '../../stores/notifications'
import { shallowRef, PropType, computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<'gray' | undefined>,
    default: 'normal'
  }
})

const { t } = useI18n()
const currentId = shallowRef(uuidv4())
const notificationsStore = useNotificationsStore()

const otherClass = computed(() => {
  return {
    'border-none bg-[#f6f6f6]': props.type === 'gray'
  }
})

const copyCode = () => {
  const code = document.getElementById(currentId.value)
  if (!code) return
  const range = document.createRange()
  range.selectNode(code)
  const selection = window.getSelection()
  if (selection) {
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    selection.removeAllRanges()
    // TODO: Show toast
    notificationsStore.showSuccess({
      title: t('copy-notify')
    })
  }
}
</script>

<template>
  <div
    class="flex items-center justify-between rounded-[6px] border p-3"
    :class="otherClass"
  >
    <code :id="currentId" class="javascript">
      {{ text }}
    </code>
    <div @click="copyCode" class="qrcode_url cursor-pointer text-xs">
      <img src="@/assets/images/copy.png" width="18" height="18" />
    </div>
  </div>
</template>
