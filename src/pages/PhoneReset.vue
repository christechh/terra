<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '../base-components/Button'
import { FormInput } from '../base-components/Form'
import ContryCodePicker from '../components/ContryCodePicker'
import SendResetPasswordEmailConfirnModal from '../components/Modals/SendResetPasswordEmailConfirnModal/SendResetPasswordEmailConfirnModal.vue'
import useCountDown from '../composables/useCountDown'
import usePhoneReset from '../composables/usePhoneReset'
const { t } = useI18n()
const {
  phone,
  phoneCode,
  isReseting,
  isInputError,
  apiError,
  showModal,
  validCode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  recaptcha,
  sendPhoeCode,
  checkCode
} = usePhoneReset()
const { count, countDown } = useCountDown()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sendClick = () => {
  sendPhoeCode()?.then((res) => {
    if (!res) return
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
      class="mx-auto w-full rounded-lg border p-[50px] pt-[30px] text-xl sm:w-[66%] md:w-1/2 lg:w-[576px]"
    >
      <div class="mb-7 text-center text-xl font-extrabold text-[#777777]">
        {{ t('reset-title') }}
      </div>
      <div class="mb-3">
        <span class="mb-1 inline-block text-sm">{{
          t('paymnet_upgrade26')
        }}</span>
        <div class="flex items-center rounded-lg border bg-dashboard_bg">
          <ContryCodePicker v-model="phoneCode" show-code />
          <FormInput
            class="rounded-lg"
            v-model="phone"
            type="text"
            placeholder="912345678"
          />
        </div>
        <div v-if="isInputError && !phone" class="mt-1 text-xs text-red-500">
          {{ t('error-message9') }}
        </div>
      </div>
      <div v-if="apiError && !isInputError" class="mt-1 text-xs text-red-500">
        {{ apiError }}
      </div>
      <form @submit.prevent>
        <Button
          type="submit"
          id="send-sms-btn"
          variant="primary"
          class="mb-3 mt-4 w-full text-sm"
          :loading="isReseting"
          :disabled="count > 0"
          @click="sendClick"
          >{{
            count <= 0
              ? t('signup-phone-get-sms-text')
              : `${count}${t('error-message31')}`
          }}</Button
        >
      </form>
      <div class="flex items-center rounded-lg border bg-dashboard_bg">
        <FormInput
          class="rounded-lg"
          v-model="validCode"
          type="text"
          :placeholder="t('signup-phone-sms-code-text')"
        />
      </div>
      <div
        v-if="isInputError && phone && !validCode"
        class="mt-1 text-xs text-red-500"
      >
        {{ t('error-message19') }}
      </div>
      <Button
        variant="primary"
        class="mt-5 w-full text-sm"
        @click="checkCode"
        >{{ t('reset-set-btn') }}</Button
      >
      <div class="mt-[14px] text-center text-sm">
        <span>{{ t('signup-login-text') }}</span
        ><button class="text-[#808080] underline">
          {{ t('signup-login-btn') }}
        </button>
      </div>
    </div>
  </div>
  <SendResetPasswordEmailConfirnModal v-if="showModal" />
</template>
