/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'

export interface SalaryExtend {
  [key: string]: any
}

export const useSalaryExtendStore = defineStore('salary-extend', {
  state: () => ({
    salaryExtend: [] as SalaryExtend[]
  }),
  actions: {
    async fetchSalaryExtendList({
      page,
      companyId
    }: {
      page: number
      companyId: string
    }) {
      axios
        .get('/salary/salary-extend', {
          params: {
            page: page,
            companyId: companyId.toString()
          }
        })
        .then((res) => {
          this.salaryExtend = res.data.data
        })
    },
    deleteSalaryExtend(companyId: string, id: number) {
      axios
        .delete(`salary/salary-extend/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          // todo companyid要帶參數
          this.fetchSalaryExtendList({ companyId: '1', page: 1 })
        })
    }
  }
})