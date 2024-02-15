import {
  ConfirmationResult,
  RecaptchaVerifier,
  getAuth,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../axios'
import { addRecaptcha, sendSMS } from '../lib/firebase'

export default function usePhoneReset() {
  const router = useRouter()
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
    recaptcha.value = addRecaptcha('send-sms-btn')
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user && getAuth()) {
        signOut(getAuth())
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        verifyPhone((user as any).accessToken)
      } else {
        // No user is signed in.
      }
    })
    return () => {
      unsubscribe()
    }
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
      return true
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      apiError.value = (e as any).message
    } finally {
      isReseting.value = false
      isInputError.value = false
    }
  }

  const verifyPhone = (token: string) => {
    axios.post('/auth/verify_phone', { token }).then((res) => {
      localStorage.setItem('token', res.data.data.data.access_token)
      router.push({ name: 'setpassword_after_phone' })
    })
  }

  const checkCode = () => {
    confirnatiomationResult.value?.confirm(validCode.value).then(() => {})
  }

  return {
    phone,
    isReseting,
    isInputError,
    apiError,
    showModal,
    phoneCode,
    validCode,
    recaptcha,
    sendPhoeCode,
    checkCode
  }
}
