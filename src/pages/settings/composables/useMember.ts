import { computed } from 'vue'
import i18n from '../../../i18n'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'
import { useSuccessModalStore } from '../../../stores/modals/successModal'
import { useMemberStore } from '../../../stores/member'

export default function userMember(companyId: number) {
  const memberStore = useMemberStore()

  const { fetchMember } = memberStore

  const member = computed(() => memberStore.member)

  const confirmDeleteMember = (companyId: number, id: number) => {
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

  fetchMember({ companyId, page: 1 })

  return {
    member,
    fetchMember,
    confirmDeleteMember,
    confirmLinkSalary
  }
}
