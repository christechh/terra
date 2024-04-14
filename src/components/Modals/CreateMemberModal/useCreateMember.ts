/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useMemberStore } from '../../../stores/member'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateMemberPayload {
  name: string
  email?: string
  gender?: string
  nationality?: string
  birthday?: string
  idCardNumber: string
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
  employeeInsurance: number
  healthInsurance: number
  employeePension: number
  family: {
    name: string
    gender: string
    nationality: string
    relationship: string
    idCardNumber: string
  }[]
  companyIds?: string[]
  enabledModules: string[]
  [key: string]: any
}

export default function useCreateUser(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  member?: any
) {
  const { companyId } = useCompany()
  const memberStore = useMemberStore()
  const payload: CreateMemberPayload = reactive(
    member
      ? member
      : {
          name: '',
          email: '',
          password: '',
          employeeId: '',
          workStatus: '在職',
          onboardDate: '',
          resignationDate: '',
          identity: '員工',
          gender: '男',
          nationality: '台灣',
          birthday: '',
          idCardNumber: '',
          address: '',
          mobile: '',
          bankCode: '',
          bankAccount: '',
          salaryType: '月薪',
          salaryItems: [],
          isEmployeeRetirementPercentage: true,
          employeeRetirementPercentage: 6,
          family: [],
          companyIds: [(companyId.value ?? 1).toString()],
          enabledModules: [],
          employeeInsurance: 0,
          healthInsurance: 0,
          employeePension: 0
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
    employeeInsurance,
    healthInsurance,
    employeePension,
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
    return !!member
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (member) {
      const newValue: CreateMemberPayload = {
        ...member,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key] = newValue[key]
        }
      })
      // Object.assign(payload, { ...member, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return name.value !== '' &&
      email?.value !== '' &&
      employeeId.value !== '' &&
      workStatus.value !== '' &&
      onboardDate.value !== '' &&
      identity.value !== '' &&
      salaryType.value !== '' &&
      employeeInsurance.value.toString() !== '' &&
      healthInsurance.value.toString() !== '' &&
      employeePension.value.toString() !== '' &&
      employeeRetirementPercentage.value.toString() !== '' &&
      idCardNumber.value !== '' &&
      address.value !== ''
      ? true
      : false
  })

  // 在 reactive 對象中保存原始數據
  const originalData = reactive({ ...member })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      useNotificationsStore().showError({
        title: '請檢查 Email 格式',
        content: '請檢查 Email 格式'
      })

      return
    }

    console.log(1, password)
    console.log(2, payload.email)

    // 構建要發送的數據，僅包含有實際更改的字段
    const sendData: any = {}
    Object.keys(payload).forEach((key) => {
      // console.log(0, key)
      // console.log(1, originalData[key])
      // console.log(2, payload[key])
      if (
        (member && payload[key] !== originalData[key]) ||
        (!member && payload[key] !== '')
      ) {
        sendData[key] = payload[key]
      }
    })

    // 如果有 family 字段且不為空，處理 family 數據
    if (payload.family && payload.family.length > 0) {
      sendData.family = payload.family.map((member: any) => {
        const updatedMember: any = {}
        Object.keys(member).forEach((memberKey) => {
          if (member[memberKey] !== '') {
            updatedMember[memberKey] = member[memberKey]
          }
        })
        return updatedMember
      })
    }

    // 如果有 salaryItems 字段且不為空，處理 salaryItems 數據
    if (payload.salaryItems && payload.salaryItems.length > 0) {
      sendData.salaryItems = payload.salaryItems.map((item: any) => {
        const updatedItem: any = {}
        Object.keys(item).forEach((itemKey) => {
          if (item[itemKey] !== '') {
            updatedItem[itemKey] = item[itemKey]
          }
        })
        return updatedItem
      })
    }

    let actionMap: any = {}
    if (memberStore.xUserType === 'admin') {
      actionMap = {
        create: () =>
          axios.post('/admin/member', {
            ...payload
          }),
        update: () => axios.patch(`/admin/member/${member.id}`, sendData)
      }
    } else {
      actionMap = {
        create: () =>
          axios.post('/member', {
            ...payload
          }),
        update: () => axios.patch(`/member/${member.id}`, sendData)
      }
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useMemberStore().fetchMember({
      companyId: companyId.value ?? 1,
      page: 1
    })
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
    employeeInsurance,
    healthInsurance,
    employeePension,
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
