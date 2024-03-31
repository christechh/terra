import { ref } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'

export interface ExportSalaryPayload {
  companyId: number
  salaryGroupId: string
}

export default function useExportSalary() {
  const loading = ref(false)

  const exportSalary = async (
    payload: ExportSalaryPayload,
    callback: () => void
  ) => {
    try {
      loading.value = true
      const response = await axios.post('/salary/export', {
        type: 'salary',
        companyId: payload.companyId,
        salaryGroupId: payload.salaryGroupId
      })
      if (response) {
        useNotificationsStore().showSaveSuccess()
        callback()
      } else {
        throw Error('Unknown Error')
      }
    } catch (error) {
      if (error instanceof Error) console.log('[Debug] error', error.message)
      useNotificationsStore().showError({
        title: '錯誤',
        content: '匯出失敗'
      })
    } finally {
      loading.value = false
    }
  }

  return {
    exportSalary,
    loading
  }
}
