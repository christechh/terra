import { ref } from 'vue'

export default function useCreateSubAccount() {
  const account = ref('')
  const name = ref('')
  const password = ref('')
  const notifyType = ref<number | string>(20)
  const notifyEmail = ref('')
  const notifyPhone = ref('')
  const phoneCode = ref('+886')

  return {
    account,
    name,
    password,
    notifyType,
    notifyEmail,
    notifyPhone,
    phoneCode
  }
}
