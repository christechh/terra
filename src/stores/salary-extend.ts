/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
import useCompany from '../../src/pages/settings/composables/useCompany'

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
      companyId: number
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
    deleteSalaryExtend(companyId: number, id: number) {
      axios
        .delete(`salary/salary-extend/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          const { companyId } = useCompany()
          // todo companyid要帶參數
          this.fetchSalaryExtendList({
            companyId: companyId.value ?? 1,
            page: 1
          })
        })
    }
  }
})
