import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useCompanyStore } from '../../../stores/company'

interface CreateCompanyPayload {
  name: string
  taxId: string
  enabledModules: string[]
}

export default function useCreateCompany(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  company?: any
) {
  const payload: CreateCompanyPayload = reactive({
    name: '',
    taxId: '',
    enabledModules: []
  })
  const { name, taxId, enabledModules } = toRefs(payload)

  const isEdit = computed(() => {
    return !!company
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extend: any = {}
    if (company) {
      const newValue = {
        ...company,
        ...extend
      }
      Object.keys(payload).forEach((key) => {
        if (newValue[key] !== undefined) {
          payload[key as keyof CreateCompanyPayload] = newValue[key]
        }
      })
      // Object.assign(payload, { ...company, ...extend })
    }
  })

  const canSubmit = computed(() => {
    return name.value !== '' && taxId.value !== '' ? true : false
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post('/company', {
          ...payload
        }),
      update: () =>
        axios.put(`/company/${company.id}`, {
          ...payload,
          id: company.id
        })
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useCompanyStore().fetchCompanies()
  }

  return {
    name,
    taxId,
    enabledModules,
    canSubmit,
    isEdit,
    submit
  }
}
