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
    companies: [] as Company[]
  }),
  actions: {
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
        })
    },
    deleteCompany(id: number) {
      axios.delete(`/company/${id}`).then(() => {
        this.fetchCompanies()
      })
    }
  }
})
