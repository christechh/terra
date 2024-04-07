/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'

export interface Users {
  id: number
  name: string
  taxId: string
  enabledModules: string[]
  email: string
  onboardDate: string
  resignationDate: string
  workStatus: number
  salaryType: number
  updatedAt: string
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as Users[]
  }),
  actions: {
    fetchUsers() {
      axios
        .get('/admin/user', {
          params: {
            page: 0,
            pageSize: 100
          }
        })
        .then((res) => {
          this.users = res.data.data
        })
    },
    deleteUser(id: number) {
      axios.delete(`/admin/user/${id}`).then(() => {
        this.fetchUsers()
      })
    }
  }
})
