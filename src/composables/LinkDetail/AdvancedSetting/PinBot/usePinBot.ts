import { ref } from 'vue'

/*
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import axios from '../../../../axios'
import { useDeleteModalStore } from '../../../../stores/modals/deleteModal'
import { useNotificationsStore } from '../../../../stores/notifications'
*/
export default function usePinBot() {
  // const { t } = useI18n()
  const isChange = ref(false)
  const isInit = ref(true)
  return {
    isChange,
    isInit
  }
}
