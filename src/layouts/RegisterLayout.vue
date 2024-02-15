<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="-m-3 sm:-mx-8 sm:flex">
    <div
      class="min-h-screen w-full flex-1 px-[30px] pt-[91px] sm:flex sm:w-auto sm:flex-col sm:items-center sm:justify-center sm:pt-0"
    >
      <slot />
    </div>
    <div
      class="flex min-h-screen flex-1 flex-col items-center justify-center bg-[#f0f4cd] px-[30px]"
    >
      <img
        src="../assets/images/signup_headerimage_3x.png"
        width="600"
        class="max-w-[100%]"
        alt=""
      />
      <div class="text-text_dark mt-10 text-[24px] font-bold">
        {{ t('onboarding-step2-right-title') }}
      </div>
    </div>
  </div>
</template>
