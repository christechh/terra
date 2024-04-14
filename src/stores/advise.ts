/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
import useCompany from '../pages/settings/composables/useCompany'
export interface Advise {
  [key: string]: any
}

export const useAdviseStore = defineStore('advise', {
  state: () => ({
    advise: [] as Advise[]
  }),
  actions: {
    async fetchAdviseList({
      page,
      companyId
    }: {
      page: number
      companyId: number
    }) {
      axios
        .get('/admin/ui/advise', {
          params: {
            page: page,
            companyId: companyId.toString()
          }
        })
        .then((res) => {
          this.advise = res.data.Result
        })
    },
    deleteAdvise(companyId: number, id: number) {
      axios
        .delete(`admin/ui/advise/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          const { companyId } = useCompany()
          // todo companyid要帶參數
          this.fetchAdviseList({ companyId: companyId.value ?? 1, page: 1 })
        })
    }
  }
})
