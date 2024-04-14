import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useAdviseStore } from '../../../stores/advise'
import useCompany from '../../../pages/settings/composables/useCompany'

interface CreateAdvisePayload {
  userId: string
  companyId: number
  startTime: string
  endTime: string
  restHours: number
  leaveId: string
  description: string
}

export default function useCreateAdvise(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  advise?: any
) {
  const { companyId } = useCompany()
  const payload: CreateAdvisePayload = reactive({
    userId: '1',
    companyId: companyId.value ?? 1,
    startTime: '',
    endTime: '',
    restHours: 0,
    leaveId: '',
    description: ''
  })
  const { userId, startTime, endTime, restHours, leaveId, description } =
    toRefs(payload)

  const isEdit = computed(() => {
    return !!advise
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (advise) {
      const newValue = {
        ...advise,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key as keyof CreateAdvisePayload] = newValue[key] as never
        }
      })
      // Object.assign(payload, { ...advise, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return userId.value !== '' &&
      companyId.value?.toString() !== '' &&
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
        axios.post('/admin/ui/advise', {
          ...payload
        }),
      update: () =>
        axios.patch(`/admin/ui/advise/${advise.id}`, {
          ...payload,
          id: advise.id
        })
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useAdviseStore().fetchAdviseList({
      companyId: companyId.value ?? 1,
      page: 1
    })
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
