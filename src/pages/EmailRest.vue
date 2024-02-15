<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '../base-components/Button'
import { FormInput } from '../base-components/Form'
import useEmailReset from '../composables/useEmailReset'
const { t } = useI18n()
const { email, password, isReseting, isInputError, apiError, doReset } =
  useEmailReset()
</script>
<template>
  <div>
    <img
      class="mx-auto mb-[50px] mt-16 w-40"
      src="../assets/images/logo_dark_v6.png"
      alt=""
    />
    <div
      class="mx-auto w-full rounded-lg border p-[50px] pt-[30px] text-xl sm:w-[66%] md:w-1/2 lg:w-[467px]"
    >
      <div class="mb-7 text-center text-xl font-extrabold text-[#777777]">
        {{ t('reset-title') }}
      </div>
      <div class="mb-3">
        <span class="mb-1 text-sm">{{ t('sub-account-table-phone') }}</span>
        <div class="flex items-center rounded-lg border bg-dashboard_bg">
          <FormInput
            class="rounded-lg"
            v-model="email"
            type="text"
            placeholder="912345678"
          />
        </div>
        <div v-if="isInputError && !email" class="mt-1 text-sm text-red-500">
          {{ t('error-message9') }}
        </div>
      </div>
      <div>
        <span class="mb-1 text-sm">{{ t('login-password-label') }}</span>
        <FormInput
          class="rounded-lg border"
          v-model="password"
          type="password"
          :placeholder="t('signup-password-place-holder')"
          @keyup.enter="doReset"
        />
      </div>
      <div
        v-if="isInputError && !password && email"
        class="mt-1 text-xs text-red-500"
      >
        {{ t('error-message8') }}
      </div>
      <div v-if="apiError && !isInputError" class="mt-1 text-xs text-red-500">
        {{ apiError }}
      </div>
      <div class="mb-5 text-center">
        <button class="text-sm text-[#808080] underline">
          {{ t('login-forget-btn') }}
        </button>
      </div>
      <Button
        variant="primary"
        class="mb-3 w-full text-sm"
        @click="doReset"
        :loading="isReseting"
        >{{ t('login-btn') }}</Button
      >
      <div class="mb-5 text-center text-sm">
        <span>{{ t('login-no-sign-up-login-text') }}</span
        ><button class="text-[#808080] underline">
          {{ t('login-sign-up-btn') }}
        </button>
      </div>
    </div>
  </div>
</template>
