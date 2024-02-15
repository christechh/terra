<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from '../base-components/Button'
import { FormCheck, FormInput } from '../base-components/Form'
import PasswordValid from '../components/PasswordValid.vue'
import usePasswordValid from '../composables/usePasswordValid'
import useRegisterByEmail from '../composables/useRegisterByEmail'

const { t } = useI18n()
const {
  email,
  password,
  confirmPassword,
  acceptedPrivacy,
  acceptedTerms,
  registerBtnDisabled,
  isInputError,
  apiError,
  recaptchaError,
  loading,
  register
} = useRegisterByEmail()
const { isPassRule1, isPassRule2, isPassRule3 } = usePasswordValid(password)
</script>
<template>
  <div class="-m-3 sm:-mx-8 sm:flex">
    <div
      class="min-h-screen w-full flex-1 px-[30px] pt-[91px] sm:flex sm:w-auto sm:flex-col sm:items-center sm:justify-center sm:pt-0"
    >
      <img
        class="mx-auto my-10 mb-[50px] mt-16 w-40"
        src="../assets/images/logo_dark_v6.png"
        alt=""
      />
      <div class="mx-auto w-full sm:w-1/2">
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
        </div>
        <PasswordValid
          :is-pass-rule1="isPassRule1"
          :is-pass-rule2="isPassRule2"
          :is-pass-rule3="isPassRule3"
        />
        <div class="mb-5">
          <span class="mb-1 text-xs">{{
            t('signup-confirm-password-label')
          }}</span>
          <FormInput
            class="rounded-lg border"
            v-model="confirmPassword"
            type="password"
            :placeholder="t('signup-confirm-password-placeholder')"
            @keyup.enter="register"
          />
          <div
            v-if="isInputError && password && email && !confirmPassword"
            class="mt-1 text-xs text-red-500"
          >
            {{ t('error-message8') }}
          </div>
          <div v-if="apiError" class="mt-1 text-xs text-red-500">
            {{ apiError }}
          </div>
        </div>
        <FormCheck>
          <FormCheck.Input v-model="acceptedTerms" type="checkbox" />
          <FormCheck.Label
            >{{ t('signup-agree-text') }}
            <a href="/terms" target="_blank">{{ t('signup-terms-text') }}</a
            >{{ t('signup-terms-and-text')
            }}<a href="/privacy" target="_blank">{{
              t('signup-terms-privacy-text')
            }}</a></FormCheck.Label
          >
        </FormCheck>
        <FormCheck class="mb-3">
          <FormCheck.Input v-model="acceptedPrivacy" type="checkbox" />
          <FormCheck.Label>{{ t('signup-receive-edm-text') }}</FormCheck.Label>
        </FormCheck>
        <div
          id="recaptcha"
          class="mb-[30px] h-[78px] w-[304px]"
          :class="{ 'border border-red-500': recaptchaError }"
        ></div>
        <Button
          variant="primary"
          class="w-full"
          :disabled="
            registerBtnDisabled || !isPassRule1 || !isPassRule2 || !isPassRule3
          "
          @click="register(isPassRule1, isPassRule2, isPassRule3)"
          :loading="loading"
          >{{ t('signup-btn') }}</Button
        >
      </div>
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
