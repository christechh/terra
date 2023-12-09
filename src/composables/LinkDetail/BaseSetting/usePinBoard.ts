import { ref } from 'vue'

export default function usePinBoard() {
  const showPinBoard = ref(false)
  const welecomeMessage = ref('')
  const btnText = ref('')
  const nickname = ref('')
  const isNicknameRequired = ref(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logo = ref<any[] | null>(null)

  return {
    showPinBoard,
    welecomeMessage,
    btnText,
    nickname,
    isNicknameRequired,
    logo
  }
}
