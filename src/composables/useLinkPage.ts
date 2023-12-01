import { computed } from 'vue'
import { useRoute } from 'vue-router'

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

  return {
    token,
    routeTitle,
    linkDetailBaseSetting
  }
}
