<script setup lang="ts">
import { ref } from 'vue'
import Lucide from '../../base-components/Lucide'
import Button from '../../base-components/Button'
import { FormInput, FormLabel, FormSwitch } from '../../base-components/Form'
import { CreateStripeDTO } from '../../stores/payment'
import usePayment from './composables/usePayment'

const { setPaymentByMethod } = usePayment()
const submitChange = ref(false)
const turnOnTooltipShow = ref(false)
const publicKeyTooltipShow = ref(false)
const secretKeyTooltipShow = ref(false)
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

const toggleTurnOnTooltip = () => {
  if (turnOnTooltipShow.value) {
    turnOnTooltipShow.value = false
  } else {
    turnOnTooltipShow.value = true
  }
}

const togglePublicKeyTooltip = () => {
  if (publicKeyTooltipShow.value) {
    publicKeyTooltipShow.value = false
  } else {
    publicKeyTooltipShow.value = true
  }
}

const toggleSecretKeyTooltip = () => {
  if (secretKeyTooltipShow.value) {
    secretKeyTooltipShow.value = false
  } else {
    secretKeyTooltipShow.value = true
  }
}
</script>

<template>
  <div class="">
    <div
      class="mb-4 flex items-center justify-between rounded-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div class="flex">
        <b class="text-base">{{ $t('payment-flow-turn-on-stripe') }}</b>
        <Lucide
          icon="HelpCircle"
          class="ml-2 mr-2 mt-1 h-4 w-4"
          @mouseenter="toggleTurnOnTooltip()"
          @mouseleave="toggleTurnOnTooltip()"
        />
        <div
          :class="{ hidden: !turnOnTooltipShow }"
          class="absolute top-10 mx-2 mb-4 w-44"
        >
          <div
            class="bottom-full right-0 rounded bg-gray-600 px-4 py-1 text-xs text-white"
          >
            {{ $t('payment-flow-tooltip-turn-on-stripe') }}
            <svg
              class="absolute left-0 top-full h-2 w-full text-gray-600"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xml:space="preserve"
            >
              <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
          </div>
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
                  <Lucide
                    icon="HelpCircle"
                    class="ml-2 mr-2 mt-0.5 h-4 w-4"
                    @mouseenter="togglePublicKeyTooltip()"
                    @mouseleave="togglePublicKeyTooltip()"
                  />
                  <div
                    :class="{ hidden: !publicKeyTooltipShow }"
                    class="absolute z-50 mx-2 mb-4 w-44"
                    style="top: 14rem"
                  >
                    <div
                      class="bottom-full right-0 rounded bg-gray-600 px-4 py-1 text-xs text-white"
                    >
                      {{ $t('payment-flow-tooltip-stripe-public-key') }}
                      <svg
                        class="absolute left-0 top-full h-2 w-full text-gray-600"
                        x="0px"
                        y="0px"
                        viewBox="0 0 255 255"
                        xml:space="preserve"
                      >
                        <polygon
                          class="fill-current"
                          points="0,0 127.5,127.5 255,0"
                        />
                      </svg>
                    </div>
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
                  <Lucide
                    icon="HelpCircle"
                    class="ml-2 mr-2 mt-0.5 h-4 w-4"
                    @mouseenter="toggleSecretKeyTooltip()"
                    @mouseleave="toggleSecretKeyTooltip()"
                  />
                  <div
                    :class="{ hidden: !secretKeyTooltipShow }"
                    class="absolute z-50 mx-2 mb-4 w-44"
                    style="top: 19rem"
                  >
                    <div
                      class="bottom-full right-0 rounded bg-gray-600 px-4 py-1 text-xs text-white"
                    >
                      {{ $t('payment-flow-tooltip-stripe-secret-key') }}
                      <svg
                        class="absolute left-0 top-full h-2 w-full text-gray-600"
                        x="0px"
                        y="0px"
                        viewBox="0 0 255 255"
                        xml:space="preserve"
                      >
                        <polygon
                          class="fill-current"
                          points="0,0 127.5,127.5 255,0"
                        />
                      </svg>
                    </div>
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
