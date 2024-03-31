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
      companyId: number
    }) {
      console.log(page)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.get('/salary/work-record', {
        params: {
          companyId: companyId.toString()
        }
      })
      this.workRecordList = [
        {
          code: '001',
          name: 'Frank',
          companyId: '3',
          startTime: '2024-03-25 09:00:00',
          endTime: '2024-03-25 18:00:00',
          restHours: 1.5,
          type: 'HOLIDAY',
          description: 'QQQ'
        },
        {
          code: '002',
          name: 'Frank2',
          companyId: '3',
          startTime: '2024-03-25 09:00:00',
          endTime: '2024-03-25 18:00:00',
          restHours: 1.5,
          type: 'HOLIDAY',
          description: 'AA'
        }
      ]
    },
    deleteWorkRecord(companyId: number, id: number) {
      axios
        .delete(`salary/work-record/${id}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          // todo companyid要帶參數
          this.fetchWorkRecordList({ companyId: 1, page: 1 })
        })
    }
  }
})
