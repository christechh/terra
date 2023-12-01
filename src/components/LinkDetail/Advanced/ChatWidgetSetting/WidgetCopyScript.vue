<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotificationsStore } from '../../../../stores/notifications'
import { useLinkPage } from '../../../../composables/useLinkPage'

const { t } = useI18n()
const { token } = useLinkPage()
const notificationsStore = useNotificationsStore()

const copyCode = () => {
  const code = document.getElementById('bubble-code')
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
  <div class="w-full" style="margin-bottom: 28px">
    <div class="font-semibold" style="margin-bottom: 4px; margin-top: 4px">
      {{ $t('widget-copy-script') }}
    </div>

    <div class="text-xs" style="color: #939393; margin-bottom: 10px">
      {{ $t('float-button-desc') }}
    </div>

    <div class="flex items-center justify-between rounded-xl border p-3">
      <code id="bubble-code" class="javascript"
        >&lt;script defer src="https://pinchat.me/js/pinchat-new.js?token={{
          token
        }}"&gt;&lt;/script&gt;</code
      >
      <div @click="copyCode" class="qrcode_url cursor-pointer text-xs">
        <img src="@/assets/images/copy.png" width="18" height="18" />
      </div>
    </div>
  </div>
</template>
