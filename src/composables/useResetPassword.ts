import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '../axios'

export default function useEmailReset() {
  const route = useRoute()
  const router = useRouter()
  const newPassword = ref('')
  const newPasswordAgain = ref('')
  const isReseting = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')

  watch([newPassword, newPasswordAgain], () => {
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
      await axios.put('/auth/resetPassword', {
        new_password: newPassword.value,
        new_password_confirmation: newPasswordAgain.value,
        token: route.query.token
      })
      isInputError.value = false
      apiError.value = ''
      router.push({ name: 'login' })
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      apiError.value = (e as any).response.data.message
    } finally {
      isReseting.value = true
    }
  }

  return {
    newPassword,
    newPasswordAgain,
    isReseting,
    isInputError,
    apiError,
    submit
  }
}
