import axios from '../axios'

const localStorageVersion = 'v1.0.2'
const keyVersion: { [key: string]: string } = {
  'admin:IMKit-token:all': 'v1.0.3'
}
const basicToken = import.meta.env.VITE_API_BASIC_TOKEN
const baseURL = import.meta.env.VITE_API_URL

// 管理員、分析人員、編輯人員、客服人員
export enum SubAccountRole {
  ADMIN = 'admin',
  ANALYST = 'analyst',
  EDITOR = 'editor',
  CUSTOMER_SERVICE = 'cs'
}

export const getLocalStorage = (key: string): string | null => {
  try {
    const localStorageObj = window.localStorage
    const prefix = keyVersion[key] || localStorageVersion
    return localStorageObj.getItem(prefix + ':' + key)
  } catch (error) {
    return null
  }
}

export const setLocalStorage = (
  key: string,
  value: string,
  useVersion: boolean = true
): void => {
  try {
    const localStorageObj = window.localStorage
    if (!useVersion) return localStorageObj.setItem(key, value)
    const prefix = keyVersion[key] || localStorageVersion
    return localStorageObj.setItem(prefix + ':' + key, value)
  } catch (error) {
    return
  }
}

export const getLoginAccessToken = async (
  isGuest: boolean = false,
  returnPage: boolean = true,
  redirect: string = '/login'
): Promise<string | null> => {
  const accessToken = getLocalStorage('access_token')
  const rawEndAt = getLocalStorage('token_end_at')
  let accessTokenEndAt = rawEndAt == null ? null : parseInt(rawEndAt)
  if (isGuest) return accessToken

  if (!accessToken) {
    if (returnPage) setLocalStorage('returnPage', window.location.href)
    window.location.href = redirect
    return null
  }

  if (!accessTokenEndAt) return accessToken
  if (new Date().valueOf() <= accessTokenEndAt) return accessToken

  // refresh token process
  try {
    const res = await axios.post(
      `${baseURL}/api/en/auth/refreshToken`,
      JSON.stringify({
        refresh_token: getLocalStorage('refresh_token')
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${basicToken}`
        }
      }
    )

    // if (res.errorCode === 404) {
    //   window.location.href = '/404'
    // } else if (res.errorCode === 500) {
    //   window.location.href = '/500'
    // }

    setLocalStorage('access_token', res.data.Result.access_token)
    setLocalStorage('refresh_token', res.data.Result.refresh_token)
    setLocalStorage('token_end_at', res.data.Result.end_at)
    accessTokenEndAt = res.data.Result.end_at
  } catch (error) {
    console.log('refresh error : \n', error)
  }

  return accessToken
}
