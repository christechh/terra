import i18n from '../../../i18n'
import { computed } from 'vue'
import { useWorkRecordStore } from '../../../stores/work-record'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'

export default function useWorkRecord(companyId: number) {
  const workRecordStore = useWorkRecordStore()
  const { fetchWorkRecordList } = workRecordStore
  const workRecordList = computed(() => workRecordStore.workRecordList)

  const confirmDeleteWorkRecord = (companyId: number, groupId: number) => {
    useDeleteModalStore().showModal({
      deleteType: 'workRecord',
      title: i18n.global.t('delete-alert-title'),
      content: '確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增',
      deleteData: { companyId, id: groupId }
    })
  }

  fetchWorkRecordList({ companyId, page: 1 })

  return {
    workRecordList,
    confirmDeleteWorkRecord,
    fetchWorkRecordList
  }
}
