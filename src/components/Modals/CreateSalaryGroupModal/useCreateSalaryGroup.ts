/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'

interface CreateSalaryPayload {
  companyId: number
  name: string
  yearMonth: string
  startDate: string
  endDate: string
  paymentDate: string
  salaries: any[]
}

export default function useCreateSalaryGroup() {
  const payload: CreateSalaryPayload = reactive({
    companyId: '',
    name: '',
    yearMonth: '',
    startDate: '',
    endDate: '',
    paymentDate: '',
    salaries: []
  })
  const payloadRefs = toRefs(payload)
  const loading = ref(false)

  onMounted(() => {})

  const canSubmit = computed(() => {
    return (
      payload.yearMonth &&
      payload.startDate &&
      payload.endDate &&
      payload.paymentDate &&
      payload.name &&
      payload.companyId
    )
  })

  const createSalaryGroup = async (callback: () => void) => {
    try {
      const requestPayload = { ...payload }
      console.log('requestPayload', requestPayload)
      // 新舊資料格式轉換
      requestPayload.salaries = requestPayload.salaries.map((item) => {
        return {
          userId: item.user.id,
          salaryItems: item.salaryItems.map((salary: any) => {
            return {
              name: salary.title,
              amount: salary.amount,
              type: String(salary.type).toUpperCase()
            }
          })
        }
      })
      loading.value = true
      const response = await axios.post('/salary/salary-group', requestPayload)
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
    createSalaryGroup,
    loading
  }
}
