import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from '../../../axios'
import { useLinkPage } from '../../useLinkPage'

export default function usePinBoard() {
  const { token } = useLinkPage()
  const showPinBoard = ref(false)
  const welecomeMessage = ref('')
  const btnText = ref('')
  const nicknamePlaceholder = ref('')
  const theme = ref('')
  const isNicknameRequired = ref(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logo = ref<any[] | null>(null)
  const isColorExpand = ref(false)
  const localBGImgs = ref([])
  const removePowerBy = ref(false)
  const { locale } = useI18n()
  const colors = ['#02b13f', '#007ABF', '#FFA01A', '#FF85B0', '#E0EB76']
  const nicknameFormat = ref('')
  const welcomeBGType = ref('image')

  const getPinboardSetting = () => {
    axios.get(`/chat/enterpoints/config/${token.value}`).then((res) => {
      const langCode = locale.value.split('-')[0]
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const lang = langCode === 'zh' ? 'cn' : langCode
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = res.data.data.data
      welecomeMessage.value = data.welcome
      btnText.value = data.start_btn_text
      nicknamePlaceholder.value = data.nickname_input_placeholder
      theme.value = data.start_btn_color
      isNicknameRequired.value = data.nickname_required
      welcomeBGType.value = data.welcome_bg_type
      removePowerBy.value = data.remove_pinboard_footer
    })
  }

  getPinboardSetting()

  return {
    showPinBoard,
    welecomeMessage,
    btnText,
    nicknamePlaceholder,
    isNicknameRequired,
    logo,
    isColorExpand,
    localBGImgs,
    removePowerBy,
    colors,
    theme,
    nicknameFormat,
    welcomeBGType
  }
}
