/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
import useCompany from '../pages/settings/composables/useCompany'

export interface Member {
  [key: string]: any
}

export const useMemberStore = defineStore('member', {
  state: () => ({
    member: [] as Member[]
  }),
  actions: {
    async fetchMember({
      page,
      companyId
    }: {
      page: number
      companyId: number
    }) {
      console.log(page)
      const response = await axios.get('/members', {
        params: {
          // page,
          // pageSize: 100,
          companyId: companyId.toString()
        }
      })
      this.member = response.data.Result
    },
    deleteMemberGroup(companyId: number, groupId: number) {
      axios
        .delete(`/member/member-group/${groupId}`, {
          params: {
            companyId
          }
        })
        .then(() => {
          const { companyId } = useCompany()
          // todo companyid要帶參數
          this.fetchMember({ companyId: companyId.value ?? 1, page: 1 })
        })
    }
  }
})
