/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'

interface CreateWorkRecordPayload {
  userId: string
  companyId: string
  startTime: string
  endTime: string
  restHours: number
  type: string
  description: string
}

export default function useCreateWorkRecord() {
  const payload: CreateWorkRecordPayload = reactive({
    userId: '1',
    companyId: '3',
    startTime: '2024-03-25 09:00:00',
    endTime: '2024-03-25 18:00:00',
    restHours: 1.5,
    type: 'HOLIDAY',
    description: ''
  })
  const payloadRefs = toRefs(payload)
  const loading = ref(false)

  onMounted(() => {})

  const canSubmit = computed(() => {
    return (
      payload.userId &&
      payload.startTime &&
      payload.endTime &&
      payload.restHours &&
      payload.type &&
      payload.companyId
    )
  })

  const createWorkRecord = async (callback: () => void) => {
    try {
      const requestPayload = { ...payload }
      console.log('requestPayload', requestPayload)
      loading.value = true
      const response = await axios.post('/salary/work-record', requestPayload)
      if (response.data.id) {
        useNotificationsStore().showSaveSuccess()
        callback()
      } else {
        throw Error('id not found')
      }
    } catch (error) {
      if (error instanceof Error) console.log('[Debug] error', error.message)
      useNotificationsStore().showSaveError()
    } finally {
      loading.value = false
    }
  }

  return {
    payloadRefs,
    canSubmit,
    createWorkRecord,
    loading
  }
}
