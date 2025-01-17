import { defineStore } from 'pinia'
import axios from '../axios'
import { useRedirectToStore } from './redirect-to'

export const useUserStore = defineStore('user', {
  state: () => ({
    account: localStorage.getItem('account') || '',
    token: localStorage.getItem('token') || '',
    xUserType: localStorage.getItem('xUserType') || '',
    imkitToken: ''
  }),
  actions: {
    async login(credentials: { account: string; password: string }) {
      const resp = await axios.post('/account/login', credentials)
      this.account = credentials.account
      console.log(resp.data)
      this.token = resp.data.Result
      localStorage.setItem('token', this.token)
      localStorage.setItem('account', credentials.account)
      window.location.href = '/dashboard'
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
        } = await axios.get('/meta')
        this.imkitToken = data.data.chatToken
      } catch (error) {
        console.log(error)
      }
    },
    async registerByEmail(credentials: {
      account: string
      password: string
      confirmPassword: string
    }) {
      const res = await axios.post('/auth/register', {
        account: credentials.account,
        guestToken: null,
        name: credentials.account.split('@')[0],
        password: credentials.password,
        password_confirmation: credentials.confirmPassword,
        sendMail: true
      })
      const { access_token } = res.data.Result.data
      localStorage.setItem('token', access_token)
      // localStorage.setItem('refresh_token', refresh_token)
      // localStorage.setItem('token_end_at', token_end_at)
      localStorage.setItem('account', credentials.account)
      this.token = access_token
      this.account = credentials.account
      useRedirectToStore().redirect({ path: '/dashboard' })
    },
    async logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('account')
      useRedirectToStore().redirect({ path: '/login' })
    }
  }
})
