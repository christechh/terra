import { defineStore } from 'pinia'
import axios from '../axios'

export interface SubAccount {
  id: number
  name: string
  account: string
  notifyOpen: boolean
  notifyType: number
  notifyEmail: string
  notifyPhone: string
}

export const useSubAccountStore = defineStore('subAccount', {
  state: () => ({
    accounts: [] as SubAccount[]
  }),
  actions: {
    fetchSubAccounts() {
      axios
        .get('user/subAccount', {
          params: {
            page: 0,
            pageSize: 100
          }
        })
        .then((res) => {
          this.accounts = res.data.data.data
        })
    },
    deleteSubAccount(id: number) {
      axios.delete(`user/subAccount/${id}`).then(() => {
        this.fetchSubAccounts()
      })
    }
  }
})
