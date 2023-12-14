import { Ref, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from '../../../axios'

export default function useChatSetting(token: Ref<string>) {
  const { t } = useI18n()
  const dateText = ref<string | null>(null)
  const dateTitle = ref<string | null>(null)
  const emailText = ref<string | null>(null)
  const emailTitle = ref<string | null>(null)
  const otherText = ref<string | null>(null)
  const otherTitle = ref<string | null>(null)
  const phoneText = ref<string | null>(null)
  const phoneTitle = ref<string | null>(null)

  const getTypes = () => {
    axios
      .get('customer/type', {
        params: {
          token: token.value
        }
      })
      .then((res) => {
        const { data } = res.data
        dateText.value = data.date_text
        dateTitle.value = data.date_title
        emailText.value = data.email_text
        emailTitle.value = data.email_title
        otherText.value = data.other_text
        otherTitle.value = data.other_title
        phoneText.value = data.phone_text
        phoneTitle.value = data.phone_title
      })
  }

  const types = [
    { text: t('reply-message-type-none'), value: 'none' },
    { text: t('reply-message-type-email'), value: 'email' },
    { text: t('reply-message-type-phone'), value: 'phone' },
    { text: t('reply-message-type-date'), value: 'date' },
    { text: t('reply-message-type-other'), value: 'other' }
  ]

  return {
    types,
    dateText,
    dateTitle,
    emailText,
    emailTitle,
    otherText,
    otherTitle,
    phoneText,
    phoneTitle,
    getTypes
  }
}
