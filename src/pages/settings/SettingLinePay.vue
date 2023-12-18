<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Lucide from '../../base-components/Lucide'
import Button from '../../base-components/Button'
import { FormInput, FormLabel, FormSwitch } from '../../base-components/Form'
import { CreateLinePayDTO } from '../../stores/payment'
import { useNotificationsStore } from '../../stores/notifications'
import usePayment from './composables/usePayment'

const { setPaymentByMethod, fetchSelfSetting, setting } = usePayment()
const submitChange = ref(false)
const form = ref<CreateLinePayDTO>({
  line_pay_open: false,
  line_pay_channel_id: '',
  line_pay_channel_secret_key_id: ''
})

const submit = () => {
  try {
    setPaymentByMethod('LinePay', {
      line_pay_open: form.value.line_pay_open,
      line_pay_channel_id: form.value.line_pay_channel_id,
      line_pay_channel_secret_key_id: form.value.line_pay_channel_secret_key_id
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

onMounted(async () => {
  await fetchSelfSetting()
  form.value.line_pay_open = setting.value.line_pay_open
  if (setting.value.line_pay_channel_id) {
    form.value.line_pay_channel_id = setting.value.line_pay_channel_id
  }
  if (setting.value.line_pay_channel_secret_key_id) {
    form.value.line_pay_channel_secret_key_id =
      setting.value.line_pay_channel_secret_key_id
  }
})
</script>

<template>
  <div class="">
    <div
      class="relative mt-5 flex items-center border-0 bg-white p-5"
      style="border-radius: 20px"
    >
      <div class="text-sm">{{ $t('payment-flow-turn-on-line-pay') }}</div>
      <div
        class="ml-2"
        v-tooltip:top.tooltip="$t('payment-flow-tooltip-turn-on-line-pay')"
      >
        <Lucide icon="HelpCircle" width="14" />
      </div>
      <FormSwitch class="ml-5 text-gray-700">
        <FormSwitch.Input
          class="ml-8"
          v-model="form.line_pay_open"
          id="checkbox-switch-7"
          type="checkbox"
          @change="setIsEdit"
        />
      </FormSwitch>
    </div>
    <div
      class="relative mt-5 flex flex-col border-0 bg-white"
      style="border-radius: 20px"
    >
      <div
        class="flex flex-row content-between items-center border-b border-gray-200 p-5 text-black"
      >
        <h2 class="mr-auto text-base">
          {{ $t('payment-flow-line-pay-settings') }}
        </h2>
        <Button
          class="w-1/12 disabled:opacity-50"
          variant="primary"
          :disabled="!submitChange"
          @click="submit"
          >{{ $t('chatbot-save-btn') }}</Button
        >
      </div>
      <div class="text-m p-5 pb-0 text-gray-600">
        <div>
          {{ $t('payment-flow-for-the-line-pay-collection') }}
          <a
            style="text-decoration: underline"
            href="https://funtek.notion.site/LINE-Pay-269803b912c2417991b99978e1a5e6fb"
            target="_blank"
          >
            {{ $t('payment-flow-please-refer-to-this-article-for-teaching') }}
          </a>
        </div>
      </div>
      <div class="p-5 text-black">
        <div class="flex items-center py-2.5">
          <FormLabel class="mb-2 mr-2 mt-2 flex items-center text-start"
            >{{ $t('payment-flow-line-pay-channel-id') }}
            <div
              class="ml-2"
              v-tooltip:top.tooltip="$t('payment-flow-tooltip-channel-id')"
            >
              <Lucide icon="HelpCircle" width="14" />
            </div>
          </FormLabel>
        </div>
        <div>
          <FormInput
            v-model="form.line_pay_channel_id"
            class="w-6/12"
            type="text"
            @input="setIsEdit"
          />
        </div>
        <div class="flex items-center py-2.5">
          <FormLabel class="mb-2 mr-2 mt-2 flex items-center text-start"
            >{{ $t('payment-flow-line-pay-channel-secret-key') }}
            <div
              class="ml-2"
              v-tooltip:top.tooltip="
                $t('payment-flow-tooltip-channel-secret-key')
              "
            >
              <Lucide icon="HelpCircle" width="14" />
            </div>
          </FormLabel>
        </div>
        <div>
          <FormInput
            v-model="form.line_pay_channel_secret_key_id"
            type="text"
            class="w-6/12"
            @input="setIsEdit"
          />
        </div>
      </div>
    </div>
  </div>
</template>
