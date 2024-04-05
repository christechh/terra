/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useUsersStore } from '../../../stores/users'

interface CreateUsersPayload {
  name: string
  email?: string
  gender?: string
  nationality?: string
  birthday?: string
  idCardNumber?: string
  address: string
  mobile: string
  bankCode: string
  bankAccount: string
  password?: string
  employeeId: string
  workStatus: string
  onboardDate: string
  resignationDate?: string
  identity: string
  salaryType: string
  isEmployeeRetirementPercentage: boolean
  employeeRetirementPercentage: number
  family: {
    name: string
    gender: string
    nationality: string
    relationship: string
    id_card_number: string
  }[]
  companyIds?: string[]
  enabledModules: string[]
  [key: string]: any
}

export default function useCreateUser(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: any
) {
  const payload: CreateUsersPayload = reactive(
    user
      ? user
      : {
          name: 'XXX',
          email: '111@gmail.com',
          password: '',
          employeeId: '123',
          workStatus: '在職',
          onboardDate: '2024-03-29',
          resignationDate: '',
          identity: '員工',
          gender: '男',
          nationality: '',
          birthday: '',
          idCardNumber: '',
          address: '',
          mobile: '',
          bankCode: '',
          bankAccount: '',
          salaryType: '月薪',
          salaryItems: [],
          isEmployeeRetirementPercentage: true,
          family: [],
          companyIds: ['1', '2'],
          enabledModules: []
        }
  )
  const {
    name,
    email,
    password,
    employeeId,
    workStatus,
    onboardDate,
    resignationDate,
    identity,
    salaryType,
    salaryItems,
    gender,
    nationality,
    birthday,
    idCardNumber,
    address,
    mobile,
    bankCode,
    bankAccount,
    isEmployeeRetirementPercentage,
    employeeRetirementPercentage,
    family,
    companyIds,
    enabledModules
  } = toRefs(payload)

  const isEdit = computed(() => {
    return !!user
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (user) {
      const newValue: CreateUsersPayload = {
        ...user,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key] = newValue[key]
        }
      })
      // Object.assign(payload, { ...user, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return name.value !== '' &&
      email?.value !== '' &&
      employeeId.value !== '' &&
      workStatus.value !== '' &&
      onboardDate.value !== '' &&
      identity.value !== '' &&
      salaryType.value !== ''
      ? true
      : false
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post('/user', {
          ...payload
        }),
      update: () =>
        axios.patch(`/user/${user.id}`, {
          ...payload,
          id: user.id
        })
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useUsersStore().fetchUsers()
  }

  return {
    name,
    email,
    password,
    employeeId,
    workStatus,
    onboardDate,
    resignationDate,
    identity,
    salaryType,
    salaryItems,
    gender,
    nationality,
    birthday,
    idCardNumber,
    address,
    mobile,
    bankCode,
    bankAccount,
    isEmployeeRetirementPercentage,
    employeeRetirementPercentage,
    family,
    companyIds,
    enabledModules,
    canSubmit,
    isEdit,
    submit
  }
}
