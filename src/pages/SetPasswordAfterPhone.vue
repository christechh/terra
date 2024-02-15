<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '../base-components/Button'
import { FormInput } from '../base-components/Form'
import useSetPasswordAfterPhone from '../composables/useSetPasswordAfterPhone'

const { t } = useI18n()
const {
  name,
  newPassword,
  newPasswordAgain,
  isReseting,
  isInputError,
  apiError,
  isPassRule1,
  isPassRule2,
  isPassRule3,
  submit
} = useSetPasswordAfterPhone()
</script>
<template>
  <div>
    <img
      class="mx-auto mb-[50px] mt-16 w-40"
      src="../assets/images/logo_dark_v6.png"
      alt=""
    />
    <div
      class="mx-auto w-full rounded-lg border p-[50px] pt-[30px] text-xl sm:w-[66%] md:w-1/2 lg:w-[566px]"
    >
      <div class="mb-7 text-center text-xl font-extrabold text-[#777777]">
        {{ t('set-title-first') }}
      </div>
      <div class="mb-3">
        <span class="mb-1 inline-block text-sm">{{
          t('signup-display-name-label')
        }}</span>
        <div class="flex items-center rounded-lg border bg-dashboard_bg">
          <FormInput class="rounded-lg" v-model="name" type="password" />
        </div>
        <div v-if="isInputError && !name" class="mt-1 text-xs text-red-500">
          {{ t('error-message2') }}
        </div>
      </div>
      <div class="mb-3">
        <span class="mb-1 inline-block text-sm">{{
          t('set-new-pwd-label')
        }}</span>
        <div class="flex items-center rounded-lg border bg-dashboard_bg">
          <FormInput class="rounded-lg" v-model="newPassword" type="password" />
        </div>
        <div
          v-if="isInputError && name && !newPassword"
          class="mt-1 text-xs text-red-500"
        >
          {{ t('edit-new-password-label-placeholder') }}
        </div>
      </div>
      <ul class="mb-3 mt-2 text-xs">
        <p class="mb-1">{{ t('signup-confirm-password-validation-text') }}：</p>
        <li
          class="translate-x-3 list-disc"
          :class="isPassRule1 ? 'text-[#d0d0d0]' : 'text-primary'"
        >
          {{ t('signup-confirm-password-validation-eight-characters') }}
        </li>
        <li
          class="translate-x-3 list-disc"
          :class="isPassRule2 ? 'text-[#d0d0d0]' : 'text-primary'"
        >
          {{ t('signup-confirm-password-validation-capital-letters') }}
        </li>
        <li
          class="translate-x-3 list-disc"
          :class="isPassRule3 ? 'text-[#d0d0d0]' : 'text-primary'"
        >
          {{ t('signup-confirm-password-validation-numbers') }}
        </li>
      </ul>
      <div class="mb-3">
        <span class="mb-1 inline-block text-sm">{{
          t('set-new-pwd-2-label')
        }}</span>
        <div class="flex items-center rounded-lg border bg-dashboard_bg">
          <FormInput
            class="rounded-lg"
            v-model="newPasswordAgain"
            type="password"
          />
        </div>
        <div
          v-if="isInputError && name && newPassword && !newPasswordAgain"
          class="mt-1 text-xs text-red-500"
        >
          {{ t('set-new-pwd-2-label') }}
        </div>
      </div>
      <div
        v-if="
          isInputError &&
          newPassword &&
          newPasswordAgain &&
          newPassword !== newPasswordAgain
        "
        class="mt-1 text-xs text-red-500"
      >
        {{ t('two-psd-not-same') }}
      </div>
      <div v-if="apiError && !isInputError" class="mt-1 text-xs text-red-500">
        {{ apiError }}
      </div>
      <Button
        variant="primary"
        class="mb-3 mt-4 w-full text-sm"
        @click="submit"
        :loading="isReseting"
        >{{ t('submit-btn') }}</Button
      >
    </div>
  </div>
</template>
