import { defineStore } from 'pinia'
import axios from '../axios'
import { useRedirectToStore } from './redirect-to'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: localStorage.getItem('email') || '',
    token: localStorage.getItem('token') || '',
    xUserType: localStorage.getItem('xUserType') || '',
    imkitToken: ''
  }),
  actions: {
    async login(
      credentials: {
        email: string
        password: string
      },
      isAdmin: boolean
    ) {
      const resp = await axios.post(
        isAdmin ? '/admin/login' : '/user/login',
        credentials
      )
      this.email = credentials.email
      this.token = resp.data.data.accessToken
      this.xUserType = resp.data.data.xUserType
      localStorage.setItem('token', this.token)
      localStorage.setItem('email', credentials.email)
      localStorage.setItem('xUserType', resp.data.data.xUserType)
      useRedirectToStore().redirect({ path: '/dashboard' })
    },
    async loginByPhone(credentials: { phone: string; password: string }) {
      const resp = await axios.post('/auth/phone/login', credentials)
      this.email = credentials.phone
      this.token = resp.data.data.data.access_token
      localStorage.setItem('token', this.token)
      localStorage.setItem('email', '')
      useRedirectToStore().redirect({ path: '/dashboard' })
    },
    async subLogin(credentials: { email: string; password: string }) {
      const resp = await axios.post('/chat/sub/login', credentials)
      this.email = credentials.email
      this.token = resp.data.data.data.access_token
      localStorage.setItem('token', this.token)
      localStorage.setItem('email', '')
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
      email: string
      password: string
      confirmPassword: string
    }) {
      const res = await axios.post('/auth/register', {
        email: credentials.email,
        guestToken: null,
        name: credentials.email.split('@')[0],
        password: credentials.password,
        password_confirmation: credentials.confirmPassword,
        sendMail: true
      })
      const { access_token } = res.data.data.data
      localStorage.setItem('token', access_token)
      // localStorage.setItem('refresh_token', refresh_token)
      // localStorage.setItem('token_end_at', token_end_at)
      localStorage.setItem('email', credentials.email)
      this.token = access_token
      this.email = credentials.email
      useRedirectToStore().redirect({ path: '/dashboard' })
    },
    async logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      useRedirectToStore().redirect({ path: '/login' })
    }
  }
})
