import { defineStore } from 'pinia'
import axios from '../axios'
import { useRedirectToStore } from './redirect-to'

export const useUserStore = defineStore('user', {
  state: () => ({
    account: localStorage.getItem('account') || '',
    token: localStorage.getItem('token') || '',
    imkitToken: ''
  }),
  actions: {
    async login(credentials: { account: string; password: string }) {
      const resp = await axios.post('/auth/login', credentials)
      this.account = credentials.account
      this.token = resp.data.data.data.access_token
      localStorage.setItem('token', this.token)
      localStorage.setItem('account', credentials.account)
      useRedirectToStore().redirect({ path: '/dashboard' })
    },
    async loginByPhone(credentials: { phone: string; password: string }) {
      const resp = await axios.post('/auth/phone/login', credentials)
      this.account = credentials.phone
      this.token = resp.data.data.data.access_token
      localStorage.setItem('token', this.token)
      localStorage.setItem('account', '')
      useRedirectToStore().redirect({ path: '/dashboard' })
    },
    async subLogin(credentials: { account: string; password: string }) {
      const resp = await axios.post('/chat/sub/login', credentials)
      this.account = credentials.account
      this.token = resp.data.data.data.access_token
      localStorage.setItem('token', this.token)
      localStorage.setItem('account', '')
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
