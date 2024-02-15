<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '../base-components/Button'
import { FormInput } from '../base-components/Form'
import SendResetPasswordEmailConfirnModal from '../components/Modals/SendResetPasswordEmailConfirnModal/SendResetPasswordEmailConfirnModal.vue'
import useCountDown from '../composables/useCountDown'
import useEmailReset from '../composables/useEmailReset'
const { t } = useI18n()
const { email, isReseting, isInputError, apiError, showModal, sendRestEmail } =
  useEmailReset()
const { count, countDown } = useCountDown()
const sendClick = () => {
  sendRestEmail()?.then(() => {
    countDown(60)
  })
}
</script>
<template>
  <div>
    <img
      class="mx-auto mb-[50px] mt-16 w-40"
      src="../assets/images/logo_dark_v6.png"
      alt=""
    />
    <div
      class="mx-auto w-full rounded-lg border p-5 pt-[30px] text-xl sm:w-[66%] md:w-1/2 lg:w-[376px]"
    >
      <div class="mb-7 text-center text-xl font-extrabold text-[#777777]">
        {{ t('reset-title') }}
      </div>
      <div class="mb-3">
        <span class="mb-1 inline-block text-sm">{{
          t('reset-email-label')
        }}</span>
        <div class="flex items-center rounded-lg border bg-dashboard_bg">
          <FormInput class="rounded-lg" v-model="email" type="text" />
        </div>
        <div v-if="isInputError && !email" class="mt-1 text-xs text-red-500">
          {{ t('error-message7') }}
        </div>
      </div>
      <div v-if="apiError && !isInputError" class="mt-1 text-xs text-red-500">
        {{ apiError }}
      </div>
      <Button
        variant="primary"
        class="mb-3 mt-4 w-full text-sm"
        @click="sendClick"
        :loading="isReseting"
        :disabled="count > 0"
        >{{
          count <= 0 ? t('reset-submit-btn') : `${count}${t('error-message31')}`
        }}</Button
      >
    </div>
  </div>
  <SendResetPasswordEmailConfirnModal v-if="showModal" />
</template>
