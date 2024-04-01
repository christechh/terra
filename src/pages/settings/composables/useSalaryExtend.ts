import i18n from '../../../i18n'
import { computed } from 'vue'
import { useSalaryExtendStore } from '../../../stores/salary-extend'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'

export default function useSalaryExtend(companyId: string) {
  const salaryExtendStore = useSalaryExtendStore()
  const { fetchSalaryExtendList } = salaryExtendStore
  const salaryExtendList = computed(() => salaryExtendStore.salaryExtend)

  const confirmDeleteSalaryExtend = (companyId: number, groupId: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'salaryExtend',
      title: i18n.global.t('delete-alert-title'),
      content: '確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增',
      deleteData: { companyId, id: groupId }
    })
  }

  fetchSalaryExtendList({ companyId, page: 1 })

  return {
    salaryExtendList,
    confirmDeleteSalaryExtend,
    fetchSalaryExtendList
  }
}
