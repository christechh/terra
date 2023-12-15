import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import logoImg from '../../../assets/images/logo_dark_v6.png'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useLinkPage } from '../../useLinkPage'

export default function usePinBoard() {
  const { token } = useLinkPage()
  const { t } = useI18n()
  const showPinBoard = ref(false)
  const welecomeMessage = ref('')
  const btnText = ref('')
  const nicknamePlaceholder = ref('')
  const theme = ref('')
  const isNicknameRequired = ref(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logo = ref<any[] | null>(null)
  const localBGImgs = ref<{ data: string }[]>([])
  const removePowerBy = ref(false)
  const nicknameFormat = ref('')
  const welcomeBGType = ref('image')
  const currentTab = ref(0)
  const hrText = ref('')
  const floatButtonColor = ref('')
  const welcomeBG = ref('')
  const additionBtnColor = ref('')
  const chatHeaderColor = ref('')
  const chatHeaderTextColor = ref('')
  const chatBubbleColor = ref('')
  const chatBubbleBorderColor = ref('')
  const chatBubbleTextColor = ref('')
  const title = ref('')
  const avatar = ref('')
  const image_id = ref('')
  const welcome_message = ref('')
  const welcomeGetCustomerInfoType = ref('')
  const showOnlineStatus = ref(false)
  const isOnline = ref(false)
  const offlineSendMsg = ref('')
  const openNotifySetting = ref(false)
  const showSavePopup = ref(false)
  const showGuestSetting = ref(false)
  const showExportLog = ref(false)
  const showIsRead = ref(false)
  const name = ref('')
  const chatLogoSize = ref(0) // chat_logo_size
  const withoutSeoNoIndex = ref(false)
  const chatroomActionSetting = reactive({
    file: false,
    location: false,
    voice: false,
    vote: false
  })

  const bgList = [
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/1f77b4ff50d6279648b27a42ed999826.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/dae136ba5563fa48cd4472c9867167e4.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/0b0a4793be55b1ca27e265e132e65773.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/ad545b6fc6f11bb451d944d5a8a02957.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/355bc6cb11e8ccb6904c88f00cdf8959.png',
    'https://pinchat-prod.s3.ap-northeast-1.amazonaws.com/enterpoint/d30cb76255415d8e13f8563c05851354.png'
  ]
  let id = ''

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
      name.value = data.name
      chatHeaderColor.value = data.chat_header_color
      chatHeaderColorChangeHandler(data.chat_header_color)
      title.value = data.title
      avatar.value = data.avatar
      image_id.value = data.image_id
      welcome_message.value = data.welcome_message
      welcomeGetCustomerInfoType.value = data.welcome_get_customer_info_type
      showOnlineStatus.value = data.show_online_status
      isOnline.value = data.is_online
      offlineSendMsg.value = data.offline_send_msg
      openNotifySetting.value = data.open_notify_setting
      showSavePopup.value = data.show_save_popup
      showGuestSetting.value = data.show_guest_setting
      showExportLog.value = data.show_export_log
      showIsRead.value = data.show_is_read
      chatLogoSize.value = data.chat_logo_size
      withoutSeoNoIndex.value = data.without_seo_no_index
      Object.assign(chatroomActionSetting, data.chatroom_action_setting)
    })
  }
  const save = () => {
    axios
      .post('/dashboard/enterpoint', {
        id,
        name: name.value,
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
        chat_logo_size: chatLogoSize.value,
        without_seo_no_index: withoutSeoNoIndex.value,
        welcome_bg_image: localBGImgs.value[0]
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (localBGImgs.value[0] as any).data
          : welcomeBG.value,
        chat_logo: ''
      })
      .then(() => {
        useNotificationsStore().showSaveSuccess()
      })
  }

  const saveChatSetting = () => {
    axios
      .post('/dashboard/enterpoint', {
        id,
        name: name.value,
        token: token.value,
        is_valid: true,
        chat_header_color: chatHeaderColor.value,
        chat_header_text_color: chatHeaderTextColor.value,
        chat_bubble_color: chatBubbleColor.value,
        chat_bubble_border_color: chatBubbleBorderColor.value,
        chat_bubble_text_color: chatBubbleTextColor.value,
        title: title.value,
        avatar: avatar.value,
        image_id: image_id.value,
        welcome_message: welcome_message.value,
        welcome_get_customer_info_type: welcomeGetCustomerInfoType.value,
        show_online_status: showOnlineStatus.value,
        is_online: isOnline.value,
        offline_send_msg: offlineSendMsg.value,
        open_notify_setting: openNotifySetting.value,
        show_save_popup: showSavePopup.value,
        show_guest_setting: showGuestSetting.value,
        show_export_log: showExportLog.value,
        show_is_read: showIsRead.value,
        chatroom_action_setting: chatroomActionSetting
      })
      .then(() => {
        useNotificationsStore().showSaveSuccess()
      })
  }

  const changeShowGuestSetting = (event: Event) => {
    if (!(event.target as HTMLInputElement).checked) {
      showExportLog.value = false
    }
  }

  const chatHeaderColorChangeHandler = (color: string) => {
    const m = {
      '#02b13f': {
        headerText: '#ffffff',
        msgBubble: '#DDEFE0',
        bubbleBorder: 'DDEFE0',
        bubbleText: '#000000'
      },
      '#007abf': {
        headerText: '#ffffff',
        msgBubble: '#B4CEDC',
        bubbleBorder: '#B4CEDC',
        bubbleText: '#000000'
      },
      '#ffa01a': {
        headerText: '#000000',
        msgBubble: '#FFE4BC',
        bubbleBorder: '#FFE4BC',
        bubbleText: '#000000'
      },
      '#ff85b0': {
        headerText: '#ffffff',
        msgBubble: '#FFE9F1',
        bubbleBorder: '#FFE9F1',
        bubbleText: '#7B7B7B'
      },
      '#cf93e6': {
        headerText: '#ffffff',
        msgBubble: '#E7D0F0',
        bubbleBorder: '#E7D0F0',
        bubbleText: '#616081'
      },
      '#e0eb76': {
        headerText: '#000000',
        msgBubble: '#39701E',
        bubbleBorder: '#39701E',
        bubbleText: '#ffffff'
      }
    }
    const theme = m[color as keyof typeof m]
    if (theme) {
      chatHeaderColor.value = color
      chatHeaderTextColor.value = theme.headerText
      chatBubbleColor.value = theme.msgBubble
      chatBubbleBorderColor.value = theme.bubbleBorder
      chatBubbleTextColor.value = theme.bubbleText
    }
  }

  const nickNameFormatTypeChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value
    const m = {
      none: t('nickname-type-none-placeholder'),
      email: t('nickname-type-email-placeholder'),
      mobile: t('nickname-type-mobile-placeholder'),
      id: t('nickname-type-id-placeholder'),
      number: t('nickname-type-number-placeholder')
    }
    nicknamePlaceholder.value = m[value as keyof typeof m]
  }

  getPinboardSetting()

  return {
    name,
    showPinBoard,
    welecomeMessage,
    btnText,
    nicknamePlaceholder,
    isNicknameRequired,
    logo,
    localBGImgs,
    removePowerBy,
    theme,
    nicknameFormat,
    welcomeBGType,
    currentTab,
    hrText,
    floatButtonColor,
    bgList,
    welcomeBG,
    additionBtnColor,
    chatHeaderColor,
    chatHeaderTextColor,
    chatBubbleColor,
    chatBubbleBorderColor,
    chatBubbleTextColor,
    title,
    avatar,
    image_id,
    welcome_message,
    welcomeGetCustomerInfoType,
    showOnlineStatus,
    isOnline,
    offlineSendMsg,
    openNotifySetting,
    showSavePopup,
    showGuestSetting,
    showExportLog,
    showIsRead,
    chatroomActionSetting,
    chatLogoSize,
    withoutSeoNoIndex,
    changeShowGuestSetting,
    save,
    saveChatSetting,
    chatHeaderColorChangeHandler,
    nickNameFormatTypeChange
  }
}
