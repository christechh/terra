import axios from 'axios'
import { useWaningModalStore } from './stores/modals/warrningModal'
import { useRedirectToStore } from './stores/redirect-to'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-User-Type': 'admin'
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

    useWaningModalStore().showModal({
      text: error.response.data.errors[0].message
    })

    if (error.response.status === 401) {
      useRedirectToStore().redirect({ path: '/login' })
    }
    return Promise.reject(error)
  }
)
export default instance
