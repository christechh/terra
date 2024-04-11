<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from '../base-components/Button'
import { FormInput } from '../base-components/Form'
import Lucide from '../base-components/Lucide'
import Table from '../base-components/Table'
import useGroupSalary from './settings/composables/useGroupSalary'
import { useRoute } from 'vue-router'
import useCompany from '../../src/pages/settings/composables/useCompany'

const { companyId } = useCompany()
const route = useRoute()
const { salaries } = useGroupSalary(companyId.value ?? 1, route.params.groupId)
const showCreateSalaryGroupModal = ref(false)
const selectedCompanyIndex = ref(-1)

watch(companyId, () => {
  useGroupSalary(companyId.value ?? 1, route.params.groupId)
})

const createOrEdit = (idx?: number) => {
  selectedCompanyIndex.value = -1
  if (idx !== undefined) {
    selectedCompanyIndex.value = idx
  }
  showCreateSalaryGroupModal.value = true
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
      ></div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <Table class="-mt-2 border-separate border-spacing-y-[10px]">
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="whitespace-nowrap border-b-0">員工編號</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">姓名</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">
                薪資發放名稱
              </Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">薪資年月</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">應發金額</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">應減金額</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">實發金額</Table.Th>
              <Table.Th class="whitespace-nowrap border-b-0">動作</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            <Table.Tr
              v-for="(item, index) in salaries[0] && salaries[0].salaries"
              :key="index"
              class="intro-x"
            >
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ item.user.employeeId }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ item.user.name }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ item.salaryGroup.name }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ item.salaryGroup.yearMonth }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ item.salaryGroup.salaryItems }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ item.salaryGroup.salaryItems }}
                </div>
              </Table.Td>
              <Table.Td
                class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
              >
                <div class="font-medium">
                  {{ item.salaryGroup.salaryItems }}
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
                    @click="createOrEdit(index)"
                    disabled
                  >
                    <Lucide icon="Eye" class="mr-1 h-4 w-4" />
                    查看
                  </Button>
                </div>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
    </div>
  </div>
</template>
