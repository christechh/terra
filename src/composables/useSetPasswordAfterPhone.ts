import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../axios'

export default function useEmailReset() {
  const router = useRouter()
  const name = ref('')
  const newPassword = ref('')
  const newPasswordAgain = ref('')
  const isReseting = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')

  watch([newPassword, newPasswordAgain, name], () => {
    isInputError.value = false
  })
  const submit = async (
    isPassRule1: boolean,
    isPassRule2: boolean,
    isPassRule3: boolean
  ) => {
    if (!newPassword.value || !newPasswordAgain.value) {
      isInputError.value = true
      return
    }
    if (!isPassRule1 || !isPassRule2 || !isPassRule3) {
      isInputError.value = true
      return
    }
    if (newPassword.value !== newPasswordAgain.value) {
      isInputError.value = true
      return
    }
    try {
      await axios.put('/user/setPassword', {
        name: name.value,
        new_password: newPassword.value,
        new_password_confirmation: newPasswordAgain.value
      })
      isInputError.value = false
      apiError.value = ''
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      apiError.value = (e as any).response.data.message
    } finally {
      isReseting.value = true
    }
  }

  return {
    name,
    newPassword,
    newPasswordAgain,
    isReseting,
    isInputError,
    apiError,
    submit
  }
}
