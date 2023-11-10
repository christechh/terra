import { defineStore } from 'pinia'
import { useRedirectToStore } from './redirect-to'
import axios from '../axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: localStorage.getItem('email') || '',
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    async login(credentials: { account: string; password: string }) {
      try {
        const resp = await axios.post('/auth/login', credentials)
        this.email = credentials.account
        this.token = resp.data.data.data.access_token
        localStorage.setItem('token', this.token)
        localStorage.setItem('email', credentials.account)
        useRedirectToStore().redirect({ path: '/dashboard' })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchSetting() {
      try {
        const {
          data: { data }
        } = await axios.get('/auth/setting')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    async logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      useRedirectToStore().redirect({ path: '/login' })
    }
  }
})
