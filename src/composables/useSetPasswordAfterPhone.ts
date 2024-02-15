import { computed, ref, watch } from 'vue'
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
  const submit = async () => {
    if (!newPassword.value || !newPasswordAgain.value) {
      isInputError.value = true
      return
    }
    if (!isPassRule1.value || !isPassRule2.value || !isPassRule3.value) {
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

  const isPassRule1 = computed(() => {
    const regex = /.{8,}/
    return regex.test(newPassword.value)
  })

  const isPassRule2 = computed(() => {
    const regex = /[A-Z]/
    return regex.test(newPassword.value)
  })

  const isPassRule3 = computed(() => {
    const regex = /\d/
    return regex.test(newPassword.value)
  })

  return {
    name,
    newPassword,
    newPasswordAgain,
    isReseting,
    isInputError,
    apiError,
    isPassRule1,
    isPassRule2,
    isPassRule3,
    submit
  }
}
