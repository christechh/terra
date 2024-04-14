<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Button from '../base-components/Button'
import RegisterLayout from '../layouts/RegisterLayout.vue'
const { t } = useI18n()
const isAndroid = ref(navigator.userAgent.toLowerCase().indexOf('android') > -1)
const router = useRouter()
</script>
<template>
  <RegisterLayout>
    <img
      class="mx-auto my-10 mb-[50px] mt-16 w-40"
      src="../assets/images/logo_dark_v6.png"
      alt=""
    />
    <div class="mx-auto w-full sm:w-1/2">
      <Button
        class="relative w-full border border-black text-sm font-semibold"
        @click="router.push({ name: 'registerByEmail' })"
      >
        <img
          class="absolute left-3"
          src="../assets/images/email_logo.png"
          alt=""
        />
        {{ t('signup-email-btn-title') }}</Button
      >
      <div class="mb-5 mt-2 text-center text-[#484848]">
        {{ t('signup-login-text')
        }}<button class="text-[#484848] underline">
          {{ t('signup-login-btn') }}
        </button>
      </div>
      <div class="my-[30px] flex items-center">
        <hr class="flex-1" />
        <span class="px-1 text-sm">{{ t('or') }}</span>
        <hr class="flex-1" />
      </div>
      <div class="flex flex-col gap-3">
        <Button
          v-if="!isAndroid"
          class="relative w-full border border-black text-sm font-semibold"
        >
          <img
            class="absolute left-3"
            src="../assets/images/apple_logo.png"
            alt=""
          />
          {{ t('signup-apple-btn-title') }}</Button
        >
        <Button
          class="relative w-full border border-black text-sm font-semibold"
        >
          <img
            class="absolute left-3"
            src="../assets/images/google_logo.png"
            alt=""
          />{{ t('signup-google-btn-title') }}</Button
        >
        <Button
          class="relative w-full border border-black text-sm font-semibold"
        >
          <img
            class="absolute left-3"
            src="../assets/images/facebook_logo.png"
            alt=""
          />{{ t('signup-facebook-btn-title') }}</Button
        >
        <Button
          class="relative w-full border border-black text-sm font-semibold"
          @click="$router.push({ name: 'loginByPhone' })"
        >
          <img
            class="absolute left-3"
            src="../assets/images/phone.svg"
            alt=""
          />{{ t('signup-phone-btn-title') }}</Button
        >
      </div>
    </div>
  </RegisterLayout>
</template>
