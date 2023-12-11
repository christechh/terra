import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useDeleteModalStore } from '../../../stores/modals/deleteModal'
import { useLinkPage } from '../../useLinkPage'

export default function useLinkInfo() {
  const route = useRoute()
  const { t } = useI18n()
  const { token, fetchConfig } = useLinkPage()
  const { type } = route.query
  const linkId = ref<number>()
  const chatUrl = computed(() => {
    return `${location.origin}/${token.value}`
  })

  fetchConfig().then((res) => {
    linkId.value = res.id
  })

  const deleteHandler = () => {
    useDeleteModalStore().showModal({
      deleteType: 'chatLink',
      title: t('delete-alert-title'),
      content: t('qrcode-page-delete-check-message'),
      deleteData: { token: token.value, id: linkId.value }
    })
  }
  return {
    type,
    chatUrl,
    deleteHandler
  }
}
