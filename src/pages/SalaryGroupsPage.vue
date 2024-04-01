<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import Table from '../base-components/Table'
import Button from '../base-components/Button'
import Lucide from '../base-components/Lucide'
import { FormInput } from '../base-components/Form'
import CreateSalaryGroupModal from '../components/Modals/CreateSalaryGroupModal'
import ExportSalaryModal from '../components/Modals/ExportSalaryModal'

import useSalary from './settings/composables/useSalary'

const router = useRouter()

const companyId = ref(1)
const showExportSalaryModal = ref(false)
const showCreateSalaryGroupModal = ref(false)

const { salaryGroups, confirmDeleteSalaryGroup } = useSalary(1)

const onCreateSalaryGroupButtonClick = () => {
  showCreateSalaryGroupModal.value = true
}

const onOpenGroupSalariesButtonClick = (groupId: string) => {
  router.push({
    name: 'GroupSalaries',
    params: {
      groupId
    }
  })
}

const onExportSalaryButtonClick = () => {
  showExportSalaryModal.value = true
}

const onDeleteSalaryGroupButtonClick = (groupId: number) => {
  confirmDeleteSalaryGroup(companyId.value, groupId)
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

      <div
        class="intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"
      >
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <router-link to="workrecord">
              <Button variant="primary" type="button" class="m-3">
                <Lucide icon="Plus" class="mr-1 h-4 w-4" />
                加班/兼職出勤
              </Button>
            </router-link>
          </div>
        </div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <router-link to="">
              <Button variant="primary" type="button" class="m-3">
                <Lucide icon="Plus" class="mr-1 h-4 w-4" />
                薪資科別加減項
              </Button>
            </router-link>
          </div>
        </div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <router-link to="userleave">
              <Button variant="primary" type="button" class="m-3">
                <Lucide icon="Settings" class="mr-1 h-4 w-4" />
                假勤申請
              </Button>
            </router-link>
          </div>
        </div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <router-link to="leave">
              <Button variant="primary" type="button" class="m-3">
                <Lucide icon="Settings" class="mr-1 h-4 w-4" />
                假勤設定
              </Button>
            </router-link>
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
              @click="onCreateSalaryGroupButtonClick"
            >
              <Lucide icon="Plus" class="mr-1 h-4 w-4" />
              薪資計算
            </Button>
          </div>
        </div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <Button
              variant="primary"
              type="button"
              class="m-3"
              @click="onExportSalaryButtonClick"
            >
              <Lucide icon="Download" class="mr-1 h-4 w-4" />
              匯出薪資明細
            </Button>
          </div>
        </div>
        <div class="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
          <div class="relative text-slate-500">
            <Button
              variant="primary"
              type="button"
              class="m-3"
              @click="onCreateSalaryGroupButtonClick"
              disabled
            >
              <Lucide icon="Send" class="mr-1 h-4 w-4" />
              薪資單寄送
            </Button>
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <Table class="-mt-2 border-separate border-spacing-y-[10px]">
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="whitespace-nowrap border-b-0">薪資年月</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">發放名稱</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">起始日</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">結束日</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">發放人數</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">發放日期</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">狀態</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">動作</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            <Table.Tr
              v-for="(salaryGroup, index) in salaryGroups"
              :key="index"
              class="intro-x"
            >
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ salaryGroup.yearMonth }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ salaryGroup.name }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ dayjs(salaryGroup.startDate).format('YYYY-MM-DD') }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ dayjs(salaryGroup.endDate).format('YYYY-MM-DD') }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ 0 }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ dayjs(salaryGroup.paymentDate).format('YYYY-MM-DD') }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{
                    new Date() > new Date(salaryGroup.paymentDate)
                      ? '已發放'
                      : '未發放'
                  }}
                </div>
              </Table.Td>

              <Table.Td
                class="relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"
              >
                <div class="flex items-center justify-center">
                  <Button
                    variant="primary"
                    type="button"
                    class="m-3 w-24"
                    @click="onOpenGroupSalariesButtonClick(salaryGroup.id)"
                  >
                    <Lucide icon="LibraryBig" class="mr-1 h-4 w-4" />
                    薪資單
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    class="m-3 w-20"
                    @click="onDeleteSalaryGroupButtonClick(salaryGroup.id)"
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

    <CreateSalaryGroupModal
      v-if="showCreateSalaryGroupModal"
      @close="showCreateSalaryGroupModal = false"
      :companyId="companyId"
    />
    <ExportSalaryModal
      v-if="showExportSalaryModal"
      @close="showExportSalaryModal = false"
      :companyId="companyId"
      :salaryGroups="salaryGroups"
    />
  </div>
</template>
