<script setup lang="ts">
import { ref, watch } from 'vue'
import Pagination from '../../base-components/Pagination'
import Lucide from '../../base-components/Lucide'

interface Props {
  pageType: string
}
interface PageEntity {
  type: string
  page: number
  active: boolean
}
const { pageType } = defineProps<Props>()

const pageList = ref<PageEntity[]>([])

switch (pageType) {
  case 'course':
    break
}
const setPageData = (page: number) => {
  switch (pageType) {
    case 'course':
      break
  }
}

// 設定分頁
const setPageList = (limit: number, page: number, total: number) => {
  if (total === 0) {
    return []
  }
  const totalPages = Math.ceil(total / limit)
  const data = []
  const range = 2
  if (page > 1) {
    data.push({ type: 'first', page: 1, active: false })
    data.push({ type: 'before', page: page - 1, active: false })
  }
  let unsortNums = []
  for (let i = page - 1; i >= 1; i--) {
    if (i <= 0) {
      continue
    }
    if (i < page - range) {
      continue
    }
    unsortNums.push(i)
  }
  if (unsortNums.length > 0) {
    unsortNums.sort((a, b) => a - b)
    for (let val of unsortNums) {
      data.push({ type: 'numbers', page: val, active: false })
    }
  }

  data.push({ type: 'numbers', page: page, active: true })
  unsortNums = []
  for (let i = page + 1; i <= totalPages; i++) {
    if (i > totalPages) {
      continue
    }
    if (i > page + range) {
      continue
    }
    unsortNums.push(i)
  }
  if (unsortNums.length > 0) {
    unsortNums.sort((a, b) => a - b)
    for (let val of unsortNums) {
      data.push({ type: 'numbers', page: val, active: false })
    }
  }
  if (page < totalPages) {
    data.push({ type: 'next', page: page + 1, active: false })
    data.push({ type: 'last', page: totalPages, active: false })
  }

  return data
}
</script>

<template>
  <Pagination class="w-full sm:mr-auto sm:w-auto">
    <template v-for="(row, key) in pageList" :key="key">
      <Pagination.Link
        v-if="row.type === 'first'"
        @click="
          () => {
            setPageData(row.page)
          }
        "
      >
        <Lucide icon="ChevronsLeft" class="h-4 w-4" />
      </Pagination.Link>
      <Pagination.Link
        v-if="row.type === 'before'"
        @click="
          () => {
            setPageData(row.page)
          }
        "
      >
        <Lucide icon="ChevronLeft" class="h-4 w-4" />
      </Pagination.Link>
      <Pagination.Link
        v-if="row.type === 'numbers' && row.active === false"
        @click="
          () => {
            setPageData(row.page)
          }
        "
      >
        {{ row.page }}
      </Pagination.Link>
      <Pagination.Link
        active
        v-if="row.type === 'numbers' && row.active === true"
      >
        {{ row.page }}
      </Pagination.Link>
      <Pagination.Link
        v-if="row.type === 'next'"
        @click="
          () => {
            setPageData(row.page)
          }
        "
      >
        <Lucide icon="ChevronRight" class="h-4 w-4" />
      </Pagination.Link>
      <Pagination.Link
        v-if="row.type === 'last'"
        @click="
          () => {
            setPageData(row.page)
          }
        "
      >
        <Lucide icon="ChevronsRight" class="h-4 w-4" />
      </Pagination.Link>
    </template>
  </Pagination>
</template>
