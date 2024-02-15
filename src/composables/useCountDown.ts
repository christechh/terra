import { ref } from 'vue'

export default function useCountDown() {
  const count = ref(0)
  const countDown = (initTime: number) => {
    count.value = initTime
    const timer = setInterval(() => {
      count.value--
      if (count.value <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  }
  return {
    count,
    countDown
  }
}
