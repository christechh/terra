import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useSalaryStore } from '../../../stores/salary'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateSalaryExtendPayload {
  id: number
  image_url: string
  redirect_url: string
  expiration_date: string
  sequence: number
  valid: number
}

export default function useCreateSalaryExtend(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  salaryExtend?: any
) {
  const { companyId } = useCompany()
  const payload: CreateSalaryExtendPayload = reactive({
    id: 1,
    image_url: '',
    redirect_url: '',
    expiration_date: '',
    sequence: 1,
    valid: 1
  })
  const { id, image_url, redirect_url, expiration_date, sequence, valid } =
    toRefs(payload)

  const isEdit = computed(() => {
    return !!salaryExtend
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (salaryExtend) {
      const newValue = {
        ...salaryExtend,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key as keyof CreateSalaryExtendPayload] = newValue[
            key
          ] as never
        }
      })
      // Object.assign(payload, { ...salaryExtend, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return valid.value.toString() !== ''
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post('/admin/ui/ads', {
          ...payload
        }),
      update: () =>
        axios.put(
          `/admin/ui/ads?id=${id.value}&redirect_url=${redirect_url.value}&expiration_date=${expiration_date.value}&valid=${valid.value}`
        )
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useSalaryStore().fetchSalaryGroups({
      companyId: companyId.value ?? 1,
      page: 1
    })
  }

  return {
    id,
    image_url,
    redirect_url,
    expiration_date,
    sequence,
    valid,
    canSubmit,
    isEdit,
    submit
  }
}
