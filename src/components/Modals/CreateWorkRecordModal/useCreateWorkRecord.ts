import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useWorkRecordStore } from '../../../stores/work-record'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateWorkRecordPayload {
  userId: string
  companyId: number
  startTime: string
  endTime: string
  restHours: number
  type: string
  description: string
}

export default function useCreateWorkRecord(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workRecord?: any
) {
  const { companyId } = useCompany()

  const payload: CreateWorkRecordPayload = reactive({
    userId: '',
    companyId: companyId.value ?? 1,
    startTime: '',
    endTime: '',
    restHours: 0,
    type: 'HOLIDAY',
    description: ''
  })
  const { userId, startTime, endTime, restHours, type, description } =
    toRefs(payload)

  const isEdit = computed(() => {
    return !!workRecord
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (workRecord) {
      const newValue = {
        ...workRecord,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key as keyof CreateWorkRecordPayload] = newValue[key] as never
        }
      })
      // Object.assign(payload, { ...workRecord, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return userId.value !== '' &&
      companyId.value?.toString() !== '' &&
      startTime.value !== '' &&
      endTime.value !== '' &&
      type.value !== '' &&
      restHours.value.toString() !== '' &&
      restHours.value >= 0
      ? true
      : false
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    if (payload.restHours < 0) {
      useNotificationsStore().showError({
        title: '休息時間需大於0',
        content: '休息時間需大於0'
      })

      return
    }
    const actionMap = {
      create: () =>
        axios.post('/salary/work-record', {
          ...payload
        }),
      update: () =>
        axios.patch(`/salary/work-record/${workRecord.id}`, {
          ...payload,
          id: workRecord.id
        })
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useWorkRecordStore().fetchWorkRecordList({
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
    type,
    description,
    canSubmit,
    isEdit,
    submit
  }
}
