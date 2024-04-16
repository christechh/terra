import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useWorkRecordStore } from '../../../stores/work-record'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateWorkRecordPayload {
  rate: number
  effective_date: string
}

export default function useCreateWorkRecord(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workRecord?: any
) {
  const { companyId } = useCompany()

  const payload: CreateWorkRecordPayload = reactive({
    rate: 1,
    effective_date: ''
  })
  const { rate, effective_date } = toRefs(payload)

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
    return (
      effective_date.value !== '' &&
      rate.value !== 0 &&
      rate.value?.toString() !== ''
    )
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'

    const actionMap = {
      create: () =>
        axios.post('/admin/ui/wallet/rate', {
          ...payload
        }),
      update: () =>
        axios.put(
          `/admin/ui/wallet/rate?rate=${rate.value}&effective_date=${effective_date.value}`
        )
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
    rate,
    effective_date,
    canSubmit,
    isEdit,
    submit
  }
}
