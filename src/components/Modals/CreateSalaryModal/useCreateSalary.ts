/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, onMounted, reactive, toRefs } from 'vue'
// import axios from '../../../axios'
// import { useNotificationsStore } from '../../../stores/notifications'

interface CreateSalaryPayload {
  [key: string]: any
}

export default function useCreateSalary(companyId: number) {
  const payload: CreateSalaryPayload = reactive({
    yearMonth: null,
    startDate: null,
    endDate: null,
    paymentDate: null,
    title: null
  })
  const { yearMonth, startDate, endDate, paymentDate, title } = toRefs(payload)

  onMounted(() => {})

  const canSubmit = computed(() => {
    console.log({
      yearMonth,
      startDate,
      endDate,
      paymentDate,
      title
    })
    return (
      yearMonth.value &&
      startDate.value &&
      endDate.value &&
      paymentDate.value &&
      title.value
    )
  })

  const submit = async (callback: () => void) => {
    console.log(payload, companyId)
    callback()
    // await axios.post('/salary', { ...payload, companyId })
    // useNotificationsStore().showSaveSuccess()
    // callback()
  }

  return {
    yearMonth,
    startDate,
    endDate,
    paymentDate,
    title,
    canSubmit,
    submit
  }
}
