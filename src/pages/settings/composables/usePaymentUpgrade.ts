import { reactive, ref } from 'vue'
type PaymentInfo = {
  uid: string
  phone: string
  name: string
  prime: string
  email: string
  invoice_title: string
  invoice_address: string
  uniform_invoice_numbers: string
  additional_rule: []
  ip: string
  user_agent: string
  payment_type: number
  invoice_type: number
  coupon_code: string
}
type CardInfo = {
  number: string | number
  ccv: string | number
  expiry: string | number
}
export default function usePaymentUpgrade() {
  const phoneCode = ref('')
  const paymentInfo = reactive<PaymentInfo>({
    uid: '',
    phone: '',
    name: '',
    prime: '',
    email: '',
    invoice_title: '',
    invoice_address: '',
    uniform_invoice_numbers: '',
    additional_rule: [],
    ip: '',
    user_agent: '',
    payment_type: 1, // 1:信用卡 0:line pay
    invoice_type: 0, // 0:二聯 1:三聯
    coupon_code: ''
  })
  const cardInfo = reactive<CardInfo>({
    number: 1,
    ccv: 1,
    expiry: 1
  })
  return { phoneCode, paymentInfo, cardInfo }
}
