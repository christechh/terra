<script setup lang="ts">
import { onMounted, watch } from 'vue'
// import noSubAccount from '../../assets/images/no-subAccount.png'
import Button from '../../base-components/Button'
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
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('sub-account-list') }}</b>
        <div style="color: #728195">{{ $t('sub-account-desc') }}</div>
      </div>
      <Button
        variant="primary"
        class="h-10 whitespace-nowrap"
        @click="() => creatOredit()"
        ><Lucide icon="Plus" />{{ $t('sub-account-add-btn-text') }}</Button
      >
    </div>

    <div class="mt-1 rounded-b-xl bg-white p-4 dark:bg-darkmode-600">
      <div class="grid grid-cols-12 text-center">
        <b
          class="flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
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
          class="flex h-[60px] items-center border-b-2 border-solid border-[#e2e8f0]"
          >{{ $t('payment-table-action') }}</b
        >
        <template v-for="(payment, key) in payments" :key="payment.id">
          <span
            class="flex h-[60px] items-center"
            :class="
              key === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ payment.payment_user.avatar || '' }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center"
            :class="
              key === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ payment.chatRoomId }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center"
            :class="
              key === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ payment.payment_user.name }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center"
            :class="
              key === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ payment.request_at }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center"
            :class="
              key === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ payment.payment_at }}</span
          >
          <span
            class="col-span-2 flex h-[60px] items-center"
            :class="
              key === payments.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
            >{{ '完成' }}</span
          >
          <!-- <div
            class="flex items-center justify-center"
            :class="
              key === accounts.length - 1
                ? ''
                : 'border-b border-solid border-[#e2e8f0]'
            "
          >
            <Lucide
              :size="20"
              class="cursor-pointer"
              icon="Pencil"
              @click="creatOredit(key)"
            />
            <Lucide
              :size="20"
              class="ml-4 cursor-pointer"
              icon="Trash2"
              @click="confirmDeleteSubAccount(account.id)"
            />
          </div> -->
        </template>
      </div>
    </div>
  </div>
</template>
