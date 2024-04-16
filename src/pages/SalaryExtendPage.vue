<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Table from '../base-components/Table'
import Button from '../base-components/Button'
import Lucide from '../base-components/Lucide'
import { FormInput } from '../base-components/Form'
import CreateSalaryExtendModal from '../components/Modals/CreateSalaryExtendModal'

import useSalaryExtend from './settings/composables/useSalaryExtend'
import useCompany from '../../src/pages/settings/composables/useCompany'

const { companyId } = useCompany()
const { salaryExtendList, confirmDeleteSalaryExtend } = useSalaryExtend(
  companyId.value ?? 1
)
const showCreateSalaryExtendModal = ref(false)
const selectedSalaryExtendIndex = ref(-1)

watch(companyId, () => {
  useSalaryExtend(companyId.value ?? 1)
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedSalaryExtend: any = computed(
  () => salaryExtendList.value[selectedSalaryExtendIndex.value] || null
)

const onCreateSalaryExtendClick = (idx?: number) => {
  selectedSalaryExtendIndex.value = -1
  if (idx !== undefined) {
    selectedSalaryExtendIndex.value = idx
  }
  showCreateSalaryExtendModal.value = true
}

const onDeleteSalaryExtendButtonClick = (id: number) => {
  confirmDeleteSalaryExtend(companyId.value ?? 1, id)
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
              @click="onCreateSalaryExtendClick()"
            >
              <Lucide icon="Plus" class="mr-1 h-4 w-4" />
              新增儲值方案
            </Button>
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <Table class="-mt-2 border-separate border-spacing-y-[10px]">
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="whitespace-nowrap border-b-0">
                退還點數
              </Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">價錢</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">折扣</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">開始日期</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">結束日期</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">是否認證</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">創建時間</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            <Table.Tr
              v-for="(salaryExtend, index) in salaryExtendList"
              :key="index"
              class="intro-x"
            >
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ salaryExtend.redeem_point }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ salaryExtend.price }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ salaryExtend.discount }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ salaryExtend.start_date }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ salaryExtend.end_date }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ salaryExtend.valid }}
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
                    @click="onCreateSalaryExtendClick(index)"
                  >
                    <Lucide icon="Edit" class="mr-1 h-4 w-4" />
                    修改
                  </Button>
                  <Button
                    v-if="false"
                    variant="danger"
                    type="button"
                    class="m-3 w-20"
                    @click="onDeleteSalaryExtendButtonClick(salaryExtend.id)"
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

    <CreateSalaryExtendModal
      v-if="showCreateSalaryExtendModal"
      :salaryExtend="selectedSalaryExtend"
      @close="showCreateSalaryExtendModal = false"
      :idx="selectedSalaryExtendIndex"
    />
  </div>
</template>
