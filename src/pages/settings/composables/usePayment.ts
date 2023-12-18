import { computed } from 'vue'
import {
  PaymentMethod,
  PaymentStatus,
  usePaymentStore
} from '../../../stores/payment'

export default function usePayment() {
  const paymentStore = usePaymentStore()

  const { fetchAllPayments, setPaymentByMethod, fetchSelfSetting } =
    paymentStore

  const payments = computed(() => paymentStore.payments)
  const setting = computed(() => paymentStore.setting)

  fetchAllPayments()
  fetchSelfSetting()

  return {
    payments,
    setting,
    setPaymentByMethod,
    fetchAllPayments,
    fetchSelfSetting,
    getPaymentStatus: (status: PaymentStatus) => {
      switch (status) {
        case PaymentStatus.pending:
          return 'payment-flow-unpaid'
        case PaymentStatus.paid:
          return 'payment-flow-paid'
        case PaymentStatus.refund:
          return 'payment-flow-refund'
        case PaymentStatus.unauthorized:
          return 'payment-flow-authorization-error'
        default:
          return
      }
    },
    getPaymentMethod: (method: PaymentMethod) => {
      switch (method) {
        case PaymentMethod.Line:
          return 'Line'
        case PaymentMethod.PayPal:
          return 'PayPal'
        case PaymentMethod.Stripe:
          return 'Stripe'
        default:
          return
      }
    }
  }
}
