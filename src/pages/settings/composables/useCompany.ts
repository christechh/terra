import { computed } from 'vue'
import i18n from '../../../i18n'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'
import { useCompanyStore } from '../../../stores/company'

export default function useSubAccount() {
  const subCompanyStore = useCompanyStore()
  const { fetchCompanies } = subCompanyStore
  const companies = computed(() => subCompanyStore.companies)

  const confirmDeleteCompany = (id: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'company',
      title: i18n.global.t('delete-alert-title'),
      content: '確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增',
      deleteData: { id }
    })
  }

  fetchCompanies()

  return {
    companies,
    fetchCompanies,
    confirmDeleteCompany
  }
}
