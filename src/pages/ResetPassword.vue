<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '../base-components/Button'
import { FormInput } from '../base-components/Form'
import PasswordValid from '../components/PasswordValid.vue'
import usePasswordValid from '../composables/usePasswordValid'
import useResetPassword from '../composables/useResetPassword'

const { t } = useI18n()
const {
  newPassword,
  newPasswordAgain,
  isReseting,
  isInputError,
  apiError,
  submit
} = useResetPassword()
const { isPassRule1, isPassRule2, isPassRule3 } = usePasswordValid(newPassword)
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
        {{ t('reset-title') }}
      </div>
      <div class="mb-3">
        <span class="mb-1 inline-block text-sm">{{
          t('set-new-pwd-label')
        }}</span>
        <div class="flex items-center rounded-lg border bg-dashboard_bg">
          <FormInput class="rounded-lg" v-model="newPassword" type="password" />
        </div>
        <div
          v-if="isInputError && !newPassword"
          class="mt-1 text-xs text-red-500"
        >
          {{ t('edit-new-password-label-placeholder') }}
        </div>
      </div>
      <PasswordValid
        :is-pass-rule1="isPassRule1"
        :is-pass-rule2="isPassRule2"
        :is-pass-rule3="isPassRule3"
      />
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
          v-if="isInputError && newPassword && !newPasswordAgain"
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
        @click="submit(isPassRule1, isPassRule2, isPassRule3)"
        :loading="isReseting"
        >{{ t('submit-btn') }}</Button
      >
    </div>
  </div>
</template>
