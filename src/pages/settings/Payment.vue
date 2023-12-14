<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Lucide from '../../base-components/Lucide'
import usePayment from './composables/usePayment'
import { convertYmdHis } from '../../lib/timeLib'
import SidebarModal from '../../components/Modals/SidebarModal'
import { Payment } from '../../stores/payment'
import { useRedirectToStore } from '../../stores/redirect-to'

const { payments, fetchAllPayments, getPaymentStatus, getPaymentMethod } =
  usePayment()
const detail = ref<Record<string, unknown>>({} as Payment)

const childComponentRef = ref<InstanceType<typeof SidebarModal> | null>(null)

const controlModal = (payment: Payment) => {
  childComponentRef.value?.setOpen(true)
  detail.value = {
    enterPointName: payment.enterpoint.name,
    paymentUserName: payment.payment_user.name,
    amount: payment.amount,
    requestAt: convertYmdHis(payment.request_at as string),
    paymentAt: convertYmdHis(payment.payment_at as string),
    paymentStatus: getPaymentStatus(payment.status),
    paymentMethod: getPaymentMethod(payment.method),
    currency: payment.currency,
    paymentNote: payment.note
  }
}

const directToPaymentSetting = (method: 'LinePay' | 'Stripe' | 'PayPal') => {
  useRedirectToStore().redirect({
    path: `/dashboard/settings/payment/${method.toLowerCase()}`
  })
}

onMounted(() => {
  fetchAllPayments()
})

watch(payments, () => {
  fetchAllPayments()
})
</script>

<template>
  <SidebarModal ref="childComponentRef" :detail="detail" />
  <div class="">
    <div
      class="flex items-center justify-between rounded-t-xl p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div class="grid w-full grid-cols-12 text-center">
        <button
          variant="primary"
          type="button"
          class="col-span-4 m-4 flex h-40 flex-wrap items-center justify-center whitespace-nowrap rounded-lg bg-white"
          @click="() => directToPaymentSetting('PayPal')"
        >
          <img
            class="h-4/6 w-full"
            src="https://logos-world.net/wp-content/uploads/2020/08/PayPal-Symbol.png"
          />
          {{ $t('payment-flow-go-to-settings') }}
          <Lucide icon="ChevronRight" />
        </button>
        <button
          variant="primary"
          type="button"
          class="col-span-4 m-4 flex h-40 flex-wrap items-center justify-center whitespace-nowrap rounded-lg bg-white"
          @click="() => directToPaymentSetting('Stripe')"
        >
          <img
            class="h-4/6 w-full"
            src="https://i0.wp.com/jimfitzpatrick.com/wp-content/uploads/2016/11/Stripe-Logo-blue-copy.png?ssl=1"
          />
          {{ $t('payment-flow-go-to-settings') }}
          <Lucide icon="ChevronRight" />
        </button>
        <button
          variant="primary"
          type="button"
          class="col-span-4 m-4 flex h-40 flex-wrap items-center justify-center whitespace-nowrap rounded-lg bg-white"
          @click="() => directToPaymentSetting('LinePay')"
        >
          <img
            class="h-4/6 w-full"
            src="https://cpok.tw/wp-content/uploads/2020/10/line-pay-1.png"
          />
          {{ $t('payment-flow-go-to-settings') }}
          <Lucide icon="ChevronRight" />
        </button>
      </div>
    </div>

    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('payment-flow-history-record') }}</b>
      </div>
    </div>
    <div class="mt-1 rounded-b-xl bg-white p-4 dark:bg-darkmode-600">
      <div class="grid grid-cols-12 text-center">
        <b
          class="col-span-1 flex h-[60px] items-center justify-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-flow-payers-profile') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center justify-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-flow-chatrooms-name') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center justify-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-flow-payers-nickname') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center justify-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-flow-request-time') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center justify-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-flow-payment-time') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center justify-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-flow-status') }}</b
        >
        <b
          class="col-span-1 flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-flow-check-details') }}</b
        >
        <template v-for="payment in payments" :key="payment.id">
          <span
            class="col-span-1 flex h-[60px] items-center justify-center border-b border-solid border-[#e2e8f0] p-2"
          >
            <img
              class="h-10 w-10 rounded-full"
              :src="
                payment?.payment_user?.avatar ||
                'https://pinchat.me/images/avatar1.png'
              "
            />
          </span>
          <span
            class="col-span-2 flex h-[60px] items-center justify-center overflow-hidden text-ellipsis border-b border-solid border-[#e2e8f0] p-2"
            >{{ payment.enterpoint.name }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center justify-center overflow-hidden text-ellipsis border-b border-solid border-[#e2e8f0] p-2"
            >{{ payment.payment_user.name }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center justify-center border-b border-solid border-[#e2e8f0] p-2"
            >{{ convertYmdHis(payment.request_at) }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center justify-center border-b border-solid border-[#e2e8f0] p-2"
            >{{ convertYmdHis(payment.payment_at) }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center justify-center border-b border-solid border-[#e2e8f0] p-2"
            >{{ $t(`${getPaymentStatus(payment.status)}`) }}</span
          >
          <span
            class="justify-content col-span-1 flex h-[60px] items-center border-b border-solid border-[#e2e8f0]"
          >
            <Lucide
              :size="20"
              class="-rotate-90 cursor-pointer"
              icon="CircleEllipsis"
              @click="() => controlModal(payment)"
            />
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
