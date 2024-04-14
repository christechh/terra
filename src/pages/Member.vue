<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Button from '../base-components/Button'
// import Pagination from '../base-components/Pagination'
// FormSelect
import { FormInput } from '../base-components/Form'
import Lucide from '../base-components/Lucide'
import Table from '../base-components/Table'
import CreateMemberModal from '../components/Modals/CreateMemberModal'
import useMember from './settings/composables/useMember'
import useCompany from './settings/composables/useCompany'

const { companyId } = useCompany()
const { member, confirmDeleteMember } = useMember(companyId.value ?? 1)

const showCreateMemberModal = ref(false)
const selectedMemberIndex = ref(-1)

watch(companyId, () => {
  useMember(companyId.value ?? 1)
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedMember: any = computed(
  () => member.value[selectedMemberIndex.value] || null
)

const createOrEdit = (idx?: number) => {
  selectedMemberIndex.value = -1
  if (idx !== undefined) {
    selectedMemberIndex.value = idx
  }
  showCreateMemberModal.value = true
}

const onDeleteMemberButtonClick = (id: number) =>
  confirmDeleteMember(companyId.value ?? 1, id)
</script>

<template>
  <div class="mt-5 grid grid-cols-12 gap-6">
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
          <Button
            variant="primary"
            type="button"
            class="m-3"
            @click="() => createOrEdit()"
          >
            <Lucide icon="Plus" class="mr-1 h-4 w-4" />
            新增會員
          </Button>
        </div>
      </div>
    </div>
    <!-- BEGIN: Data List -->
    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
      <Table class="-mt-2 border-separate border-spacing-y-[10px]">
        <Table.Thead>
          <Table.Tr>
            <Table.Th class="whitespace-nowrap border-b-0">註冊次數</Table.Th>
            <Table.Th class="whitespace-nowrap border-b-0">手機</Table.Th>
            <Table.Th class="whitespace-nowrap border-b-0">生日</Table.Th>
            <Table.Th class="whitespace-nowrap border-b-0">姓名</Table.Th>
            <Table.Th class="whitespace-nowrap border-b-0">性別</Table.Th>
            <Table.Th class="whitespace-nowrap border-b-0">職業</Table.Th>
            <Table.Th class="whitespace-nowrap border-b-0">動作</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          <Table.Tr
            v-for="(item, index) in member"
            :key="index"
            class="intro-x"
          >
            <Table.Td
              class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
            >
              <div class="font-medium">
                {{ item.regist_time }}
              </div>
            </Table.Td>
            <Table.Td
              class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
            >
              <div class="font-medium">
                {{ item.mobile }}
              </div>
            </Table.Td>
            <Table.Td
              class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
            >
              <div class="font-medium">
                {{ item.birth }}
              </div>
            </Table.Td>
            <Table.Td
              class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
            >
              <div class="font-medium">
                {{ item.name }}
              </div>
            </Table.Td>
            <Table.Td
              class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
            >
              <div class="font-medium">
                {{ item.gender === 1 ? '男' : '女' }}
              </div>
            </Table.Td>
            <Table.Td
              class="border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"
            >
              <div class="font-medium">
                {{ item.career }}
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
                  @click="createOrEdit(index)"
                >
                  <Lucide icon="Edit" class="mr-1 h-4 w-4" />
                  修改
                </Button>
                <Button
                  variant="danger"
                  type="button"
                  class="m-3 w-20"
                  @click="onDeleteMemberButtonClick(item.id)"
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
  </div>

  <CreateMemberModal
    v-if="showCreateMemberModal"
    @close="showCreateMemberModal = false"
    :subAccount="selectedMember"
    :idx="selectedMemberIndex"
  />
</template>
