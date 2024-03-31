import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useCompanyStore } from '../../../stores/company'
import { parsePhone } from '../../../utils/helper'

interface CreateSubAccountPayload {
  account: string
  name: string
  password: string
  notifyType: number | string
  notifyEmail: string
  notifyPhone: string
  phoneCode: string
}

export default function useCreateSubAccount(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subAccount?: any
) {
  const payload: CreateSubAccountPayload = reactive({
    account: '',
    name: '',
    password: '',
    notifyType: 20,
    notifyEmail: '',
    notifyPhone: '',
    phoneCode: '+886'
  })
  const {
    account,
    name,
    password,
    notifyType,
    notifyEmail,
    notifyPhone,
    phoneCode
  } = toRefs(payload)

  const isEdit = computed(() => {
    return !!subAccount
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (subAccount) {
      if (subAccount.notifyType === 10) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { phoneCode, phone } = parsePhone(subAccount.notifyPhone)
        extend.phoneCode = `+${phoneCode}`
        extend.notifyPhone = phone
      }
      if (subAccount.notifyType === 0) {
        extend.notifyType = 'none'
      }
      const newValue = {
        ...subAccount,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key as keyof CreateSubAccountPayload] = newValue[key] as never
        }
      })
      // Object.assign(payload, { ...subAccount, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return !isEdit.value
      ? account.value !== '' &&
          name.value !== '' &&
          password.value !== '' &&
          ((notifyType.value === 20 && notifyEmail.value !== '') ||
            (notifyType.value === 10 && notifyPhone.value !== '') ||
            notifyType.value === 'none')
      : account.value !== '' &&
          name.value !== '' &&
          ((notifyType.value === 20 && notifyEmail.value !== '') ||
            (notifyType.value === 10 && notifyPhone.value !== '') ||
            notifyType.value === 'none')
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    const actionMap = {
      create: () =>
        axios.post('user/subAccount', {
          ...payload,
          ...(notifyType.value === 10 && {
            notifyPhone: `${payload.phoneCode}${payload.notifyPhone}`
          })
        }),
      update: () =>
        axios.put(`user/subAccount/${subAccount.id}`, {
          ...payload,
          id: subAccount.id,
          type: payload.notifyType,
          ...(notifyType.value === 10 && {
            notifyPhone: `${payload.phoneCode}${payload.notifyPhone}`
          })
        })
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useCompanyStore().fetchCompanies()
  }

  return {
    account,
    name,
    password,
    notifyType,
    notifyEmail,
    notifyPhone,
    phoneCode,
    canSubmit,
    isEdit,
    submit
  }
}
