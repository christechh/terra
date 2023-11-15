import { ref } from 'vue'
import axios from '../../../axios'
import { useNotificationsStore } from '../../../stores/notifications'

export default function usePassword() {
  const oldPsd = ref('')
  const newPsd = ref('')
  const newPsdAgain = ref('')
  const resetPsdError = ref('')

  const updatePassword = async () => {
    try {
      await axios.put('/auth/updatePassword', {
        new_password: newPsd.value,
        new_password_confirmation: newPsdAgain.value,
        old_password: oldPsd.value
      })
      oldPsd.value = ''
      newPsd.value = ''
      newPsdAgain.value = ''
      useNotificationsStore().showSaveSuccess()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      resetPsdError.value = e.response.data.message
    }
  }

  return {
    oldPsd,
    newPsd,
    newPsdAgain,
    resetPsdError,
    updatePassword
  }
}
