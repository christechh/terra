/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
import useCompany from '../../src/pages/settings/composables/useCompany'
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
      companyId: number
    }) {
      axios
        .get('/admin/ui/term', {
          params: {
            page: page,
            companyId: companyId.toString()
          }
        })
        .then((res) => {
          this.leave = res.data.Result
        })
    },
    deleteLeave(companyId: number, id: number) {
      axios
        .delete(`admin/ui/term/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          const { companyId } = useCompany()
          // todo companyid要帶參數
          this.fetchLeaveList({ companyId: companyId.value || 1, page: 1 })
        })
    }
  }
})
