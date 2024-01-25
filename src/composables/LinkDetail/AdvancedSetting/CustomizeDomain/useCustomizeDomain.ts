import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from '../../../../axios'
import { useEnterpointsConfigStore } from '../../../../stores/enterpoint/config'

export default function useCustomizeDomain() {
  const store = useEnterpointsConfigStore()
  const isValid = ref(false)
  const wrongInput = ref(false)
  const doValid = ref(false)
  const preview = ref<{ name: string; data: string }[]>([])
  const route = useRoute()
  const token = route.query.token as string
  onMounted(async () => {
    await store.fetchConfig(token)
    preview.value.push({
      name: '',
      data: store.data.page_og_image as string
    })
  })
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
  const page_title = computed({
    get() {
      return store.data.page_title || ''
    },
    set(value: string) {
      store.updateConfig({
        key: 'page_title',
        value
      })
    }
  })

  const page_desc = computed({
    get() {
      return store.data.page_desc || ''
    },
    set(value: string) {
      store.updateConfig({
        key: 'page_desc',
        value
      })
    }
  })

  const page_keywords = computed({
    get() {
      return store.data.page_keywords || ''
    },
    set(value: string) {
      store.updateConfig({
        key: 'page_keywords',
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

  const validDomain = async () => {
    wrongInput.value = false
    doValid.value = false
    const rex =
      /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
    if (
      custom_domain.value.split('.').length < 3 ||
      !rex.test(custom_domain.value)
    ) {
      return (wrongInput.value = true)
    }
    const res = await axios.post('/dashboard/enterpoint/check-domain-cname', {
      domain: custom_domain.value
    })
    isValid.value = res.data.data.valid
    doValid.value = true
  }

  const saveCustomDomain = async () => {
    const payload = {
      id: store.data.id,
      is_valid: true,
      custom_domain: custom_domain.value,
      page_title: page_title.value,
      page_desc: page_desc.value,
      page_keywords: page_keywords.value,
      page_og_image: preview.value[0]?.data
    }
    console.log(payload)
    const res = await axios.post('/dashboard/enterpoint', payload)
    store.data.custom_domain = res.data.data.domain
  }

  return {
    custom_domain,
    page_title,
    page_desc,
    page_keywords,
    preview,
    hostName,
    isValid,
    wrongInput,
    doValid,
    validDomain,
    saveCustomDomain
  }
}
