import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useUsersStore } from '../../../stores/users'

interface CreateUsersPayload {
  name: string
  email?: string
  password?: string
  employeeId: string
  workStatus: string
  onboardDate: string
  resignationDate?: string
  identity: string
  salaryType: string
  isEmployeeRetirementPercentage: boolean
  companyIds?: string[]
  enabledModules: string[]
}

export default function useCreateUser(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: any
) {
  const payload: CreateUsersPayload = reactive({
    name: '1',
    email: '111',
    password: '',
    employeeId: '123',
    workStatus: '在職',
    onboardDate: '2024-03-29',
    resignationDate: '',
    identity: '員工',
    salaryType: '月薪',
    isEmployeeRetirementPercentage: false,
    companyIds: ['1', '2'],
    enabledModules: []
  })
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
    isEmployeeRetirementPercentage,
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
      const newValue = {
        ...user,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key as keyof CreateUsersPayload] = newValue[key]
        }
      })
      // Object.assign(payload, { ...user, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return name.value !== '' &&
      email.value !== '' &&
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
        axios.put(`/user/${user.id}`, {
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
    isEmployeeRetirementPercentage,
    companyIds,
    enabledModules,
    canSubmit,
    isEdit,
    submit
  }
}
