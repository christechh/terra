import axios from 'axios'
import i18n from './i18n'
import { useWaningModalStore } from './stores/modals/warrningModal'
import { useRedirectToStore } from './stores/redirect-to'
const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})
instance.interceptors.request.use(
  (config) => {
    if (config.url === '/auth/login') {
      config.headers.Authorization = import.meta.env.VITE_BASIC_TOKEN_CMS
    } else {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = 'Bearer ' + token
      }
    }
    config.baseURL =
      import.meta.env.VITE_API_URL + i18n.global.locale.value.toLowerCase()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 403) {
      useRedirectToStore().redirect({ path: '/login' })
    } else if (error.config.url === '/dashboard/enterpoint') {
      return Promise.reject(error)
    } else {
      useWaningModalStore().showModal({ text: error.message })
    }
    return Promise.reject(error)
  }
)
export default instance
