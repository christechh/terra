<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useNotificationsStore } from '../../../../stores/notifications'

const { t } = useI18n()
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
const copyNewCode = () => {
  const code = document.getElementById('bubble-code-new')
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
        >&lt;script defer
        src="https://pinchat.me/js/pinchat.js?token=L86V8"&gt;&lt;/script&gt;</code
      >
      <div @click="copyCode" class="qrcode_url cursor-pointer text-xs">
        <img src="@/assets/images/copy.png" width="18" height="18" />
      </div>
    </div>
    <div
      class="font-semibold"
      style="
        margin-top: 10px;
        margin-bottom: 10px;
        color: #02b13f;
        display: flex;
        flex-direction: row;
      "
    >
      <div class="mr-1 h-[18px] w-[18px]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          class="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.196 6.223v4.436l7.6 2.073V4.15l-7.6 2.073zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.072a1.001 1.001 0 0 0 1.263-.964V4.15a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965v4.436z"
            fill="#02B13F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.252 10.641h2.044v-4.4H3.25a3.422 3.422 0 0 0 .003 4.4zm2.044 1a1 1 0 0 0 1-1v-4.4a1 1 0 0 0-1-1H3.05a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.554.554 0 0 0 .405.176h2.244z"
            fill="#02B13F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m7.065 12.21-2.51-.28-.978 3.91h2.636l.852-3.63zm-2.4-1.273a1 1 0 0 0-1.08.75l-.978 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.771l.852-3.63a1 1 0 0 0-.864-1.223l-2.51-.278zm13.747-6.373a.5.5 0 0 1-.139.693l-1.5 1a.499.499 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139zM15.996 8.44a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5zm.117 2.23a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.764l-1.38-1.16a.5.5 0 0 1-.062-.704z"
            fill="#02B13F"
          />
        </svg>
      </div>
      {{ $t('widget-copy-new-script') }}
    </div>
    <div class="flex items-center justify-between rounded-xl border p-3">
      <code id="bubble-code-new" class="javascript"
        >&lt;script defer
        src="https://pinchat.me/js/pinchat-new.js?token=L86V8"&gt;&lt;/script&gt;</code
      >
      <div @click="copyNewCode" class="qrcode_url cursor-pointer text-xs">
        <img src="@/assets/images/copy.png" width="18" height="18" />
      </div>
    </div>
  </div>
</template>
