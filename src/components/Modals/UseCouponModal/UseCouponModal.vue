<script lang="ts" setup>
import { ref, watch } from 'vue'
import Button from '../../../base-components/Button'
import { FormInput } from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import axios from '../../../axios'
import usePrincingPlan from '../../../pages/settings/composables/usePrincingPlan'
import { AxiosRequestConfig } from 'axios'

const emit = defineEmits(['close'])
const couponCode = ref('')
const errorMessage = ref('')
const { getPrincingPlan } = usePrincingPlan()

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipInterceptor?: boolean
}

type Error = {
  response?: {
    data?: {
      message?: string
    }
  }
}
async function checkCouponCode() {
  try {
    errorMessage.value = ''
    await axios.get(`/coupon/checkAvailable/${couponCode.value}`, {
      skipInterceptor: true
    } as CustomAxiosRequestConfig)
    await axios.post(`/coupon/directlyRedeem/${couponCode.value}`, {}, {
      skipInterceptor: true
    } as CustomAxiosRequestConfig)
    window.alert('Success')
    emit('close')
    await getPrincingPlan()
  } catch (error: unknown) {
    errorMessage.value = (error as Error)!.response?.data?.message as string
  }
}

watch(couponCode, () => {
  errorMessage.value = ''
})
</script>

<template>
  <component :is="Dialog" :open="true" size="md">
    <component :is="Dialog.Panel" class="p-4 md:w-[400px]">
      <div class="relative mb-5" :class="'text-center text-xl'">
        {{ $t('payment-use-coupon') }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <div class="mb-6">
        <div class="relative">
          <FormInput
            :class="[
              'flex-1',
              errorMessage && 'rounded-lg border border-solid border-red-400'
            ]"
            type="text"
            :placeholder="$t('payment-please-input-coupon-code')"
            v-model="couponCode"
          />
          <div
            v-show="couponCode"
            class="absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#bfbfbf] p-1 text-white"
            @click="(couponCode = ''), (errorMessage = '')"
          >
            <Lucide icon="X" :size="9" class="stroke-[3]"></Lucide>
          </div>
        </div>
        <p v-if="errorMessage" class="ml-1 mt-1 text-[12px] text-red-500">
          {{ errorMessage }}
        </p>
      </div>
      <div class="mb-6 flex justify-center">
        <button
          class="mr-10 flex h-[40px] items-center justify-center gap-2 rounded-lg border border-primary px-10 text-base font-bold text-primary"
          @click="() => emit('close')"
        >
          {{ $t('payment-coupon-modal-cancel-button') }}
        </button>
        <Button
          variant="primary"
          :disabled="!couponCode"
          class="px-10"
          @click="checkCouponCode"
          >{{ $t('payment-coupon-modal-use-button') }}</Button
        >
      </div>
    </component>
  </component>
</template>
