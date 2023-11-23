/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Ref } from 'vue'
import { onMounted, ref, computed } from 'vue'
import axios from '../axios'

interface IUseTableParams<T> {
  url: string
  query?: any
  isFetchOnMount?: boolean
  isStack?: boolean
  perPage?: number
  listTransformer?: (item: T[]) => T[]
}

interface Response<T> {
  data?: {
    // total?: number
    // per_page?: number
    // current_page?: number
    // last_page?: number
    data?: {
      data?: T[]
    }
  }
}

export const useTable = <T = any, R extends Response<T> = Response<T>>({
  url,
  query: initQuery,
  isFetchOnMount = true,
  isStack = false,
  perPage: initPerPage = 10,
  listTransformer
}: IUseTableParams<T>) => {
  const page = ref(1)
  const lastPage = ref(-1)
  const perPage = ref(initPerPage)
  const total = ref(0)
  const list: Ref<T[]> = ref([])
  const loading = ref<boolean>(false)
  const query = ref(initQuery || {})
  const apiUrl = ref(url)
  const responseData = ref<Response<T>>()
  const isEnd = computed(() => {
    return page.value >= lastPage.value && lastPage.value !== -1
  })

  const fetch = async () => {
    try {
      loading.value = true
      const response = await axios<R>(apiUrl.value, {
        params: {
          page: page.value,
          perPage: perPage.value,
          ...query.value
        }
      })

      responseData.value = response as Response<T>
      const responseList = getList(responseData.value?.data?.data?.data || [])
      if (isStack) {
        const ids = list.value.map((item) => (item as any).value)
        const newList = [
          ...responseList.filter((item) => !ids.includes((item as any).value))
        ]
        list.value = [...list.value, ...newList]
        return
      }
      list.value = responseList
    } catch (error) {
      /* empty */
    } finally {
      loading.value = false
    }
  }
  const getList = (list: T[]) => {
    if (listTransformer) {
      return listTransformer(list)
    }

    return list
  }
  const toPage = async (val?: number) => {
    // If no next page
    if (isEnd.value && isStack) {
      return
    }
    if (val) {
      page.value = val
    }
    // Reset first
    list.value = []
    await fetch()
    return list.value
  }
  const nextPage = async () => {
    page.value += 1
    await fetch()
    return list.value
  }
  const setQuery = (queryValue: any) => {
    query.value = {
      ...query.value,
      ...queryValue
    }
  }
  const setUrl = (value: string) => {
    apiUrl.value = value
  }
  const getSortable = (
    name: string,
    sort: 'ascending' | 'descending' | null
  ) => {
    if (sort === null) {
      return ''
    }

    if (sort === 'ascending') {
      return `${name}|asc`
    }

    return `${name}|desc`
  }
  const reset = () => {
    list.value = []
    page.value = 1
    lastPage.value = -1
    perPage.value = initPerPage
    total.value = 0
    query.value = {}
  }

  onMounted(() => {
    if (isFetchOnMount) {
      fetch()
    }
  })

  return {
    list,
    page,
    perPage,
    total,
    query,
    responseData,
    isEndPage: isEnd as Ref<boolean>,
    toPage,
    nextPage,
    setQuery,
    setUrl,
    getSortable,
    reset,
    pageLoading: loading as Ref<boolean>
  }
}
