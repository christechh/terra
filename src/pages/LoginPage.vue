<script setup lang="ts">
import { ref, watch } from 'vue'
import illustrationUrl from '../assets/images/illustration.svg'
import logoUrl from '../assets/images/logo.svg'
import Button from '../base-components/Button'
import { FormInput } from '../base-components/Form'

import CommonModal from '../components/Modals/CommonModal'

import { useI18n } from 'vue-i18n'
// import { useRouter } from 'vue-router'
import logoImg from '../assets/images/login-logo.svg'
import Lucide from '../base-components/Lucide'
import { useUserStore } from '../stores/user'

// const router = useRouter()
const email = ref('')
const password = ref('')
const passwordType = ref('password')
const isEyeOffVisible = ref(false)
const isEyeVisible = ref(true)
const { t } = useI18n()
const isInputError = ref(false)
const isLoging = ref(false)
const apiError = ref('')
const isAdminLoginMode = ref(false)
const count = ref(0)
// const isAndroid = ref(navigator.userAgent.toLowerCase().indexOf('android') > -1)
const accumulateCount = () => {
  if (!isAdminLoginMode.value) count.value++
  else count.value--

  if (count.value === 5) isAdminLoginMode.value = true
  else if (count.value === 0) isAdminLoginMode.value = false
}
const doLogin = () => {
  if (!email.value || !password.value) {
    return (isInputError.value = true)
  }
  apiError.value = ''
  isLoging.value = true
  useUserStore()
    .login(
      {
        email: email.value,
        password: password.value
      },
      isAdminLoginMode.value
    )
    .catch((e) => {
      apiError.value = e.response.data.errors[0].message
    })
    .finally(() => {
      isLoging.value = false
    })
}

const eyeOpen = (status: boolean) => {
  if (status === true) {
    isEyeOffVisible.value = false
    isEyeVisible.value = true
    passwordType.value = 'password'
  } else {
    isEyeOffVisible.value = true
    isEyeVisible.value = false
    passwordType.value = 'text'
  }
}
watch([email, password], () => {
  isInputError.value = false
})
</script>

