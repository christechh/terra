import { defineStore } from 'pinia'
import { postRequest, AuthType, handleError } from '../api/api'
import { AxiosError } from 'axios'
import { useRedirectToStore } from './redirect-to'

export interface User {
  account: string | null
  token: string
}

export const useUserStore = defineStore('user', {
  state: (): User => ({
    account: localStorage.getItem('admin_account') || '',
    token: localStorage.getItem('admin_token') || ''
  }),
  getters: {
    getToken(state) {
      return state.token
    },

    getAccount(state) {
      return state.account
    }
  },
  actions: {
    async login(credentials: { account: string; password: string }) {
      try {
        const response = await postRequest(
          '/auth/login',
          credentials,
          AuthType.CMS
        )

        const { user, token } = response.data

        this.account = credentials.account
        this.token = token
        localStorage.setItem('admin_token', token)
        localStorage.setItem('admin_account', credentials.account)
        useRedirectToStore().redirect({ path: '/' })
      } catch (error) {
        const axiosError = error as AxiosError
        // console.log("error : ",error)
        handleError(axiosError)
      }
    },
    async logout() {
      localStorage.removeItem('admin_token')
      localStorage.removeItem('admin_account')
      useRedirectToStore().redirect({ path: '/login' })
    }
  }
})
