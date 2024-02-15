import { RecaptchaVerifier } from 'firebase/auth'
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { addRecaptcha } from '../lib/firebase'
import { useUserStore } from '../stores/user'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const grecaptcha: any
export default function useRegisterByEmail() {
  const { t } = useI18n()
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const acceptedTerms = ref(false)
  const acceptedPrivacy = ref(false)
  const isInputError = ref(false)
  const recaptcha = ref<RecaptchaVerifier>()
  const apiError = ref('')
  const recaptchaWidgetId = ref<number>(-1)
  const recaptchaError = ref(false)
  const loading = ref(false)
  const registerBtnDisabled = computed(
    () =>
      !(
        email.value &&
        password.value &&
        confirmPassword.value &&
        acceptedTerms.value &&
        acceptedPrivacy.value
      )
  )
  onMounted(() => {
    recaptcha.value = addRecaptcha('recaptcha', 'normal')
    recaptcha.value.render().then((widgetId) => {
      recaptchaWidgetId.value = widgetId
    })
  })
  const register = async (
    isPassRule1: boolean,
    isPassRule2: boolean,
    isPassRule3: boolean
  ) => {
    // eslint-disable-next-line no-debugger
    debugger
    apiError.value = ''
    recaptchaError.value = false
    isInputError.value = false
    const recaptchaResponse = checkRecaptcha()
    if (!recaptchaResponse) {
      recaptchaError.value = true
    }
    if (!isPassRule1 || !isPassRule2 || !isPassRule3) {
      isInputError.value = true
      return
    }
    if (password.value !== confirmPassword.value) {
      apiError.value = t('error-message5')
      return
    }
    loading.value = true
    try {
      await useUserStore().registerByEmail({
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
      })
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      apiError.value = (e as any).response.data.message
    } finally {
      loading.value = false
    }
  }

  const checkRecaptcha = () => {
    if (recaptchaWidgetId.value !== -1) {
      return !!grecaptcha.getResponse(recaptchaWidgetId.value)
    }
    return false
  }
  return {
    email,
    password,
    confirmPassword,
    acceptedTerms,
    acceptedPrivacy,
    registerBtnDisabled,
    recaptcha,
    isInputError,
    apiError,
    recaptchaError,
    loading,
    register
  }
}
