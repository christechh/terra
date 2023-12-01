import { computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from '../axios'

export const useLinkPage = () => {
  const route = useRoute()
  const token = computed(() => {
    return route.query.token as string
  })
  const linkDetailBaseSetting = computed(() => {
    return `/dashboard/enterpoint?token=${token.value}&type=direct`
  })
  const routeTitle = computed(() => {
    return route.meta.title
  })

  const fetchConfig = async () => {
    try {
      const response = await axios.get(
        `/chat/enterpoints/config/${token.value}`
      )
      return response?.data?.data?.data
    } catch (error) {
      console.log('error', error)
    }
  }

  return {
    token,
    routeTitle,
    linkDetailBaseSetting,
    fetchConfig
  }
}
