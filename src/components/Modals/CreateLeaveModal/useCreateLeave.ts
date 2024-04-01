import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useLeaveStore } from '../../../stores/leave'

interface CreateLeavePayload {
  companyId: string
  name: string
  limitHours: string
  salaryStandard: string
  description: string
}

export default function useCreateLeave(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leave?: any
) {
  const payload: CreateLeavePayload = reactive({
    companyId: '1',
    name: '',
    limitHours: '1',
    salaryStandard: 'ALL',
    description: ''
  })
  const { companyId, name, limitHours, salaryStandard, description } =
    toRefs(payload)

  const isEdit = computed(() => {
    return !!leave
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (leave) {
      const newValue = {
        ...leave,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key as keyof CreateLeavePayload] = newValue[key] as never
        }
      })
      // Object.assign(payload, { ...leave, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return name.value !== '' &&
      limitHours.value !== '' &&
      salaryStandard.value !== '' &&
      description.value !== ''
      ? true
      : false
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post('/salary/leave', {
          ...payload
        }),
      update: () =>
        axios.put(`/salary/leave/${leave.id}`, {
          ...payload,
          id: leave.id
        })
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useLeaveStore().fetchLeaveList({ companyId: '1', page: 1 })
  }

  return {
    companyId,
    name,
    limitHours,
    salaryStandard,
    description,
    canSubmit,
    isEdit,
    submit
  }
}
