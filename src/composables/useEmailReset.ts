import { AxiosError } from 'axios'
import { ref } from 'vue'
import axios from '../axios'

export default function useEmailReset() {
  const email = ref('')
  const isReseting = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')
  const sendRestEmail = () => {
    if (!email.value) {
      isInputError.value = true
      return
    }
    isInputError.value = false
    apiError.value = ''
    isReseting.value = true
    return axios
      .put('/auth/forgetPassword', {
        email: email.value
      })
      .then(() => {
        isReseting.value = false
        isInputError.value = false
      })
      .catch((error: AxiosError) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        apiError.value = (error.response?.data as any).message
      })
      .finally(() => {
        isReseting.value = false
      })
  }

  return {
    email,
    isReseting,
    isInputError,
    apiError,
    sendRestEmail
  }
}
