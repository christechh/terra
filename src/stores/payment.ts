import { defineStore } from 'pinia'
import axios from '../axios'

export enum PaymentStatusText {
  pending = 'pending',
  paid = 'paid',
  refund = 'refund',
  unauthorized = 'unauthorized'
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
  status: PaymentStatus
  request_at: string | Date
  payment_at: string | Date | null
  createdAt: string | Date
  updatedAt: string | Date | null
  payment_user: PaymentUser
  enter_point: EnterPoint
}

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    payments: [] as Payment[]
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
    }
  }
})
