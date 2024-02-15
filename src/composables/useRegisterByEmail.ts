import { ref } from 'vue'

export default function useRegisterByEmail() {
  const email = ref('')
  const password = ref('')
  const isInputError = ref(false)
  const apiError = ref('')
  const register = () => {}
  return {
    email,
    password,
    isInputError,
    apiError,
    register
  }
}
