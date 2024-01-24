import { computed, ref } from 'vue'
import axios from '../../../../axios'
import { useEnterpointsConfigStore } from '../../../../stores/enterpoint/config'

export default function useCustomizeDomain() {
  const store = useEnterpointsConfigStore()
  const isValid = ref(false)
  const custom_domain = computed({
    get() {
      return store.data.custom_domain || ''
    },
    set(value: string) {
      store.updateConfig({
        key: 'custom_domain',
        value
      })
    }
  })

  const hostName = computed(() => {
    if (!custom_domain.value) return ''
    const domain = custom_domain.value
    const url = new URL(
      domain.startsWith('http') ? domain : `https://${domain}`
    )
    return url.hostname.split('.')[0]
  })

  const validDomain = () => {
    axios.post('/dashboard/enterpoint/check-domain-cname', {
      domain: custom_domain.value
    })
  }

  return {
    custom_domain,
    hostName,
    isValid,
    validDomain
  }
}
