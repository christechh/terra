import { defineStore } from 'pinia'
import axios from '../axios'

export enum PaymentMethod {
  unpaid = -1,
  Line,
  Stripe,
  PayPal
}

export enum PaymentStatus {
  pending = 0,
  paid,
  refund,
  unauthorized
}

export type PaymentUser = {
  name: string
  avatar: string
}

export type EnterPoint = {
  name: string
  token: string
}

export type Payment = {
  id: string
  chatUserId: string
  chatRoomId: string
  amount: number
  currency: string
  note: string | null
  method: PaymentMethod
  status: PaymentStatus
  request_at: string
  payment_at: string | null
  createdAt: string
  updatedAt: string | null
  payment_user: PaymentUser
  enterpoint: EnterPoint
}

export type CreateLinePayDTO = {
  line_pay_open: boolean
  line_pay_channel_id: string
  line_pay_channel_secret_key_id: string
}

export type CreateStripeDTO = {
  stripe_open: boolean
  stripe_api_secret: string
  stripe_webhook_secret: string
}

export type CreatePayPalDTO = {
  paypal_open: boolean
  paypal_sandbox_mode: boolean // 正式區傳 false, 測試區傳 true
  paypal_client_id: string
  paypal_secret: string
}

export type UserPaymentSetting = {
  line_pay_open: boolean
  line_pay_channel_id: string | null
  line_pay_channel_secret_key_id: string | null
  stripe_open: boolean
  stripe_api_secret: string | null
  stripe_webhook_secret: string | null
  paypal_open: boolean
  paypal_sandbox_mode: boolean
  paypal_client_id: string | null
  paypal_secret: string | null
} & Record<
  string,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  any
>

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    payments: [] as Payment[],
    setting: {} as UserPaymentSetting
  }),
  actions: {
    async fetchSelfSetting() {
      const response = await axios.get('auth/setting')
      if (response.data.data) {
        this.setting = response.data.data.data
      }
    },
    async fetchAllPayments() {
      this.payments = await this.fetchPaymentsByPage([], 0, 100)
    },
    async fetchPaymentsByPage(
      payments: Payment[],
      page: number,
      pageSize: number
    ): Promise<Payment[]> {
      const response = await axios.get('chat/payment/history', {
        params: {
          page,
          pageSize
        }
      })
      const pagedData = response.data.data as {
        data: Payment[]
        page: number
        count: number
        pageSize: number
      }
      if (typeof pagedData === 'object') {
        const finalPage =
          Math.ceil(Number(pagedData.count) / pageSize) - 1 >= 0
            ? Math.ceil(Number(pagedData.count) / pageSize) - 1
            : 0
        payments.push(...pagedData.data)
        if (page < finalPage) {
          return this.fetchPaymentsByPage(payments, page + 1, pageSize)
        }
      }
      return payments
    },
    async setPaymentByMethod<T>(method: string, dto: T) {
      switch (method) {
        case 'LinePay':
          return this.setLinePay(dto as CreateLinePayDTO)
        case 'Stripe':
          return this.setStripe(dto as CreateStripeDTO)
        case 'PayPal':
          return this.setPayPal(dto as CreatePayPalDTO)
      }
    },
    async setLinePay(dto: CreateLinePayDTO) {
      return axios.put('user/linePay', dto)
    },
    async setStripe(dto: CreateStripeDTO) {
      return axios.put('user/stripe', dto)
    },
    async setPayPal(dto: CreatePayPalDTO) {
      return axios.put('user/paypal', dto)
    }
  }
})
