<script setup lang="ts">
import { ref } from 'vue'
import Lucide from '../../base-components/Lucide'
import Button from '../../base-components/Button'
import { FormInput, FormLabel, FormSwitch } from '../../base-components/Form'
import { CreateLinePayDTO } from '../../stores/payment'
import usePayment from './composables/usePayment'

const { setPaymentByMethod } = usePayment()
const submitChange = ref(false)
const form = ref<CreateLinePayDTO>({
  line_pay_open: false,
  line_pay_channel_id: '',
  line_pay_channel_secret_key_id: ''
})

const submit = () => {
  setPaymentByMethod('LinePay', {
    line_pay_open: form.value.line_pay_open,
    line_pay_channel_id: form.value.line_pay_channel_id,
    line_pay_channel_secret_key_id: form.value.line_pay_channel_secret_key_id
  })
}
</script>

<template>
  <div class="">
    <div
      class="mb-4 flex items-center justify-between rounded-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div class="flex">
        <b class="text-base">{{ $t('payment-flow-turn-on-line-pay') }}</b>
        <Lucide icon="HelpCircle" class="ml-2 mr-2 mt-1 h-4 w-4" />
        <FormSwitch>
          <FormSwitch.Input
            class="ml-8"
            v-model="form.line_pay_open"
            id="checkbox-switch-7"
            type="checkbox"
          />
        </FormSwitch>
      </div>
    </div>
    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <b class="text-base">{{ $t('payment-flow-line-pay-settings') }}</b>
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
                  >{{ $t('payment-flow-line-pay-channel-id') }}
                  <Lucide icon="HelpCircle" class="ml-2 mr-2 mt-0.5 h-4 w-4" />
                </FormLabel>
                <FormInput
                  v-model="form.line_pay_channel_id"
                  class="w-6/12"
                  type="text"
                  :class="resetPsdError ? 'border border-danger' : ''"
                />
              </div>
              <div class="col-span-4">
                <FormLabel class="mb-2 mr-2 mt-2 flex text-start"
                  >{{ $t('payment-flow-line-pay-channel-secret-key') }}
                  <Lucide icon="HelpCircle" class="ml-2 mr-2 mt-0.5 h-4 w-4"
                /></FormLabel>
                <FormInput
                  v-model="form.line_pay_channel_secret_key_id"
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
