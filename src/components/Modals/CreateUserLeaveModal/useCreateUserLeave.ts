import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useUserLeaveStore } from '../../../stores/user-leave'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateUserLeavePayload {
  id: number
  title: string
  content: string
  help_type: number
}

export default function useCreateUserLeave(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userLeave?: any
) {
  const { companyId } = useCompany()
  const payload: CreateUserLeavePayload = reactive({
    id: 1,
    title: '',
    content: '',
    help_type: 1
  })
  const { id, title, content, help_type } = toRefs(payload)

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
    return (
      title.value !== '' &&
      content.value !== '' &&
      help_type.value.toString() !== '' &&
      help_type.value !== 0
    )
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post(`admin/ui/help`, {
          ...payload
        }),
      update: () =>
        axios.put(
          `admin/ui/help?id=${id.value}&help_type=${help_type.value}&title=${title.value}&content=${content.value}`
        )
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useUserLeaveStore().fetchUserLeaveList({
      companyId: companyId.value ?? 1,
      page: 1
    })
  }

  return {
    id,
    title,
    content,
    help_type,
    canSubmit,
    isEdit,
    submit
  }
}
