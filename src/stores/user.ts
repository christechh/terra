import { defineStore } from 'pinia'
import axios from '../axios'
import { useRedirectToStore } from './redirect-to'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: localStorage.getItem('email') || '',
    token: localStorage.getItem('token') || '',
    imkitToken: ''
  }),
  actions: {
    async login(credentials: { account: string; password: string }) {
      const resp = await axios.post('/auth/login', credentials)
      this.email = credentials.account
      this.token = resp.data.data.data.access_token
      localStorage.setItem('token', this.token)
      localStorage.setItem('email', credentials.account)
      useRedirectToStore().redirect({ path: '/dashboard' })
    },
    async loginByPhone(credentials: { phone: string; password: string }) {
      const resp = await axios.post('/auth/phone/login', credentials)
      this.email = ''
      this.token = resp.data.data.data.access_token
      localStorage.setItem('token', this.token)
      localStorage.setItem('email', '')
      useRedirectToStore().redirect({ path: '/dashboard' })
    },
    async fetchSetting() {
      try {
        const {
          data: { data }
        } = await axios.get('/auth/setting')
        this.imkitToken = data.data.chatToken
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
