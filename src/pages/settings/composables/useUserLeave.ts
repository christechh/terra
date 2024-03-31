import i18n from '../../../i18n'
import { computed } from 'vue'
import { useUserLeaveStore } from '../../../stores/user-leave'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'

export default function useUserLeave(companyId: string) {
  const userLeaveStore = useUserLeaveStore()
  const { fetchUserLeaveList } = userLeaveStore
  const userLeaveList = computed(() => userLeaveStore.userLeave)

  const confirmDeleteUserLeave = (companyId: number, groupId: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'userLeave',
      title: i18n.global.t('delete-alert-title'),
      content: '確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增',
      deleteData: { companyId, id: groupId }
    })
  }

  fetchUserLeaveList({ companyId, page: 1 })

  return {
    userLeaveList,
    confirmDeleteUserLeave,
    fetchUserLeaveList
  }
}
