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

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    payments: [] as Payment[],
    payment: {} as Payment
  }),
  actions: {
    async fetchAllPayments() {
      this.payments = await this.fetchPaymentsByPage([], 0, 50)
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
        const finalPage = Math.ceil(Number(pagedData.count) / pageSize)
        payments.push(...pagedData.data)
        if (page <= finalPage) {
          return this.fetchPaymentsByPage(payments, page + 1, pageSize)
        }
      }
      return payments
    },
    setPaymentDetail(payment: Payment) {
      this.payment = payment
    }
  }
})
