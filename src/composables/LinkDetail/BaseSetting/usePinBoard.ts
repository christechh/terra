import { ref } from 'vue'

export default function usePinBoard() {
  const showPinBoard = ref(false)
  const welecomeMessage = ref('')
  const btnText = ref('')
  const nickname = ref('')
  const isNicknameRequired = ref(false)
  return {
    showPinBoard,
    welecomeMessage,
    btnText,
    nickname,
    isNicknameRequired
  }
}
