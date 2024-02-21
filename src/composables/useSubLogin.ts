import { AxiosError } from 'axios'
import { ref, watch } from 'vue'
import { useUserStore } from '../stores/user'

export default function useSubLogin() {
  const subAccount = ref('')
  const password = ref('')
  const isLoging = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')
  const doLogin = () => {
    if (!subAccount.value || !password.value) {
      return (isInputError.value = true)
    }
    apiError.value = ''
    isLoging.value = true
    useUserStore()
      .subLogin({
        email: subAccount.value,
        password: password.value
      })
      .catch((e: AxiosError) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        apiError.value = (e.response?.data as any).message
      })
      .finally(() => {
        isLoging.value = false
      })
  }
  watch([subAccount, password], () => {
    apiError.value = ''
    isInputError.value = false
  })
  return {
    subAccount,
    password,
    isLoging,
    isInputError,
    apiError,
    doLogin
  }
}
