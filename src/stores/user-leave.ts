/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
import useCompany from '../../src/pages/settings/composables/useCompany'
export interface UserLeave {
  [key: string]: any
}

export const useUserLeaveStore = defineStore('user-leave', {
  state: () => ({
    userLeave: [] as UserLeave[]
  }),
  actions: {
    async fetchUserLeaveList({
      page,
      companyId
    }: {
      page: number
      companyId: number
    }) {
      axios
        .get('/salary/user-leave', {
          params: {
            page: page,
            companyId: companyId.toString()
          }
        })
        .then((res) => {
          this.userLeave = res.data.data
        })
    },
    deleteUserLeave(companyId: number, id: number) {
      axios
        .delete(`salary/user-leave/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          const { companyId } = useCompany()
          // todo companyid要帶參數
          this.fetchUserLeaveList({ companyId: companyId.value ?? 1, page: 1 })
        })
    }
  }
})
