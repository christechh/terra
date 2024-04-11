import axios from 'axios'
import { useWaningModalStore } from './stores/modals/warrningModal'
import { useRedirectToStore } from './stores/redirect-to'
import i18n from './i18n'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

const useBasicTokenRouters = [
  '/auth/login',
  '/auth/phone/login',
  '/auth/verify_phone',
  '/chat/sub/login',
  '/auth/register'
]
instance.interceptors.request.use(
  (config) => {
    if (useBasicTokenRouters.includes(config.url as string)) {
      config.headers.Authorization = import.meta.env.VITE_BASIC_TOKEN_CMS
    } else {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = 'Bearer ' + token
      }
    }
    if (localStorage.getItem('xUserType') && !config.headers['X-User-Type']) {
      config.headers['X-User-Type'] = localStorage.getItem('xUserType')
    }
    config.baseURL = import.meta.env.VITE_API_URL
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.config.skipInterceptor) {
      return Promise.reject(error)
    }

    // 眷屬應急處理
    if (error.response.data.errors[0].message.startsWith('The family.')) {
      useWaningModalStore().showModal({
        text: '眷屬必填資料未填'
      })
    } else if (error.response.status === 403) {
      return
    } else {
      useWaningModalStore().showModal({
        text: i18n.global.t(error.response.data.errors[0].message)
      })
    }

    if (error.response.status === 401) {
      useRedirectToStore().redirect({ path: '/login' })
    }
    return Promise.reject(error)
  }
)
export default instance
