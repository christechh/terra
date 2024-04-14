import { computed } from 'vue'
import i18n from '../../../i18n'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'
import { useSuccessModalStore } from '../../../stores/modals/successModal'
import { useUsersStore } from '../../../stores/users'

export default function userUser() {
  const subUserStore = useUsersStore()

  const { fetchUsers } = subUserStore

  const users = computed(() => subUserStore.users)

  const confirmDeleteUser = (companyId: number, id: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'user',
      title: i18n.global.t('delete-alert-title'),
      content: i18n.global.t('page-delete-check-desc'),
      deleteData: { companyId, id }
    })
  }

  const confirmLinkSalary = () => {
    useSuccessModalStore().showModal({
      title: i18n.global.t('新增成功'),
      content: i18n.global.t('是否要前往計算薪資？'),
      confirmButtonText: '前往計算薪資'
    })
  }

  fetchUsers()

  return {
    users,
    fetchUsers,
    confirmDeleteUser,
    confirmLinkSalary
  }
}
