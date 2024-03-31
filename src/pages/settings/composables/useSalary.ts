import { computed } from 'vue'
// import axios from '../../../axios'
import i18n from '../../../i18n'
import { useSalaryStore } from '../../../stores/salary'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'

export default function useSalary(companyId: number) {
  const salaryStore = useSalaryStore()
  const { fetchSalaries, fetchSalaryExtends, fetchSalaryGroups } = salaryStore

  const confirmDeleteSalaryGroup = (companyId: number, groupId: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'salaryGroup',
      title: i18n.global.t('delete-alert-title'),
      content: '確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增',
      deleteData: { companyId, id: groupId }
    })
  }

  const salaries = computed(() => salaryStore.salaries)
  const salaryGroups = computed(() => salaryStore.salaryGroups)
  const salaryExtends = computed(() => salaryStore.salaryExtends)

  fetchSalaries({ companyId, page: 1 })
  fetchSalaryExtends({ companyId, page: 1 })
  fetchSalaryGroups({ companyId, page: 1 })

  return {
    fetchSalaries,
    fetchSalaryExtends,
    fetchSalaryGroups,
    confirmDeleteSalaryGroup,
    salaries,
    salaryGroups,
    salaryExtends
  }
}
