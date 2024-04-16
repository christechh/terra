import { computed, onMounted, reactive, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'
import { useSalaryExtendStore } from '../../../stores/salary-extend'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface CreateSalaryExtendPayload {
  id: number
  redeem_point: number
  price: number
  discount: number
  start_date: string
  end_date: string
  valid: number
}

export default function useCreateSalaryExtend(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  salaryExtend?: any
) {
  const { companyId } = useCompany()
  const payload: CreateSalaryExtendPayload = reactive({
    id: 1,
    redeem_point: 1,
    price: 1,
    discount: 1,
    start_date: '',
    end_date: '',
    valid: 1
  })
  const { id, redeem_point, price, discount, start_date, end_date, valid } =
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
    return redeem_point.value.toString() !== ''
  })

  const submit = async (isEdit: boolean, callback: () => void) => {
    const action = isEdit ? 'update' : 'create'
    console.log(action)
    const actionMap = {
      create: () =>
        axios.post('/admin/ui/wallet/plan', {
          ...payload
        }),
      update: () =>
        axios.put(
          `/admin/ui/wallet/plan?id=${id.value}&redeem_point=${redeem_point.value}&price=${price.value}&discount=${discount.value}&start_date=${start_date.value}&end_date=${end_date.value}&valid=${valid.value}`,
          {
            ...payload,
            id: salaryExtend.id
          }
        )
    }
    await actionMap[action]()
    useNotificationsStore().showSaveSuccess()
    callback()
    useSalaryExtendStore().fetchSalaryExtendList({
      companyId: companyId.value ?? 1,
      page: 1
    })
  }

  return {
    id,
    redeem_point,
    price,
    discount,
    start_date,
    end_date,
    valid,
    canSubmit,
    isEdit,
    submit
  }
}
