import axios, { AxiosError } from 'axios'
import { useWaningModalStore } from '../stores/modals/warrningModal'
import { useRedirectToStore } from '../stores/redirect-to'
import { get } from 'lodash'

import { useNotificationsStore } from '../stores/notifications'

export interface Response {
  code: number
  msg: string | null
  data: Record<string, unknown> | null
}

export enum AuthType {
  CMS,
  JWT
}
export class ApiResponse implements Response {
  constructor(
    public code: number,
    public msg: string | null,
    public data: Record<string, unknown> | null
  ) {}
}
const instance = axios.create({
  baseURL: 'https://messenger.stipop.io/v1/' // 特定域名的基本 URL
})
instance.defaults.headers.common['Content-Type'] = 'application/json'

export const postRequest = async (endpoint: string, data: object) => {
  try {
    instance.defaults.headers.common['Content-Type'] = 'application/json'
    if (data instanceof FormData) {
      instance.defaults.headers.common['Content-Type'] = 'multipart/form-data'
    }
    const response = await instance.post(endpoint, data, {
      headers: {
        //'Content-Type': 'application/json',
        Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
      }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    // handleError(axiosError);
    throw axiosError
  }
}
export const patchRequest = async (endpoint: string, data: object) => {
  try {
    instance.defaults.headers.common['Content-Type'] = 'application/json'
    const response = await instance.patch(endpoint, data, {
      headers: {
        //'Content-Type': 'application/json',
        Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
      }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    // handleError(axiosError);
    throw axiosError
  }
}
export const putRequest = async (endpoint: string, data: object) => {
  try {
    instance.defaults.headers.common['Content-Type'] = 'application/json'
    const response = await instance.put(endpoint, data, {
      headers: {
        //'Content-Type': 'application/json',
        Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
      }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    // handleError(axiosError);
    throw axiosError
  }
}

export const getRequest = async (endpoint: string, data: object) => {
  try {
    instance.defaults.headers.common['Content-Type'] = 'application/json'
    const response = await instance.get(endpoint, {
      params: data,
      headers: {
        Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
      }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    // handleError(axiosError);
    throw axiosError
  }
}

export const deleteRequest = async (endpoint: string) => {
  try {
    instance.defaults.headers.common['Content-Type'] = 'application/json'
    const response = await instance.delete(endpoint, {
      headers: {
        //'Content-Type': 'application/json',
        Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
      }
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    // handleError(axiosError);
    throw axiosError
  }
}

export const getBlob = async (endpoint: string, data: object) => {
  try {
    const response = await instance.get(endpoint, {
      params: data,
      headers: {
        Apikey: '604e1ad4d75ae2f9cd29f00d49093378'
      },
      responseType: 'blob'
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    // handleError(axiosError);
    throw axiosError
  }
}

export const handleError = (error: AxiosError) => {
  if (error.response) {
    const status = error.response.status
    if (status === 401) {
      const message = get(error, 'response.data.message', '')
      useNotificationsStore().showSaveError(message)
      return new ApiResponse(401, 'unauthorized error', null)
    } else if (status === 400) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      useWaningModalStore().showModal({ text: error.response.data?.message })
      // return new ApiResponse(404,"404 not found",null)
    } else if (status === 404 || status === 500) {
      useWaningModalStore().showModal({ text: error.message })
      // return new ApiResponse(404,"404 not found",null)
    } else {
      // 使用RedirectTo元件
      useRedirectToStore().redirect({ path: '/login' })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      useWaningModalStore().showModal({ text: error.response.data?.message })
      //return new ApiResponse(400,"error:"+error.message,null)
    }
  } else if (error.request) {
    useWaningModalStore().showModal({ text: error.message })

    //return new ApiResponse(406,"request error:"+error.message,null)
  } else {
    useWaningModalStore().showModal({ text: error.message })
    // return new ApiResponse(407,"generic error:"+error.message,null)
  }
}
