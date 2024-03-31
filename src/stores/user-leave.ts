/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'

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
      companyId: string
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
    deleteUserLeave(companyId: string, id: number) {
      axios
        .delete(`salary/user-leave/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          // todo companyid要帶參數
          this.fetchUserLeaveList({ companyId: '1', page: 1 })
        })
    }
  }
})
