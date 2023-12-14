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
      class="mb-4 flex items-center justify-between rounded-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div class="flex">
        <b class="text-base">{{ $t('payment-flow-turn-on-paypal') }}</b>
        <div
          class="ml-2"
          v-tooltip:top.tooltip="$t('payment-flow-tooltip-turn-on-paypal')"
        >
          <Lucide icon="HelpCircle" width="14" />
        </div>
        <FormSwitch>
          <FormSwitch.Input
            class="ml-8"
            v-model="form.paypal_open"
            id="checkbox-switch-7"
            type="checkbox"
          />
        </FormSwitch>
      </div>
    </div>
    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <b class="text-base">{{ $t('payment-flow-paypal-settings') }}</b>
      <Button
        class="w-1/12"
        variant="primary"
        :disabled="submitChange"
        @click="submit"
        >{{ $t('chatbot-save-btn') }}</Button
      >
    </div>
    <div class="mt-0.5 rounded-b-xl bg-white p-4 dark:bg-darkmode-600">
      <div class="block lg:flex">
        <div class="flex-1">
          <div class="mt-2 rounded-xl bg-white dark:bg-darkmode-600">
            <div class="grid grid-cols-4 gap-y-4 pb-6 pl-4 pr-4 pt-2">
              <div class="col-span-4 flex">
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
              <div class="col-span-4">
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
                <FormInput
                  v-model="form.paypal_client_id"
                  class="w-6/12"
                  type="text"
                />
              </div>
              <div class="col-span-4">
                <FormLabel class="mb-2 mr-2 mt-2 flex text-start"
                  >{{ $t('payment-flow-paypal-secret') }}
                  <div
                    class="ml-2"
                    v-tooltip:top.tooltip="
                      $t('payment-flow-tooltip-paypal-secret')
                    "
                  >
                    <Lucide icon="HelpCircle" width="14" />
                  </div>
                </FormLabel>
                <FormInput
                  v-model="form.paypal_secret"
                  type="text"
                  class="w-6/12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
