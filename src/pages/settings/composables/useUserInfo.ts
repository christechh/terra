import { AsYouType } from 'libphonenumber-js'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from '../../../axios'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'
import { useNotificationsStore } from '../../../stores/notifications'

interface UserInfo {
  notify_phone: string
  image_id: number | null
  avatar: string
  notify_email: string
  is_open_notify: boolean
  notify_type: number
  name: string
  id?: number
  email: string
  sub_accounts_limit: number
  sub_accounts_count: number
}

export default function useUserInfo() {
  const { t } = useI18n()
  const userInfo = reactive<UserInfo>({
    notify_phone: '',
    image_id: null,
    avatar: '',
    notify_email: '',
    is_open_notify: false,
    notify_type: 20,
    name: '',
    email: '',
    sub_accounts_limit: 0,
    sub_accounts_count: 0
  })
  const phoneCode = ref('+886')
  const accountSettingChange = ref(false)
  const nofityChange = ref(false)

  const getUserInfo = async () => {
    await axios.get('/meta').then((res) => {
      const { data } = res.data.Result
      Object.assign(userInfo, data)
      const ast = new AsYouType()
      if (userInfo.notify_type === 10) {
        ast.input(userInfo.notify_phone)
        phoneCode.value = `+${ast.getCallingCode() as string}`
        userInfo.notify_phone = ast.getNationalNumber()
      }
    })
  }

  const updateAccountSetting = async () => {
    try {
      const res = await axios.post('/auth/setting', {
        image_id: userInfo.image_id,
        ...(!userInfo.image_id && { avatar: userInfo.avatar }),
        name: userInfo.name
      })
      const { data } = res.data
      Object.assign(userInfo, data)
      useNotificationsStore().showSaveSuccess()
    } catch (e) {
      console.log(e)
    } finally {
      accountSettingChange.value = false
    }
  }

  const updateNotification = async () => {
    try {
      await axios.patch('/user/notify', {
        email: userInfo.notify_email,
        is_open_notify: userInfo.is_open_notify,
        phone: `${phoneCode.value}${userInfo.notify_phone}`,
        type: userInfo.notify_type
      })
      nofityChange.value = false
      useNotificationsStore().showSaveSuccess()
    } catch (e) {
      console.log(e)
    }
  }

  const confirmDeleteAccout = () => {
    useDeleteModalStore().showModal({
      deleteType: 'account',
      title: '',
      content: t('delete-account-modal-desc'),
      deleteData: { id: userInfo.id }
    })
  }

  const headChangehandler = (img: { img: string; id: number }) => {
    userInfo.image_id = null
    if (img.id) {
      userInfo.image_id = img.id
    }
    if (img.img) {
      userInfo.avatar = img.img
    }
    accountSettingChange.value = true
  }

  return {
    userInfo,
    phoneCode,
    accountSettingChange,
    nofityChange,
    getUserInfo,
    updateAccountSetting,
    updateNotification,
    confirmDeleteAccout,
    headChangehandler
  }
}
