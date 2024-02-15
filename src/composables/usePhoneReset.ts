import { ConfirmationResult, RecaptchaVerifier } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { addRecaptcha, sendSMS } from '../lib/firebase'

export default function usePhoneReset() {
  const phone = ref('')
  const phoneCode = ref('+886')
  const validCode = ref('')
  const isReseting = ref(false)
  const isInputError = ref(false)
  const apiError = ref('')
  const showModal = ref(false)
  const recaptcha = ref<RecaptchaVerifier>()
  const confirnatiomationResult = ref<ConfirmationResult>()

  onMounted(() => {
    recaptcha.value = addRecaptcha('recaptcha')
  })
  const sendPhoeCode = async () => {
    if (!phone.value) {
      isInputError.value = true
      return
    }
    isInputError.value = false
    apiError.value = ''
    isReseting.value = true
    try {
      confirnatiomationResult.value = await sendSMS(
        `${phoneCode.value}${phone.value}`,
        recaptcha.value as RecaptchaVerifier
      )
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      apiError.value = (e as any).message
    } finally {
      isReseting.value = false
      isInputError.value = false
    }
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
