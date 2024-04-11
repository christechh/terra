/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import axios from '../axios'
import useCompany from '../../src/pages/settings/composables/useCompany'
export interface Users {
  id: number
  employeeId: string
  name: string
  taxId: string
  enabledModules: string[]
  email: string
  password: string
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
    fetchUsers({ page, companyId }: { page: number; companyId: number }) {
      axios
        .get(
          localStorage.getItem('xUserType') === 'admin'
            ? '/admin/user'
            : '/user',
          {
            params: {
              page: page,
              companyId: companyId.toString()
            }
          }
        )
        .then((res) => {
          this.users = res.data.data
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
          const { companyId } = useCompany()
          this.fetchUsers({ companyId: companyId.value ?? 1, page: 1 })
        })
    }
  }
})
