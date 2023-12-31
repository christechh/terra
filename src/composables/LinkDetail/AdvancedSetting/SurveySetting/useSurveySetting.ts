import { ref } from 'vue'

export default function useSurveySetting() {
  const showHowToModal = ref(false)
  return {
    showHowToModal
  }
}
