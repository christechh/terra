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
    companyId: null as number | null
  }),
  actions: {
    setCompanyId(value: number) {
      this.companyId = value
      localStorage.setItem('currentCompanyId', this.companyId?.toString())
    },
    fetchCompanies() {
      axios.get('/account').then((res) => {
        this.companies = res.data.data
        if (!localStorage.getItem('currentCompanyId')) {
          this.companyId = res.data.data[0].id
          localStorage.setItem(
            'currentCompanyId',
            (this.companyId ?? 1).toString()
          )
        } else {
          this.companyId = Number(localStorage.getItem('currentCompanyId'))
        }
      })
    },
    deleteCompany(id: number) {
      axios.delete(`/company/${id}`).then(() => {
        this.fetchCompanies()
      })
    }
  }
})
