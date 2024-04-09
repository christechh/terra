import { defineStore } from 'pinia'
import axios from '../axios'

export interface Company {
  id: number
  name: string
  taxId: string
  enabledModules: string[]
}

export const useCompanyStore = defineStore('company', {
  state: () => ({
    companies: [] as Company[],
    companyId: 1 as number
  }),
  actions: {
    setCompanyId(value: number) {
      this.companyId = value
    },
    fetchCompanies() {
      axios
        .get('/company', {
          params: {
            page: 0,
            pageSize: 100
          }
        })
        .then((res) => {
          this.companies = res.data.data
          this.companyId = res.data.data[0].id
        })
    },
    deleteCompany(id: number) {
      axios.delete(`/company/${id}`).then(() => {
        this.fetchCompanies()
      })
    }
  }
})
