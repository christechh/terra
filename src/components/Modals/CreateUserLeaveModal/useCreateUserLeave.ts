import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useUserLeaveStore } from '../../../stores/user-leave'

interface CreateUserLeavePayload {
  userId: string
  companyId: string
  startTime: string
  endTime: string
  restHours: number
  leaveId: string
  description: string
}

export default function useCreateUserLeave(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userLeave?: any
) {
  const payload: CreateUserLeavePayload = reactive({
    userId: '1',
    companyId: '1',
    startTime: '',
    endTime: '',
    restHours: 0,
    leaveId: '',
    description: ''
  })
  const {
    userId,
    companyId,
    startTime,
    endTime,
    restHours,
    leaveId,
    description
  } = toRefs(payload)

  const isEdit = computed(() => {
    return !!userLeave
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (userLeave) {
      const newValue = {
        ...userLeave,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key as keyof CreateUserLeavePayload] = newValue[key] as never
        }
      })
      // Object.assign(payload, { ...userLeave, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return userId.value !== '' &&
      companyId.value !== '' &&
      startTime.value !== '' &&
      endTime.value !== '' &&
      leaveId.value !== '' &&
      restHours.value.toString() !== '' &&
      restHours.value >= 0
      ? true
      : false
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post('/salary/user-leave', {
          ...payload
        }),
      update: () =>
        axios.patch(`/salary/user-leave/${userLeave.id}`, {
          ...payload,
          id: userLeave.id
        })
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useUserLeaveStore().fetchUserLeaveList({ companyId: '1', page: 1 })
  }

  return {
    userId,
    companyId,
    startTime,
    endTime,
    restHours,
    leaveId,
    description,
    canSubmit,
    isEdit,
    submit
  }
}
