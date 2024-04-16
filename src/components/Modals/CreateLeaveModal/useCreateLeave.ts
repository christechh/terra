import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useLeaveStore } from '../../../stores/leave'
import useCompany from '../../../../src/pages/settings/composables/useCompany'
interface CreateLeavePayload {
  id: number
  term_type: number
  content: string
}

export default function useCreateLeave(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leave?: any
) {
  const { companyId } = useCompany()

  const payload: CreateLeavePayload = reactive({
    id: 1,
    term_type: 1,
    content: ''
  })

  const { id, term_type, content } = toRefs(payload)

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
    return term_type.value.toString() !== '' && content.value !== ''
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post(`/admin/ui/term`, {
          term_type: term_type.value,
          content: content.value
        }),
      update: () =>
        axios.put(
          `/admin/ui/term?id=${id.value}&term_type=${term_type.value}&content=${content.value}`
        )
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useLeaveStore().fetchLeaveList({
      companyId: companyId.value ?? 1,
      page: 1
    })
  }

  return {
    id,
    term_type,
    content,
    canSubmit,
    isEdit,
    submit
  }
}
