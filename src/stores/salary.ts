/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
import useCompany from '../../src/pages/settings/composables/useCompany'

export interface Salary {
  [key: string]: any
}
export interface SalaryGroup {
  [key: string]: any
}
export interface SalaryExtend {
  [key: string]: any
}
export interface CalculateSalary {
  [key: string]: any
}

export const useSalaryStore = defineStore('salary', {
  state: () => ({
    salaries: [] as Salary[],
    salaryGroups: [] as SalaryGroup[],
    salaryExtends: [] as SalaryExtend[]
  }),
  actions: {
    async fetchSalaries({
      page,
      companyId,
      salaryGroupId
    }: {
      page: number
      companyId: number
      salaryGroupId: any
    }) {
      console.log(page)
      const response = await axios.get('/salary', {
        params: {
          // page,
          // pageSize: 100,
          companyId: companyId.toString(),
          salaryGroupId: salaryGroupId.toString()
        }
      })
      this.salaries = response.data.data
    },
    async fetchSalaryGroups({
      page,
      companyId
    }: {
      page: number
      companyId: number
    }) {
      const response = await axios.get('/admin/ui/ads', {
        params: {
          page,
          pageSize: 100,
          companyId: companyId.toString()
        }
      })
      console.log('fetchSalaryGroups response', response.data.data)
      this.salaryGroups = response.data.Result
    },
    async fetchSalaryExtends({
      page,
      companyId
    }: {
      page: number
      companyId: number
    }) {
      const response = await axios.get('/salary/salary-extend', {
        params: {
          page,
          pageSize: 100,
          companyId: companyId.toString()
        }
      })
      this.salaryExtends = response.data.data
    },
    async fetchCalculateSalaries({
      companyId,
      startDate,
      endDate,
      yearMonth
    }: {
      companyId: number
      startDate: string
      endDate: string
      yearMonth: string
    }) {
      const response = await axios.post('/salary/calculate', {
        companyId: companyId.toString(),
        startDate,
        endDate,
        yearMonth
      })
      return response.data
    },
    deleteSalaryGroup(companyId: number, groupId: number) {
      axios
        .delete(`/admin/ui/ads/${groupId}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          const { companyId } = useCompany()
          // todo companyid要帶參數
          this.fetchSalaryGroups({ companyId: companyId.value ?? 1, page: 1 })
        })
    }
  }
})
