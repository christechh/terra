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
    salaryExtends: [] as SalaryExtend[],
    calculateSalaries: [] as CalculateSalary[]
  }),
  actions: {
    async fetchSalaries({
      page,
      companyId
    }: {
      page: number
      companyId: number
    }) {
      const response = await axios.get('/salary', {
        params: {
          page,
          pageSize: 100,
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
      const response = await axios.post('/salary/salary-extend', {
        params: {
          companyId: companyId.toString(),
          startDate,
          endDate,
          yearMonth
        }
      })
      this.calculateSalaries = response.data.data
    }
  }
})