<template>
  <div>
    <img :src="logoImg" alt="" class="mx-auto mb-[50px] mt-16 w-80" />
    <div
      class="mx-auto w-full rounded-lg border p-[50px] pt-[30px] text-xl sm:w-[66%] md:w-1/2 lg:w-[467px]"
    >
      <div class="mb-7 text-center font-extrabold" @click="accumulateCount">
        {{ isAdminLoginMode ? 'admin ' + t('login-title') : t('login-title') }}
      </div>
      <div class="mb-3">
        <span class="mb-1 text-sm">{{ t('login-email-label') }}</span>
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
        <span class="mb-1 text-sm">{{ t('login-password-label') }}</span>
        <FormInput
          class="rounded-lg border"
          v-model="password"
          type="password"
          :placeholder="t('signup-password-place-holder')"
          @keyup.enter="doLogin"
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
      <!-- <div class="mb-5 text-center">
        <button
          class="text-xs text-[#808080] underline"
          @click="router.push({ name: 'reset' })"
        >
          {{ t('login-forget-btn') }}
        </button>
      </div> -->
      <Button
        variant="primary"
        class="mb-3 w-full text-sm"
        @click="doLogin"
        :loading="isLoging"
        >{{ t('login-btn') }}</Button
      >
      <!-- <div class="mb-5 text-center text-sm">
        <span>{{ t('login-no-sign-up-login-text') }}</span
        ><button
          class="text-[#808080] underline"
          @click="router.push({ name: 'register' })"
        >
          {{ t('login-sign-up-btn') }}
        </button>
      </div> -->
      <div class="my-5 flex items-center justify-center">
        <hr class="flex-1" />
        <span class="px-1 text-sm">{{ t('or') }}</span>
        <hr class="flex-1" />
      </div>
      <div class="flex flex-col gap-3">
        <!-- <Button
          v-if="!isAndroid"
          class="relative w-full border border-black text-sm font-semibold"
        >
          <img
            class="absolute left-3"
            src="../assets/images/apple_logo.svg"
            alt=""
          />
          {{ t('signup-apple-btn-title') }}</Button
        > -->
        <Button
          class="relative w-full border border-black text-sm font-semibold"
        >
          <img
            class="absolute left-3"
            src="../assets/images/google_logo.svg"
            alt=""
          />{{ t('signup-google-btn-title') }}</Button
        >
        <!-- <Button
          class="relative w-full border border-black text-sm font-semibold"
        >
          <img
            class="absolute left-3"
            src="../assets/images/facebook_logo.svg"
            alt=""
          />{{ t('signup-facebook-btn-title') }}</Button
        > -->
        <!-- <Button
          class="relative w-full border border-black text-sm font-semibold"
          @click="$router.push({ name: 'loginByPhone' })"
        >
          <img
            class="absolute left-3"
            src="../assets/images/phone.svg"
            alt=""
          />{{ t('login-phone-btn-title') }}</Button
        > -->
        <!-- <Button
          class="relative w-full border border-black text-sm font-semibold"
          @click="$router.push({ name: 'sublogin' })"
        >
          <img
            class="absolute left-3"
            src="../assets/images/sub-account-login.svg"
            alt=""
          />{{ t('sub-account-login-title') }}</Button
        > -->
      </div>
    </div>
  </div>
  <div
    :class="[
      'hidden',
      'relative -m-3 h-screen bg-primary p-3 dark:bg-darkmode-800 sm:-mx-8 sm:px-8 lg:overflow-hidden xl:bg-white xl:dark:bg-darkmode-600',
      'before:absolute before:inset-y-0 before:left-0 before:-mb-[16%] before:-ml-[13%] before:-mt-[28%] before:hidden before:w-[57%] before:rotate-[-4.5deg] before:transform before:rounded-[100%] before:bg-primary/20 before:content-[\'\'] before:dark:bg-darkmode-400 before:xl:block',
      'after:absolute after:inset-y-0 after:left-0 after:-mb-[13%] after:-ml-[13%] after:-mt-[20%] after:hidden after:w-[57%] after:rotate-[-4.5deg] after:transform after:rounded-[100%] after:bg-primary after:content-[\'\'] after:dark:bg-darkmode-700 after:xl:block'
    ]"
  >
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="hidden min-h-screen flex-col xl:flex">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6"
              :src="logoUrl"
            />
            <span class="ml-3 text-3xl text-white">Biliguakid</span>
          </a>
          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="-intro-x -mt-16 w-1/2"
              :src="illustrationUrl"
            />
            <div
              class="-intro-x mt-10 text-4xl font-medium leading-tight text-white"
            >
              A few more clicks to <br />
              sign in to your account.
            </div>
            <div
              class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400"
            >
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="my-10 flex h-screen py-5 xl:my-0 xl:h-auto xl:py-0">
          <div
            class="mx-auto my-auto w-full rounded-md bg-white px-5 py-8 shadow-md dark:bg-darkmode-600 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-20 xl:w-auto xl:bg-transparent xl:p-0 xl:shadow-none"
          >
            <h2
              class="intro-x text-center text-2xl font-bold xl:text-left xl:text-3xl"
            >
              登入
            </h2>
            <div class="intro-x mt-2 text-center text-slate-400 xl:hidden">
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div>
            <div class="intro-x mt-8">
              <FormInput
                type="text"
                v-model="email"
                class="intro-x login__input block min-w-full px-4 py-3 xl:min-w-[350px]"
                placeholder="帳號"
              />
              <div class="relative">
                <FormInput
                  :type="passwordType"
                  v-model="password"
                  class="intro-x login__input mt-4 block min-w-full px-4 py-3 xl:min-w-[350px]"
                  placeholder="密碼"
                />
                <Lucide
                  icon="EyeOff"
                  class="absolute cursor-pointer"
                  v-if="isEyeOffVisible"
                  @click="eyeOpen(true)"
                  style="right: 15px; top: 10px; z-index: 49"
                />
                <Lucide
                  icon="Eye"
                  class="absolute cursor-pointer"
                  v-if="isEyeVisible"
                  @click="eyeOpen(false)"
                  style="right: 15px; top: 10px; z-index: 49"
                />
              </div>
            </div>
            <!-- <div
              class="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm"
            >
              <div class="flex items-center mr-auto">
                <FormCheck.Input
                  id="remember-me"
                  type="checkbox"
                  class="mr-2 border"
                />
                <label class="cursor-pointer select-none" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <a href="">Forgot Password?</a>
            </div> -->
            <div class="mt-4 flex justify-end">
              <a href="/forgot-password">忘記密碼</a>
            </div>
            <div class="intro-x mt-5 text-center xl:mt-8 xl:text-left">
              <Button
                variant="primary"
                class="w-full px-4 py-3 align-top xl:mr-3 xl:w-32"
                @click="doLogin"
              >
                Login
              </Button>
              <!-- <Button
                variant="outline-secondary"
                class="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
              >
                Register
              </Button> -->
            </div>
            <!-- <div
              class="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-left"
            >
              By signin up, you agree to our
              <a class="text-primary dark:text-slate-200" href="">
                Terms and Conditions
              </a>
              &
              <a class="text-primary dark:text-slate-200" href="">
                Privacy Policy
              </a>
            </div> -->
          </div>
        </div>
        <!-- END: Login Form -->
        <CommonModal />
      </div>
    </div>
  </div>
</template>
