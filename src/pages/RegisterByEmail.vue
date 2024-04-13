<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Button from '../base-components/Button'
import { FormCheck, FormInput } from '../base-components/Form'
import PasswordValid from '../components/PasswordValid.vue'
import usePasswordValid from '../composables/usePasswordValid'
import useRegisterByEmail from '../composables/useRegisterByEmail'
import RegisterLayout from '../layouts/RegisterLayout.vue'
const { t } = useI18n()
const {
  account,
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
      <div class="mb-3">
        <div class="mb-1 text-xs">{{ t('login-email-label') }}</div>
        <FormInput
          class="rounded-lg border"
          v-model="account"
          type="text"
          :placeholder="t('signup-login-placeholder-email')"
        />
        <div v-if="isInputError && !account" class="mt-1 text-xs text-red-500">
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
          v-if="isInputError && !password && account"
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
          v-if="isInputError && password && account && !confirmPassword"
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
    <div class="mb-5 mt-2 text-center text-[#484848]">
      {{ t('signup-login-text')
      }}<button
        class="text-[#484848] underline"
        @click="router.push({ name: 'login' })"
      >
        {{ t('signup-login-btn') }}
      </button>
    </div>
  </RegisterLayout>
</template>
