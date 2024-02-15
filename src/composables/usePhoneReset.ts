import { AxiosError } from 'axios'
import { ref } from 'vue'
import axios from '../axios'

export default function usePhoneReset() {
  const phone = ref('')
  const phoneCode = ref('+886')
  const validCode = ref('')
  const isReseting = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')
  const showModal = ref(false)
  const sendPhoeCode = () => {
    if (!phone.value) {
      isInputError.value = true
      return
    }
    isInputError.value = false
    apiError.value = ''
    isReseting.value = true
    return axios
      .put('', {})
      .then(() => {
        isReseting.value = false
        isInputError.value = false
        showModal.value = true
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
    phone,
    isReseting,
    isInputError,
    apiError,
    showModal,
    phoneCode,
    validCode,
    sendPhoeCode
  }
}
