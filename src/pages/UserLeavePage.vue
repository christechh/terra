<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Table from '../base-components/Table'
import Button from '../base-components/Button'
import Lucide from '../base-components/Lucide'
import { FormInput } from '../base-components/Form'
import CreateUserLeaveModal from '../components/Modals/CreateUserLeaveModal'
import dayjs from 'dayjs'
import useUserLeave from './settings/composables/useUserLeave'
import useCompany from '../../src/pages/settings/composables/useCompany'

const { companyId } = useCompany()
const { userLeaveList, confirmDeleteUserLeave } = useUserLeave(companyId.value)
const showCreateUserLeaveModal = ref(false)
const selectedUserLeaveIndex = ref(-1)

watch(companyId, () => {
  useUserLeave(companyId.value)
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedUserLeave: any = computed(
  () => userLeaveList.value[selectedUserLeaveIndex.value] || null
)

const onCreateUserLeaveClick = (idx?: number) => {
  selectedUserLeaveIndex.value = -1
  if (idx !== undefined) {
    selectedUserLeaveIndex.value = idx
  }
  showCreateUserLeaveModal.value = true
}

const onExportUserLeaveClick = () => {
  console.log('onExportUserLeaveClick')
}

const onImportButtonClick = () => {
  console.log('onImportButtonClick')
}

const onDownloadImportExampleClick = () => {
  console.log('onDownloadImportExampleClick')
}

const onDeleteUserLeaveButtonClick = (id: number) => {
  confirmDeleteUserLeave(companyId.value, id)
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
              @click="onCreateUserLeaveClick()"
            >
              <Lucide icon="Plus" class="mr-1 h-4 w-4" />
              請假申請
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
              匯入請假
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
              @click="onExportUserLeaveClick"
            >
              <Lucide icon="Download" class="mr-1 h-4 w-4" />
              匯出請假
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
              請假匯入範例
            </Button>
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <Table class="-mt-2 border-separate border-spacing-y-[10px]">
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="whitespace-nowrap border-b-0">員工編號</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">姓名</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">
                假勤項目
              </Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">開始時間</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">結束時間</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">
                休息時間(小時)
              </Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">
                時數（小時）
              </Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">
                原因備註
              </Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">動作</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            <Table.Tr
              v-for="(userLeave, index) in userLeaveList"
              :key="index"
              class="intro-x"
            >
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ userLeave.employeeId }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ userLeave.userName }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ userLeave.leaveName }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ userLeave.startTime }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ userLeave.endTime }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ userLeave.restHours }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{
                    dayjs(userLeave.endTime).diff(
                      dayjs(userLeave.startTime),
                      'hour'
                    ) - userLeave.restHours
                  }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ userLeave.description }}
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
                    @click="onCreateUserLeaveClick(index)"
                  >
                    <Lucide icon="Edit" class="mr-1 h-4 w-4" />
                    修改
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    class="m-3 w-20"
                    @click="onDeleteUserLeaveButtonClick(userLeave.id)"
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

    <CreateUserLeaveModal
      v-if="showCreateUserLeaveModal"
      :userLeave="selectedUserLeave"
      @close="showCreateUserLeaveModal = false"
      :idx="selectedUserLeaveIndex"
    />
  </div>
</template>
