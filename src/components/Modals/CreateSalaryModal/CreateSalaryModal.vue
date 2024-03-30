<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import Button from '../../../base-components/Button'
import { FormInput, FormLabel } from '../../../base-components/Form'
import FormDatepicker from '../../../base-components/Form/FormDatepicker.vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import Table from '../../../base-components/Table'
import useCreateSalary from './useCreateSalary'
import useCalculateSalaries from './useCalculateSalaries'

interface Props {
  companyId: number
}

const emit = defineEmits(['close'])
const props = defineProps<Props>()

const tableColumns = {
  code: '員工編號',
  name: '姓名',
  arrivalDate: '到職日',
  leaveDate: '離職日',
  type: '計薪方式',
  基本薪資: '基本薪資',
  伙食費: '伙食費',
  全勤獎金: '全勤獎金',
  約定休息日: '約定休息日',
  約定休假日: '約定休假日',
  其他津貼: '其他津貼',
  職務津貼: '職務津貼',
  約定平日延長: '約定平日延長',
  勞保費: '勞保費',
  健保費: '健保費',
  新制退休金: '新制退休金',
  應發金額: '應發金額',
  應減金額: '應減金額',
  實發金額: '實發金額',
  '勞保費(公)': '勞保費(公)',
  '健保費(公)': '健保費(公)',
  '新制退休金(公)': '新制退休金(公)'
}

const showTable = ref(true)

const { yearMonth, startDate, endDate, paymentDate, title } = useCreateSalary(
  props.companyId
)
const { fetchCalculateSalaries, calculateSalaries } = useCalculateSalaries()

const employeeSalaries = computed<
  Array<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }>
>(() => {
  const result = calculateSalaries.map((item) => {
    // 應發金額
    let plusSalary = 0
    // 應減金額
    let minusSalary = 0
    // 實發金額
    let total = 0
    // 動態欄位Map
    const columnMap = new Map<
      string,
      { title: string; type: string; amount: number }
    >()
    item.salaryItems.forEach((salaryItem) => {
      const existData = columnMap.get(salaryItem.title)
      if (existData) {
        columnMap.set(salaryItem.title, {
          title: salaryItem.title,
          type: salaryItem.type,
          amount: Number(existData.amount) + Number(salaryItem.amount)
        })
      } else {
        columnMap.set(salaryItem.title, {
          title: salaryItem.title,
          type: salaryItem.type,
          amount: Number(salaryItem.amount)
        })
      }
      switch (salaryItem.type) {
        case 'normal':
        case 'plus':
          plusSalary = plusSalary + salaryItem.amount
          total = total + salaryItem.amount
          break
        case 'minus':
          minusSalary = minusSalary + salaryItem.amount
          total = total - salaryItem.amount
          break
        case 'company':
          break
      }
    })

    return {
      id: item.employee.id,
      name: item.employee.name,
      code: item.employee.code,
      arrivalDate: item.employee.arrivalDate,
      leaveDate: item.employee.leaveDate,
      type: item.employee.type,
      minusSalary,
      columnMap
    }
  })
  return result
})

const tableColumnEntries = computed(() => Object.entries(tableColumns))
const tableColumnKeys = computed(() => Object.keys(tableColumns))

const onSubmit = async () => {
  const payload = {
    companyId: props.companyId,
    yearMonth: yearMonth.value,
    startDate: startDate.value,
    endDate: endDate.value
  }
  await fetchCalculateSalaries(payload)
  showTable.value = true
  // submit(() => {
  //   emit('close')
  // })
}

onMounted(() => {
  console.log('Test computed', employeeSalaries)
})
</script>

<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel
      class="p-4"
      :class="[
        {
          'max-w-[1200px] md:w-[80vw]': showTable,
          'md:w-[400px]': !showTable
        }
      ]"
    >
      <div class="relative mb-5 text-center text-xl">
        薪資計算
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section v-show="!showTable">
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">薪資發放名稱</FormLabel>
          <FormInput class="flex-1" type="text" v-model="title" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">薪資年月</FormLabel>
          <FormDatepicker v-model="yearMonth" :month-picker="true" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">起始日</FormLabel>
          <FormDatepicker v-model="startDate" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">結束日</FormLabel>
          <FormDatepicker v-model="endDate" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">發薪日</FormLabel>
          <FormDatepicker v-model="paymentDate" />
        </div>
        <div class="flex justify-center">
          <Button class="flex-1" variant="primary" @click="onSubmit">
            送出
          </Button>
        </div>
      </section>
      <div class="overflow-x-auto" v-show="showTable">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th
                class="whitespace-nowrap"
                v-for="([key, value], index) in tableColumnEntries"
                :key="`${key}_${index}`"
              >
                {{ value }}
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr
              v-for="employeeSalary in employeeSalaries"
              :key="`employSalary_${employeeSalary.id}`"
            >
              <Table.Td
                class="whitespace-nowrap"
                v-for="columnKey in tableColumnKeys"
                :key="`employSalary_${employeeSalary.id}_${columnKey}`"
              >
                <div v-if="employeeSalary.hasOwnProperty(columnKey)">
                  {{ employeeSalary[columnKey] }}
                </div>
                <div v-else-if="employeeSalary.columnMap.has(columnKey)">
                  {{ employeeSalary.columnMap.get(columnKey)?.amount }}
                </div>
                <div v-else>-</div>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
