/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
export interface Users {
  id: number
  first_name: string
  last_name: string
  account: string
  password: string
  email: string
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as Users[]
  }),
  actions: {
    fetchUsers() {
      axios.get('/account/users').then((res) => {
        this.users = res.data.Result
      })
    },
    deleteUser(id: number) {
      axios
        .delete(
          localStorage.getItem('xUserType') === 'admin'
            ? `/admin/user/${id}`
            : `/user/${id}`
        )
        .then(() => {
          this.fetchUsers()
        })
    }
  }
})
