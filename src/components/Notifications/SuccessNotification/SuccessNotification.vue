<script setup lang="ts">
import { computed, ref, provide, watch } from 'vue'
import { Options } from 'toastify-js'
// import { Menu, Dialog } from "../../../base-components/Headless";
import Lucide from '../../../base-components/Lucide'
// import Button from "../../../base-components/Button";
import { useNotificationsStore } from '../../../stores/notifications'
import { NotificationElement } from '../../../base-components/Notification'
import Notification from '../../..//base-components/Notification'
import Alert from '../../../base-components/Alert'

const notificationsStore = useNotificationsStore()

const type = ref<'success' | 'error' | 'warning' | 'info'>('success')
const title = ref('')
const alertVariant = ref<any>('')
const alertIcon = ref<any>('')
// const title = notificationsStore.successTitle;
// const content = computed(() => notificationsStore.successContent);
// const content = computed(() => notificationsStore.content );
const options = computed(() => {
  return {
    duration: 3000,
    position: 'center'
    // close: true,
    // escapeMarkup: true,
  } as Options
})
const successNotification = ref<NotificationElement>()
const successNotificationToggle = () => {
  // Show notification
  alertVariant.value = ''
  type.value = notificationsStore.type
  title.value = notificationsStore.successTitle

  setTimeout(() => {
    alertVariant.value = getAlertVariant()
    alertIcon.value = getAlertIcon()

    successNotification.value?.showToast()
  }, 0)
}
const getAlertVariant = () => {
  switch (type.value) {
    case 'success':
      return 'soft-success'
    case 'error':
      return 'soft-danger'
    case 'warning':
      return 'soft-warning'
    default:
      return ''
  }
}
const getAlertIcon = () => {
  switch (type.value) {
    case 'success':
      return 'CheckCircle'
    case 'error':
      return 'AlertTriangle'
    case 'warning':
      return 'AlertTriangle'
    default:
      return 'AlertTriangle'
  }
}

provide('bind[successNotification]', (el: NotificationElement) => {
  successNotification.value = el
})
watch(
  () => notificationsStore.successVersion,
  () => {
    successNotificationToggle()
  }
)
</script>

<template>
  <div class="text-center">
    <Notification
      refKey="successNotification"
      class="flex justify-center"
      :type="type"
      :options="options"
    >
      <Alert
        v-if="alertVariant"
        :variant="alertVariant"
        class="flex items-center pr-12"
      >
        <Lucide :icon="alertIcon" class="w-6 h-6 mr-2" />
        {{ title }}
      </Alert>
      <!-- <Lucide icon="CheckCircle" class="text-success" />
      <div class="ml-4 mr-4">
        <div class="font-medium" v-if="title !== null">
          {{ title }}
        </div>
        <div class="mt-1 text-slate-500" v-if="content !== null">
          {{ content }}
        </div>
      </div> -->
    </Notification>
  </div>
</template>

<style>
.toastify-center {
  left: 50% !important;
  right: auto !important;
  transform: translateX();
}
</style>
