<script setup lang="ts">
import { ref } from 'vue'
import Lucide from '../../base-components/Lucide'
import Button from '../../base-components/Button'
import { FormInput, FormLabel, FormSwitch } from '../../base-components/Form'
import { CreatePayPalDTO } from '../../stores/payment'
import usePayment from './composables/usePayment'

const { setPaymentByMethod } = usePayment()
const submitChange = ref(false)
const form = ref<CreatePayPalDTO>({
  paypal_open: false,
  paypal_sandbox_mode: import.meta.env.NODE_ENV !== 'production',
  paypal_client_id: '',
  paypal_secret: ''
})

const submit = () => {
  setPaymentByMethod('PayPal', {
    paypal_open: form.value.paypal_open,
    paypal_sandbox_mode: form.value.paypal_sandbox_mode,
    paypal_client_id: form.value.paypal_client_id,
    paypal_secret: form.value.paypal_secret
  })
}
</script>

<template>
  <div class="">
    <div
      class="relative mt-5 flex items-center border-0 bg-white p-5 pl-10"
      style="border-radius: 20px"
    >
      <div class="text-base">{{ $t('payment-flow-turn-on-paypal') }}</div>
      <div
        class="ml-2"
        v-tooltip:top.tooltip="$t('payment-flow-tooltip-turn-on-paypal')"
      >
        <Lucide icon="HelpCircle" width="14" />
      </div>
      <FormSwitch class="ml-5 text-gray-700">
        <FormSwitch.Input
          class="ml-8"
          v-model="form.paypal_open"
          id="checkbox-switch-7"
          type="checkbox"
        />
      </FormSwitch>
    </div>
    <div
      class="relative mt-5 flex flex-col border-0 bg-white pl-5"
      style="border-radius: 20px"
    >
      <div
        class="flex flex-row content-between items-center border-b border-gray-200 p-5 text-black"
      >
        <h2 class="mr-auto">{{ $t('payment-flow-paypal-settings') }}</h2>
        <Button
          class="w-1/12"
          variant="primary"
          :disabled="submitChange"
          @click="submit"
          >{{ $t('chatbot-save-btn') }}</Button
        >
      </div>
      <div class="px-5 pt-5 text-black">
        <div class="flex items-center py-1">
          <FormLabel class="mb-0 text-start">{{
            $t('payment-flow-paypal-live-mode')
          }}</FormLabel>
          <div
            class="ml-2"
            v-tooltip:top.tooltip="
              $t('payment-flow-tooltip-paypal-sandbox-mode')
            "
          >
            <Lucide icon="HelpCircle" width="14" />
          </div>
          <FormSwitch>
            <FormSwitch.Input
              class="ml-8"
              v-model="form.paypal_sandbox_mode"
              id="checkbox-switch-7"
              type="checkbox"
            />
          </FormSwitch>
        </div>
      </div>
      <div class="p-5 text-black">
        <div class="flex items-center py-1">
          <FormLabel class="mb-2 mr-2 mt-2 flex text-start"
            >{{ $t('payment-flow-paypal-client-id') }}
            <div
              class="ml-2"
              v-tooltip:top.tooltip="
                $t('payment-flow-tooltip-paypal-client-id')
              "
            >
              <Lucide icon="HelpCircle" width="14" />
            </div>
          </FormLabel>
        </div>
        <div class="pb-3 pt-1">
          <FormInput
            v-model="form.paypal_client_id"
            class="w-6/12"
            type="text"
          />
        </div>
        <div class="flex items-center py-1">
          <FormLabel class="mb-2 mr-2 mt-2 flex text-start"
            >{{ $t('payment-flow-paypal-secret') }}
            <div
              class="ml-2"
              v-tooltip:top.tooltip="$t('payment-flow-tooltip-paypal-secret')"
            >
              <Lucide icon="HelpCircle" width="14" />
            </div>
          </FormLabel>
        </div>
        <div class="pb-3 pt-1">
          <FormInput v-model="form.paypal_secret" type="text" class="w-6/12" />
        </div>
      </div>
    </div>
  </div>
</template>
