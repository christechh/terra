import i18n from '../../../i18n'
import { computed } from 'vue'
import { useAdviseStore } from '../../../stores/advise'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'

export default function useAdvise(companyId: number) {
  const adviseStore = useAdviseStore()
  const { fetchAdviseList } = adviseStore
  const adviseList = computed(() => adviseStore.advise)

  const confirmDeleteAdvise = (companyId: number, groupId: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'advise',
      title: i18n.global.t('delete-alert-title'),
      content: '確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增',
      deleteData: { companyId, id: groupId }
    })
  }

  fetchAdviseList({ companyId, page: 1 })

  return {
    adviseList,
    confirmDeleteAdvise,
    fetchAdviseList
  }
}
