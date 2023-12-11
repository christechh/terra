import { computed } from 'vue'
import { usePaymentStore } from '../../../stores/payment'

export default function usePayment() {
  const paymentStore = usePaymentStore()

  const { fetchAllPayments } = paymentStore

  const payments = computed(() => paymentStore.payments)

  fetchAllPayments()

  return {
    payments,
    fetchAllPayments
  }
}
