import i18n from '../../../i18n'
import { computed } from 'vue'
import { useLeaveStore } from '../../../stores/leave'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'

export default function useLeave(companyId: number) {
  const leaveStore = useLeaveStore()
  const { fetchLeaveList } = leaveStore
  const leaveList = computed(() => leaveStore.leave)

  const confirmDeleteLeave = (companyId: number, groupId: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'leave',
      title: i18n.global.t('delete-alert-title'),
      content: '確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增',
      deleteData: { companyId, id: groupId }
    })
  }

  fetchLeaveList({ companyId, page: 1 })

  return {
    leaveList,
    confirmDeleteLeave,
    fetchLeaveList
  }
}
