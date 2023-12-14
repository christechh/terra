<script setup lang="ts">
import { ref } from 'vue'
import Lucide from '../../base-components/Lucide'
import Button from '../../base-components/Button'
import { FormInput, FormLabel, FormSwitch } from '../../base-components/Form'
import { CreateStripeDTO } from '../../stores/payment'
import usePayment from './composables/usePayment'

const { setPaymentByMethod } = usePayment()
const submitChange = ref(false)
const form = ref<CreateStripeDTO>({
  stripe_open: false,
  stripe_api_secret: '',
  stripe_webhook_secret: ''
})

const submit = () => {
  setPaymentByMethod('Stripe', {
    stripe_open: form.value.stripe_open,
    stripe_api_secret: form.value.stripe_api_secret,
    stripe_webhook_secret: form.value.stripe_webhook_secret
  })
}
</script>

<template>
  <div class="">
    <div
      class="mb-4 flex items-center justify-between rounded-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div class="flex">
        <b class="text-base">{{ $t('payment-flow-turn-on-stripe') }}</b>
        <div
          class="ml-2"
          v-tooltip:top.tooltip="$t('payment-flow-tooltip-turn-on-stripe')"
        >
          <Lucide icon="HelpCircle" width="14" />
        </div>
        <FormSwitch>
          <FormSwitch.Input
            class="ml-8"
            v-model="form.stripe_open"
            id="checkbox-switch-7"
            type="checkbox"
          />
        </FormSwitch>
      </div>
    </div>
    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <b class="text-base">{{ $t('payment-flow-stripe-settings') }}</b>
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
              <div class="col-span-4">
                <FormLabel class="mb-2 mr-2 mt-2 flex text-start"
                  >{{ $t('payment-flow-tooltip-stripe-public-key') }}
                  <div
                    class="ml-2"
                    v-tooltip:top.tooltip="
                      $t('payment-flow-tooltip-stripe-public-key')
                    "
                  >
                    <Lucide icon="HelpCircle" width="14" />
                  </div>
                </FormLabel>
                <FormInput
                  v-model="form.stripe_api_secret"
                  class="w-6/12"
                  type="text"
                />
              </div>
              <div class="col-span-4">
                <FormLabel class="mb-2 mr-2 mt-2 flex text-start"
                  >{{ $t('payment-flow-tooltip-stripe-secret-key') }}
                  <div
                    class="ml-2"
                    v-tooltip:top.tooltip="
                      $t('payment-flow-tooltip-stripe-secret-key')
                    "
                  >
                    <Lucide icon="HelpCircle" width="14" />
                  </div>
                </FormLabel>
                <FormInput
                  v-model="form.stripe_webhook_secret"
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
