<script setup lang="ts">
import { computed, ref } from 'vue'
import Table from '../base-components/Table'
import Button from '../base-components/Button'
import Lucide from '../base-components/Lucide'
import { FormInput } from '../base-components/Form'
import CreateLeaveModal from '../components/Modals/CreateLeaveModal'

import useLeave from './settings/composables/useLeave'

const companyId = ref(1)
const { leaveList, confirmDeleteLeave } = useLeave('1')
const showCreateLeaveModal = ref(false)
const selectedLeaveIndex = ref(-1)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedLeave: any = computed(
  () => leaveList.value[selectedLeaveIndex.value] || null
)

const onCreateLeaveClick = (idx?: number) => {
  selectedLeaveIndex.value = -1
  if (idx !== undefined) {
    selectedLeaveIndex.value = idx
  }
  showCreateLeaveModal.value = true
}

const onExportLeaveClick = () => {
  console.log('onExportLeaveClick')
}

const onImportButtonClick = () => {
  console.log('onImportButtonClick')
}

const onDownloadImportExampleClick = () => {
  console.log('onDownloadImportExampleClick')
}

const onDeleteLeaveButtonClick = (id: number) => {
  confirmDeleteLeave(companyId.value, id)
}
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div
        class="intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"
      >
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <FormInput
              type="text"
              class="!box w-56 pr-10"
              placeholder="Search..."
            />
            <Lucide
              icon="Search"
              class="absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 grid grid-cols-12 gap-6">
      <div
        class="intro-y col-span-12 flex flex-wrap items-center sm:flex-nowrap"
      >
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <Button
              variant="primary"
              type="button"
              class="m-3"
              @click="onCreateLeaveClick()"
            >
              <Lucide icon="Plus" class="mr-1 h-4 w-4" />
              新增假勤
            </Button>
          </div>
        </div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <Button
              variant="primary"
              type="button"
              class="m-3"
              disabled
              @click="onImportButtonClick"
            >
              <Lucide icon="Upload" class="mr-1 h-4 w-4" />
              匯入假勤
            </Button>
          </div>
        </div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <Button
              variant="primary"
              type="button"
              class="m-3"
              disabled
              @click="onExportLeaveClick"
            >
              <Lucide icon="Download" class="mr-1 h-4 w-4" />
              匯出假勤
            </Button>
          </div>
        </div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <Button
              variant="danger"
              type="button"
              class="m-3"
              disabled
              @click="onDownloadImportExampleClick"
            >
              <Lucide icon="Download" class="mr-1 h-4 w-4" />
              假勤匯入範例
            </Button>
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <Table class="-mt-2 border-separate border-spacing-y-[10px]">
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="whitespace-nowrap border-b-0">假勤名稱</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">請假上限</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">
                薪資給新標準
              </Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">說明</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">動作</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            <Table.Tr
              v-for="(leave, index) in leaveList"
              :key="index"
              class="intro-x"
            >
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ leave.name }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ leave.limitHours }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ leave.salaryStandard }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ leave.description }}
                </div>
              </Table.Td>
              <Table.Td
                class="relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"
              >
                <div class="flex items-center justify-center">
                  <Button
                    variant="primary"
                    type="button"
                    class="m-3 w-20"
                    @click="onCreateLeaveClick(index)"
                  >
                    <Lucide icon="Edit" class="mr-1 h-4 w-4" />
                    修改
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    class="m-3 w-20"
                    @click="onDeleteLeaveButtonClick(leave.id)"
                  >
                    <Lucide icon="Trash" class="mr-1 h-4 w-4" />
                    刪除
                  </Button>
                </div>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <!-- <div
      class="intro-y col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap"
    >
      <Pagination class="w-full sm:mr-auto sm:w-auto">
        <Pagination.Link>
          <Lucide icon="ChevronsLeft" class="h-4 w-4" />
        </Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronLeft" class="h-4 w-4" />
        </Pagination.Link>
        <Pagination.Link>...</Pagination.Link>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Link active>2</Pagination.Link>
        <Pagination.Link>3</Pagination.Link>
        <Pagination.Link>...</Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronRight" class="h-4 w-4" />
        </Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronsRight" class="h-4 w-4" />
        </Pagination.Link>
      </Pagination>
      <FormSelect class="!box mt-3 w-20 sm:mt-0">
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </FormSelect>
    </div> -->
      <!-- END: Pagination -->
    </div>

    <CreateLeaveModal
      v-if="showCreateLeaveModal"
      :leave="selectedLeave"
      @close="showCreateLeaveModal = false"
      :idx="selectedLeaveIndex"
    />
  </div>
</template>
