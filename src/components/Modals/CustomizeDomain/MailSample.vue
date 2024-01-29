<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import { useNotificationsStore } from '../../../stores/notifications'

const props = defineProps({
  host: {
    type: String,
    default: () => ''
  }
})
const emit = defineEmits(['close'])
const copyToClipboard = () => {
  navigator.clipboard
    .writeText(
      '您好，\n\n我正在嘗試使用 pinchat.me 自訂我的網域，需要您的協助來創建 DNS 記錄。請問您方便協助我創建以下這些記錄嗎？;\n\n記錄類別：CNAME\nHost：www\n值：landing.pinchat.me\n\n建立完成後再麻煩告訴我。 謝謝您的協助！'
    )
    .then(() => {
      useNotificationsStore().showSuccess({
        title: t('copy-notify')
      })
      emit('close')
    })
}

const { t } = useI18n()
</script>
<template>
  <Dialog :open="true">
    <Dialog.Panel>
      <div class="flex justify-center py-5 text-center text-xl">
        {{ t('custom-domain-modal-title') }}
        <Lucide
          icon="X"
          class="absolute right-5 cursor-pointer"
          @click="emit('close')"
        />
      </div>
      <div class="px-5 pb-5">
        <div class="border bg-dashboard_bg p-5 text-base">
          <p class="mb-7">{{ t('custom-domain-modal-hi') }}</p>
          <p class="mb-7">
            {{ t('custom-domain-modal-desc') }}
          </p>
          <div class="mb-5">
            <div>{{ t('custom-domain-record-class') }}CNAME</div>
            <div>
              {{ t('custom-domain-record-host')
              }}<span class="custom-domain-host">{{ props.host }}</span>
            </div>
            <div>{{ t('custom-domain-record-value') }}landing.pinchat.me</div>
          </div>
          <p>{{ t('custom-domain-modal-desc-thanks') }}</p>
        </div>
        <div class="flex justify-center">
          <button
            class="font-medinum mt-5 rounded-lg border bg-black px-5 py-2 text-center text-base text-white"
            @click="copyToClipboard"
          >
            複製並關閉
          </button>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
