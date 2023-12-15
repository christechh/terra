<script setup lang="ts">
import { ref } from 'vue'
import Lucide from '../../base-components/Lucide'
import Button from '../../base-components/Button'
import { FormInput, FormLabel, FormSwitch } from '../../base-components/Form'
import { CreateStripeDTO } from '../../stores/payment'
import { useNotificationsStore } from '../../stores/notifications'
import usePayment from './composables/usePayment'

const { setPaymentByMethod } = usePayment()
const submitChange = ref(false)
const form = ref<CreateStripeDTO>({
  stripe_open: false,
  stripe_api_secret: '',
  stripe_webhook_secret: ''
})

const submit = async () => {
  try {
    await setPaymentByMethod('Stripe', {
      stripe_open: form.value.stripe_open,
      stripe_api_secret: form.value.stripe_api_secret,
      stripe_webhook_secret: form.value.stripe_webhook_secret
    })
    useNotificationsStore().showSaveSuccess()
  } catch (error) {
    useNotificationsStore().showSaveError()
  } finally {
    submitChange.value = false
  }
}

const setIsEdit = () => {
  submitChange.value = true
}
</script>

<template>
  <div class="">
    <div
      class="relative mt-5 flex items-center border-0 bg-white p-5 pl-7"
      style="border-radius: 20px"
    >
      <div class="text-base">{{ $t('payment-flow-turn-on-stripe') }}</div>
      <div
        class="ml-2"
        v-tooltip:top.tooltip="$t('payment-flow-tooltip-turn-on-stripe')"
      >
        <Lucide icon="HelpCircle" width="14" />
      </div>
      <FormSwitch class="ml-5 text-gray-700">
        <FormSwitch.Input
          class="ml-8"
          v-model="form.stripe_open"
          id="checkbox-switch-7"
          type="checkbox"
          @change="setIsEdit"
        />
      </FormSwitch>
    </div>
    <div
      class="relative mt-5 flex flex-col border-0 bg-white pl-2.5"
      style="border-radius: 20px"
    >
      <div
        class="flex flex-row content-between items-center border-b border-gray-200 p-5 text-black"
      >
        <h2 class="mr-auto">{{ $t('payment-flow-stripe-settings') }}</h2>
        <Button
          class="w-1/12"
          variant="primary"
          :disabled="!submitChange"
          @click="submit"
          >{{ $t('chatbot-save-btn') }}</Button
        >
      </div>
      <div class="p-5 text-black">
        <div class="flex items-center py-1">
          <FormLabel class="mb-2 mr-2 mt-2 flex text-start"
            >{{ $t('payment-flow-stripe-stripe-public-key') }}
            <div
              class="ml-2"
              v-tooltip:top.tooltip="
                $t('payment-flow-tooltip-stripe-public-key')
              "
            >
              <Lucide icon="HelpCircle" width="14" />
            </div>
          </FormLabel>
        </div>
        <div class="pb-3 pt-1">
          <FormInput
            v-model="form.stripe_api_secret"
            class="w-6/12"
            type="text"
            @change="setIsEdit"
          />
        </div>
        <div class="flex items-center py-1">
          <FormLabel class="mb-2 mr-2 mt-2 flex text-start"
            >{{ $t('payment-flow-stripe-stripe-secret-key') }}
            <div
              class="ml-2"
              v-tooltip:top.tooltip="
                $t('payment-flow-tooltip-stripe-secret-key')
              "
            >
              <Lucide icon="HelpCircle" width="14" />
            </div>
          </FormLabel>
        </div>
        <div class="pb-3 pt-1">
          <FormInput
            v-model="form.stripe_webhook_secret"
            type="text"
            class="w-6/12"
            @change="setIsEdit"
          />
        </div>
      </div>
    </div>
  </div>
</template>
