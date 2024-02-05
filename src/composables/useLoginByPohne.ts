import { AxiosError } from 'axios'
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

export default function useLoginByPhone() {
  const phone = ref('')
  const password = ref('')
  const phoneCode = ref('+886')
  const isLoging = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')
  const doLogin = () => {
    if (!phone.value || !password.value) {
      return (isInputError.value = true)
    }
    apiError.value = ''
    isLoging.value = true
    useUserStore()
      .loginByPhone({
        phone: `${phoneCode.value}${phone.value}`,
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
  return {
    phone,
    password,
    phoneCode,
    isLoging,
    isInputError,
    apiError,
    doLogin
  }
}
