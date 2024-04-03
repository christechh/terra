import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useWorkRecordStore } from '../../../stores/work-record'

interface CreateWorkRecordPayload {
  userId: string
  companyId: string
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
  const payload: CreateWorkRecordPayload = reactive({
    userId: '',
    companyId: '1',
    startTime: '',
    endTime: '',
    restHours: 0,
    type: 'HOLIDAY',
    description: ''
  })
  const {
    userId,
    companyId,
    startTime,
    endTime,
    restHours,
    type,
    description
  } = toRefs(payload)

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
      companyId.value !== '' &&
      startTime.value !== '' &&
      endTime.value !== '' &&
      type.value !== '' &&
      restHours.value.toString() !== ''
      ? true
      : false
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
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
    useWorkRecordStore().fetchWorkRecordList({ companyId: '1', page: 1 })
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