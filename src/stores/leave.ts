/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'

export interface Leave {
  [key: string]: any
}

export const useLeaveStore = defineStore('leave', {
  state: () => ({
    leave: [] as Leave[]
  }),
  actions: {
    async fetchLeaveList({
      page,
      companyId
    }: {
      page: number
      companyId: string
    }) {
      axios
        .get('/salary/leave', {
          params: {
            page: page,
            companyId: companyId.toString()
          }
        })
        .then((res) => {
          this.leave = res.data.data
        })
    },
    deleteLeave(companyId: string, id: number) {
      axios
        .delete(`salary/leave/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          // todo companyid要帶參數
          this.fetchLeaveList({ companyId: '1', page: 1 })
        })
    }
  }
})
