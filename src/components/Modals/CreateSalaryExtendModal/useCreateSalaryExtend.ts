import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useSalaryExtendStore } from '../../../stores/salary-extend'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateSalaryExtendPayload {
  companyId: number
  userId: string
  type: string
  name: string
  description: string
  amount: number
  yearMonth: string
}

export default function useCreateSalaryExtend(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  salaryExtend?: any
) {
  const { companyId } = useCompany()
  const payload: CreateSalaryExtendPayload = reactive({
    companyId: companyId.value,
    userId: '1',
    type: 'PLUS',
    name: '',
    description: '',
    amount: 0,
    yearMonth: ''
  })
  const { userId, type, name, description, amount, yearMonth } = toRefs(payload)

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
    return userId.value !== '' &&
      type.value !== '' &&
      name.value !== '' &&
      amount.value.toString() !== '' &&
      amount.value >= 0 &&
      yearMonth.value !== ''
      ? true
      : false
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post('/salary/salary-extend', {
          ...payload
        }),
      update: () =>
        axios.patch(`/salary/salary-extend/${salaryExtend.id}`, {
          ...payload,
          id: salaryExtend.id
        })
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useSalaryExtendStore().fetchSalaryExtendList({
      companyId: companyId.value,
      page: 1
    })
  }

  return {
    companyId,
    userId,
    type,
    name,
    description,
    amount,
    yearMonth,
    canSubmit,
    isEdit,
    submit
  }
}
