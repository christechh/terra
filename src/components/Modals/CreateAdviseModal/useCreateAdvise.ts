import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useAdviseStore } from '../../../stores/advise'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateAdvisePayload {
  id: number
  members_id: number
  title: string
  content: string
  response: string
  advise_status: number
}

export default function useCreateAdvise(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  advise?: any
) {
  const { companyId } = useCompany()
  const payload: CreateAdvisePayload = reactive({
    id: 1,
    members_id: 1,
    title: '',
    content: '',
    response: '',
    advise_status: 1
  })
  const { id, members_id, title, content, response, advise_status } =
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
    return (
      title.value !== '' &&
      content.value !== '' &&
      response.value !== '' &&
      advise_status.value.toString() !== '' &&
      advise_status.value !== 0
    )
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post(
          `/admin/ui/advise?id=${id.value}&members_id=${members_id.value}&title=${title.value}&content=${content.value}&response=${response.value}&advise_status=${advise_status.value}`,
          {
            ...payload
          }
        ),
      update: () =>
        axios.put(
          `/admin/ui/advise?id=${id.value}&members_id=${members_id.value}&title=${title.value}&content=${content.value}&response=${response.value}&advise_status=${advise_status.value}`
        )
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
    id,
    members_id,
    title,
    content,
    response,
    advise_status,
    canSubmit,
    isEdit,
    submit
  }
}
