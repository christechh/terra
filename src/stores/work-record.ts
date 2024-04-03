/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'

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
      companyId: string
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
    deleteWorkRecord(companyId: string, id: number) {
      axios
        .delete(`salary/work-record/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          // todo companyid要帶參數
          this.fetchWorkRecordList({ companyId: '1', page: 1 })
        })
    }
  }
})