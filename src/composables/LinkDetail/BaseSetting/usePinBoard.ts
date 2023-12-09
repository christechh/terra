import { ref } from 'vue'
import logoImg from '../../../assets/images/logo_dark_v6.png'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
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
  const localBGImgs = ref<{ data: string }[]>([])
  const removePowerBy = ref(false)
  const colors = [
    '#02b13f',
    '#007abf',
    '#ffa01a',
    '#ff85B0',
    '#cf93e6',
    '#e0eb76'
  ]
  const nicknameFormat = ref('')
  const welcomeBGType = ref('image')
  const currentTab = ref(0)
  const hrText = ref('')
  const floatButtonColor = ref('')
  const welcomeBG = ref('')
  const additionBtnColor = ref('')
  const bgList = [
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/1f77b4ff50d6279648b27a42ed999826.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/dae136ba5563fa48cd4472c9867167e4.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/0b0a4793be55b1ca27e265e132e65773.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/ad545b6fc6f11bb451d944d5a8a02957.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/355bc6cb11e8ccb6904c88f00cdf8959.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/d30cb76255415d8e13f8563c05851354.png'
  ]
  let id = ''
  let name = ''

  const getPinboardSetting = () => {
    axios.get(`/chat/enterpoints/config/${token.value}`).then((res) => {
      const data = res.data.data.data
      showPinBoard.value = data.show_landing
      welecomeMessage.value = data.welcome
      btnText.value = data.start_btn_text
      nicknamePlaceholder.value = data.nickname_input_placeholder
      theme.value = data.start_btn_color
      isNicknameRequired.value = data.nickname_required
      welcomeBGType.value = data.welcome_bg_type
      removePowerBy.value = data.remove_pinboard_footer
      hrText.value = data.hr_text
      floatButtonColor.value = data.float_button_color
      nicknameFormat.value = data.nickname_type
      if (bgList.includes(data.welcome_bg_image)) {
        welcomeBG.value = data.welcome_bg_image
      } else {
        localBGImgs.value = [{ data: data.welcome_bg_image }]
      }
      welcomeBG.value = data.welcome_bg_image
      logo.value = [{ data: data.chat_logo ? data.chat_logo : logoImg }]
      id = data.id
      name = data.name
    })
  }
  const save = () => {
    axios.post('/dashboard/enterpoint', {
      id,
      name,
      token: token.value,
      is_valid: true,
      show_landing: showPinBoard.value,
      welcome: welecomeMessage.value,
      start_btn_text: btnText.value,
      nickname_input_placeholder: nicknamePlaceholder.value,
      start_btn_color: theme.value,
      nickname_required: isNicknameRequired.value,
      welcome_bg_type: welcomeBGType.value,
      remove_pinboard_footer: removePowerBy.value,
      hr_text: hrText.value,
      float_button_color: floatButtonColor.value,
      nickname_type: nicknameFormat.value,
      welcome_bg_image: localBGImgs.value[0]
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (localBGImgs.value[0] as any).data
        : welcomeBG.value,
      chat_logo:
        logo.value && logo.value[0] && logo.value[0].data === logoImg
          ? ''
          : logo.value
    })
    useNotificationsStore().showSaveSuccess()
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
    welcomeBGType,
    currentTab,
    hrText,
    floatButtonColor,
    bgList,
    welcomeBG,
    additionBtnColor,
    save
  }
}
