<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '../base-components/Button'
import { FormInput } from '../base-components/Form'
import useSubLogin from '../composables/useSubLogin'
const { t } = useI18n()
const { subAccount, password, isLoging, isInputError, apiError, doLogin } =
  useSubLogin()
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
        {{ t('sub-account-login-title') }}
      </div>
      <div class="mb-3">
        <span class="mb-1 text-sm">{{ t('sub-account-account-label') }}</span>
        <div class="flex items-center rounded-lg border bg-dashboard_bg">
          <FormInput
            class="rounded-lg"
            v-model="subAccount"
            type="text"
            :placeholder="t('sub-account-account-placeholder')"
          />
        </div>
        <div
          v-if="isInputError && !subAccount"
          class="mt-1 text-xs text-red-500"
        >
          {{ t('error-message35') }}
        </div>
      </div>
      <div>
        <span class="mb-1 text-sm">{{ t('login-password-label') }}</span>
        <FormInput
          class="rounded-lg border"
          v-model="password"
          type="password"
          :placeholder="t('signup-password-place-holder')"
          @keyup.enter="doLogin"
        />
      </div>
      <div
        v-if="isInputError && !password && subAccount"
        class="mt-1 text-xs text-red-500"
      >
        {{ t('error-message8') }}
      </div>
      <div v-if="apiError" class="mt-1 text-xs text-red-500">
        {{ apiError }}
      </div>
      <Button
        variant="primary"
        class="mb-3 mt-10 w-full text-sm"
        @click="doLogin"
        :loading="isLoging"
        >{{ t('login-btn') }}</Button
      >
    </div>
  </div>
</template>
