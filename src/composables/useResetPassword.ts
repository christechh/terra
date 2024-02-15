import { computed, ref, watch } from 'vue'

export default function useEmailReset() {
  const newPassword = ref('')
  const newPasswordAgain = ref('')
  const isReseting = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')

  watch([newPassword, newPasswordAgain], () => {
    isInputError.value = false
  })
  const submit = () => {
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
    isInputError.value = false
    apiError.value = ''
    isReseting.value = true
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
