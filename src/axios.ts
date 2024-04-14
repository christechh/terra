import axios from 'axios'
import { useRedirectToStore } from './stores/redirect-to'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authentication = token
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
    console.log(error)
    if (error.config.skipInterceptor) {
      return Promise.reject(error)
    }

    if (error.response.status === 401) {
      useRedirectToStore().redirect({ path: '/login' })
    }
    return Promise.reject(error)
  }
)
export default instance
