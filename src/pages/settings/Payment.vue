<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Lucide from '../../base-components/Lucide'
import usePayment from './composables/usePayment'
import { convertYmdHis } from '../../lib/timeLib'
import SidebarModal from '../../components/Modals/SidebarModal'
import { Payment } from '../../stores/payment'
import EmptyList from '../../components/EmptyList'

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

onMounted(() => {
  fetchAllPayments()
})
</script>

<template>
  <SidebarModal ref="childComponentRef" :detail="detail" />
  <div class="">
    <div class="mt-5 grid grid-cols-12 gap-5">
      <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4">
        <a
          class="item-pay menu relative mt-5 flex flex-col items-center rounded-xl border-0 bg-white p-8 pl-10"
          href="/dashboard/settings/settings_payment_flow_paypal"
        >
          <div>
            <img src="@/assets/images/svg/pay_logo/logo_paypal.svg" />
          </div>
          <div class="mt-5">
            <div class="text-pay-16 flex">
              {{ $t('payment-flow-go-to-settings') }}
              <Lucide icon="ChevronRight" class="mt-0.5 h-4 w-4" />
            </div>
          </div>
        </a>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4">
        <a
          class="item-pay menu relative mt-5 flex flex-col items-center rounded-xl border-0 bg-white p-8 pl-10"
          href="/dashboard/settings/settings_payment_flow_stripe"
        >
          <div>
            <img src="@/assets/images/svg/pay_logo/logo_stripe.svg" />
          </div>
          <div class="mt-5">
            <div class="text-pay-16 flex">
              {{ $t('payment-flow-go-to-settings') }}
              <Lucide icon="ChevronRight" class="mt-0.5 h-4 w-4" />
            </div>
          </div>
        </a>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4">
        <a
          class="item-pay menu relative mt-5 flex flex-col items-center rounded-xl border-0 bg-white p-8 pl-10"
          href="/dashboard/settings/settings_payment_flow_line_pay"
        >
          <div class="mr-3">
            <img src="@/assets/images/svg/pay_logo/logo_linepay.svg" />
          </div>
          <div class="mt-5">
            <div class="text-pay-16 flex">
              {{ $t('payment-flow-go-to-settings') }}
              <Lucide icon="ChevronRight" class="mt-0.5 h-4 w-4" />
            </div>
          </div>
        </a>
      </div>
    </div>

    <div
      class="mt-4 flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('payment-flow-history-record') }}</b>
      </div>
    </div>
    <div class="mt-1 rounded-b-xl bg-white p-4 dark:bg-darkmode-600">
      <EmptyList
        :show="payments.length === 0"
        :content="$t('payment-flow-history-empty')"
      />
      <div v-if="payments.length > 0" class="grid grid-cols-12 text-center">
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
        <template v-for="(payment, index) in payments" :key="payment.id">
          <span
            class="col-span-1 flex h-[60px] items-center justify-center p-2"
            :class="
              index === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
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
            class="col-span-2 flex h-[60px] items-center justify-center overflow-hidden text-ellipsis p-2"
            :class="
              index === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ payment.enterpoint.name }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center justify-center overflow-hidden text-ellipsis p-2"
            :class="
              index === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ payment.payment_user.name }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center justify-center p-2"
            :class="
              index === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ convertYmdHis(payment.request_at) }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center justify-center p-2"
            :class="
              index === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ convertYmdHis(payment.payment_at) }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center justify-center p-2"
            :class="
              index === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ $t(`${getPaymentStatus(payment.status)}`) }}</span
          >
          <span
            class="justify-content col-span-1 flex h-[60px] items-center"
            :class="
              index === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
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
