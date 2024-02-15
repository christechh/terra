<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { FormInput } from '../base-components/Form'
import PasswordValid from '../components/PasswordValid.vue'
import usePasswordValid from '../composables/usePasswordValid'
import useRegisterByEmail from '../composables/useRegisterByEmail'

const { t } = useI18n()
const { email, password, isInputError, apiError, register } =
  useRegisterByEmail()
const { isPassRule1, isPassRule2, isPassRule3 } = usePasswordValid(password)
</script>
<template>
  <div class="-m-3 sm:-mx-8 sm:flex">
    <div
      class="min-h-screen w-full flex-1 px-[30px] pt-[91px] sm:flex sm:w-auto sm:items-center sm:justify-center sm:pt-0"
    >
      <img
        class="mx-auto my-10 mb-[50px] mt-16 w-40"
        src="../assets/images/logo_dark_v6.png"
        alt=""
      />
      <div>
        <div class="mb-3">
          <div class="mb-1 text-xs">{{ t('login-email-label') }}</div>
          <FormInput
            class="rounded-lg border"
            v-model="email"
            type="text"
            :placeholder="t('signup-login-placeholder-email')"
          />
          <div v-if="isInputError && !email" class="mt-1 text-xs text-red-500">
            {{ t('error-message7') }}
          </div>
        </div>
        <div class="mb-5">
          <span class="mb-1 text-xs">{{ t('login-password-label') }}</span>
          <FormInput
            class="rounded-lg border"
            v-model="password"
            type="password"
            :placeholder="t('signup-password-place-holder')"
            @keyup.enter="register"
          />
          <div
            v-if="isInputError && !password && email"
            class="mt-1 text-xs text-red-500"
          >
            {{ t('error-message8') }}
          </div>
          <div v-if="apiError" class="mt-1 text-xs text-red-500">
            {{ apiError }}
          </div>
        </div>
        <PasswordValid
          :is-pass-rule1="isPassRule1"
          :is-pass-rule2="isPassRule2"
          :is-pass-rule3="isPassRule3"
        />
      </div>
    </div>
    <div class="min-h-screen flex-1 bg-[#f0f4cd]"></div>
  </div>
</template>
