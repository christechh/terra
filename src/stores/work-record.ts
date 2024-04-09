/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
import useCompany from '../../src/pages/settings/composables/useCompany'

export interface WorkRecord {
  [key: string]: any
}

export const useWorkRecordStore = defineStore('work-record', {
  state: () => ({
    workRecordList: [] as WorkRecord[]
  }),
  actions: {
    async fetchWorkRecordList({
      page,
      companyId
    }: {
      page: number
      companyId: number
    }) {
      axios
        .get('/salary/work-record', {
          params: {
            page: page,
            companyId: companyId.toString()
          }
        })
        .then((res) => {
          this.workRecordList = res.data.data
        })
    },
    deleteWorkRecord(companyId: number, id: number) {
      axios
        .delete(`salary/work-record/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          const { companyId } = useCompany()
          // todo companyid要帶參數
          this.fetchWorkRecordList({ companyId: companyId.value, page: 1 })
        })
    }
  }
})
