<script setup lang="ts">
import { onMounted, watch } from 'vue'
// import noSubAccount from '../../assets/images/no-subAccount.png'
// import Button from '../../base-components/Button'
import Lucide from '../../base-components/Lucide'
// import { Payment, PaymentStatus, PaymentStatusText } from '../../stores/payment'
import usePayment from './composables/usePayment'

const { payments, fetchAllPayments } = usePayment()

// const selectedPaymentIndex = ref(-1)
// const selectedPayment: ref<Payment> = computed(
//   () => payments.value[selectedPaymentIndex.value] || null
// )

onMounted(() => {
  fetchAllPayments()
})

watch(payments, () => {
  fetchAllPayments()
})
</script>

<template>
  <div class="">
    <div
      class="flex items-center justify-between rounded-t-xl p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div class="grid w-full grid-cols-12 text-center">
        <Button
          variant="primary"
          class="col-span-4 m-4 flex h-40 flex-wrap items-center justify-center whitespace-nowrap rounded-lg bg-white"
        >
          <img
            class="h-4/6 w-full"
            src="https://logos-world.net/wp-content/uploads/2020/08/PayPal-Symbol.png"
          />
          {{ $t('payment-setting-btn') }}
          <Lucide icon="ChevronRight" />
        </Button>
        <Button
          variant="primary"
          class="col-span-4 m-4 flex h-40 flex-wrap items-center justify-center whitespace-nowrap rounded-lg bg-white"
        >
          <img
            class="h-4/6 w-full"
            src="https://i0.wp.com/jimfitzpatrick.com/wp-content/uploads/2016/11/Stripe-Logo-blue-copy.png?ssl=1"
          />
          {{ $t('payment-setting-btn') }}
          <Lucide icon="ChevronRight" />
        </Button>
        <Button
          variant="primary"
          class="col-span-4 m-4 flex h-40 flex-wrap items-center justify-center whitespace-nowrap rounded-lg bg-white"
        >
          <img
            class="h-4/6 w-full"
            src="https://cpok.tw/wp-content/uploads/2020/10/line-pay-1.png"
          />
          {{ $t('payment-setting-btn') }}
          <Lucide icon="ChevronRight" />
        </Button>
      </div>
    </div>

    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('payment-list') }}</b>
      </div>
    </div>
    <div class="mt-1 rounded-b-xl bg-white p-4 dark:bg-darkmode-600">
      <div class="grid grid-cols-12 text-center">
        <b
          class="col-span-1 flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-avatar') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-chat-room') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-username') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-request-at') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-payment-at') }}</b
        >
        <b
          class="col-span-2 flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-status') }}</b
        >
        <b
          class="col-span-1 flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-table-action') }}</b
        >
        <template v-for="payment in payments" :key="payment.id">
          <span
            class="col-span-1 flex h-[60px] items-center border-b border-solid border-[#e2e8f0]"
            >{{ payment.payment_user.avatar || '' }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center border-b border-solid border-[#e2e8f0]"
            >{{ payment.chatRoomId }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center border-b border-solid border-[#e2e8f0]"
            >{{ payment.payment_user.name }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center border-b border-solid border-[#e2e8f0]"
            >{{ payment.request_at }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center border-b border-solid border-[#e2e8f0]"
            >{{ payment.payment_at }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center border-b border-solid border-[#e2e8f0]"
            >{{ '完成' }}</span
          >
          <span
            class="justify-content col-span-1 flex h-[60px] items-center border-b border-solid border-[#e2e8f0]"
          >
            <Lucide
              :size="20"
              class="-rotate-90 cursor-pointer"
              icon="CircleEllipsis"
            />
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
