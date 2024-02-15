import { AxiosError } from 'axios'
import { ref } from 'vue'
import axios from '../axios'

export default function useEmailReset() {
  const email = ref('')
  const password = ref('')
  const isReseting = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')
  const doReset = () => {
    if (!email.value || !password.value) {
      return (isInputError.value = true)
    }
    apiError.value = ''
    isReseting.value = true
    axios
      .post('', {
        email: email.value,
        password: password.value
      })
      .catch((e: AxiosError) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        apiError.value = (e.response?.data as any).message
      })
      .finally(() => {
        isReseting.value = false
      })
  }
  return {
    email,
    password,
    isReseting,
    isInputError,
    apiError,
    doReset
  }
}
