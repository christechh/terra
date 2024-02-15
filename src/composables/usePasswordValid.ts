import { computed, Ref } from 'vue'

export default function usePasswordValid(password: Ref<string>) {
  const isPassRule1 = computed(() => {
    const regex = /.{8,}/
    return regex.test(password.value)
  })

  const isPassRule2 = computed(() => {
    const regex = /[A-Z]/
    return regex.test(password.value)
  })

  const isPassRule3 = computed(() => {
    const regex = /\d/
    return regex.test(password.value)
  })
  return {
    isPassRule1,
    isPassRule2,
    isPassRule3
  }
}
