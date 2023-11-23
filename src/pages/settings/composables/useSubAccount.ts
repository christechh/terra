import { computed } from 'vue'
import i18n from '../../../i18n'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'
import { useSubAccountStore } from '../../../stores/sub-account'

export default function useSubAccount() {
  const subAccountStore = useSubAccountStore()

  const { fetchSubAccounts } = subAccountStore

  const accounts = computed(() => subAccountStore.accounts)

  const confirmDeleteSubAccount = (id: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'subAccount',
      title: i18n.global.t('delete-alert-title'),
      content: i18n.global.t('page-delete-check-desc'),
      deleteData: { id }
    })
  }

  fetchSubAccounts()

  return {
    accounts,
    fetchSubAccounts,
    confirmDeleteSubAccount
  }
}
