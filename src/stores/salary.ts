/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'

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
      companyId
    }: {
      page: number
      companyId: number
    }) {
      console.log(page)
      const response = await axios.get('/salary', {
        params: {
          // page,
          // pageSize: 100,
          companyId: companyId.toString()
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
      const response = await axios.get('/salary/salary-group', {
        params: {
          page,
          pageSize: 100,
          companyId: companyId.toString()
        }
      })
      console.log('fetchSalaryGroups response', response.data.data)
      this.salaryGroups = response.data.data
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
        .delete(`/salary/salary-group/${groupId}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          // todo companyid要帶參數
          this.fetchSalaryGroups({ companyId: 1, page: 1 })
        })
    }
  }
})
