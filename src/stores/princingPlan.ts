import { defineStore } from 'pinia'
import axios from '../axios'

export type PrincingPlan = {
  plan_uid: string
  plan_payment_at: string
  plan_end_at: string
  active_MAU: number | null
  used_MAU: number | null
  sub_accounts_limit: string | null
  coupon_code: string | null
  discount_value: number | null
}

export const usePrincingPlanStore = defineStore('princingPlan', {
  state: () => ({
    princingPlan: {
      plan_uid: 'free',
      plan_payment_at: '',
      plan_end_at: '',
      active_MAU: null,
      used_MAU: null,
      sub_accounts_limit: null,
      coupon_code: null,
      discount_value: null
    } as PrincingPlan
  }),
  actions: {
    async getPrincingPlan() {
      try {
        const response = await axios.get('auth/setting')
        // console.log(response)

        const {
          plan_uid,
          plan_payment_at,
          plan_end_at,
          active_MAU,
          used_MAU,
          sub_accounts_limit,
          coupon_code,
          discount_value
        } = response.data.data.data

        this.princingPlan.plan_uid = plan_uid
        this.princingPlan.plan_payment_at = plan_payment_at
        this.princingPlan.plan_end_at = plan_end_at
        this.princingPlan.active_MAU = active_MAU
        this.princingPlan.sub_accounts_limit = sub_accounts_limit
        this.princingPlan.used_MAU = used_MAU
        this.princingPlan.coupon_code = coupon_code
        this.princingPlan.discount_value = discount_value
        // console.log('princingPlan', this.princingPlan)
      } catch (error) {
        //   console.log('getPrincingPlan fail', error)
      }
    }
  }
})
