<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import dayjs from 'dayjs'
import Button from '../../../base-components/Button'
import { FormInput, FormLabel } from '../../../base-components/Form'
import FormDatepicker from '../../../base-components/Form/FormDatepicker.vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import Table from '../../../base-components/Table'
import useCalculateSalaries from './useCalculateSalaries'
import useCreateSalaryGroup from './useCreateSalaryGroup'
import { useSalaryStore } from '../../../stores/salary'

interface Props {
  companyId: number
}

interface Sort {
  key: string
  order: 'asc' | 'desc' | ''
}

interface SalaryRecord {
  id: string
  name: string
  employee_id: string
  onboard_date: string
  resignation_date: string
  salary_type: string
  plusSalary: number
  minusSalary: number
  netSalary: number
  [key: string]: any
}

// const WorkTypeMap = {
//   hourly: '時薪',
//   monthly: '月薪'
// }

const emit = defineEmits(['close'])
const props = defineProps<Props>()

const { fetchData: getCalculateSalaries, loading: calcLoading } =
  useCalculateSalaries()
const {
  createSalaryGroup,
  payloadRefs,
  canSubmit,
  loading: createSalaryGroupLoading
} = useCreateSalaryGroup()

const page = ref<'form' | 'table' | 'result'>('form')
const calcSalariesData = reactive<{ value: any[] }>({ value: [] })
const sortReactive = reactive<{ value: Sort[] }>({ value: [] })

const employeeSalaries = computed(() => {
  const normalCols = new Set<string>() // 薪資結構
  const plusCols = new Set<string>() // 薪資科目加項
  const minusCols = new Set<string>() // 薪資科目減項
  const companyCols = new Set<string>() // 公司負擔

  let totalPlusSalary = 0 // 應發金額
  let totalMinusSalary = 0 // 應減金額
  let totalNetSalary = 0 // 實發金額

  const result = calcSalariesData.value
    .map(({ salaryItems, user }: any) => {
      let plusSalary = 0 // 應發金額
      let minusSalary = 0 // 應減金額
      let netSalary = 0 // 實發金額
      const columnMap = {} as any // 動態欄位Map

      salaryItems.forEach((salaryItem: any) => {
        // 動態欄位設置
        if (salaryItem.type === 'PLUS') plusCols.add(salaryItem.name)
        if (salaryItem.type === 'MINUS') minusCols.add(salaryItem.name)
        if (salaryItem.type === 'NORMAL') normalCols.add(salaryItem.name)
        if (salaryItem.type === 'COMPANY') companyCols.add(salaryItem.name)

        // 欄位金額加總
        columnMap[salaryItem.name] =
          Number(columnMap[salaryItem.name] || 0) + Number(salaryItem.amount)

        // 處理 應發、應減、實發
        switch (salaryItem.type) {
          case 'NORMAL':
          case 'PLUS':
            plusSalary += Number(salaryItem.amount)
            netSalary += Number(salaryItem.amount)
            // total
            totalPlusSalary += Number(salaryItem.amount)
            totalNetSalary += Number(salaryItem.amount)
            break
          case 'MINUS':
            minusSalary += Number(salaryItem.amount)
            netSalary -= Number(salaryItem.amount)
            // total
            totalMinusSalary += Number(salaryItem.amount)
            totalNetSalary -= Number(salaryItem.amount)
            break
          case 'COMPANY':
            break
        }
      })

      return {
        id: user?.id,
        name: user?.name,
        employee_id: user?.employee_id,
        onboard_date: user?.onboard_date,
        resignation_date: user?.resignation_date,
        salary_type: user?.salary_type,
        plusSalary,
        minusSalary,
        netSalary,
        ...columnMap
      } as SalaryRecord
    })
    .sort((a: any, b: any) => {
      // 根據 sortKeys 數組中的索引來遍歷，索引越小的 sortKeys 優先級越高。對於每個排序鍵，我們根據 order 屬性決定升序還是降序排序
      for (let i = 0; i < sortReactive.value.length; i++) {
        const sortKey = sortReactive.value[i]
        // 如果缺少鍵則視為無窮小的話，在升序排序中，缺少鍵的物件應該排在前面，而在降序排序中，缺少鍵的物件應該排在後面
        const keyA = a?.[sortKey.key] ?? 0
        const keyB = b?.[sortKey.key] ?? 0

        if (keyA < keyB) {
          return sortKey.order === 'asc' ? -1 : 1
        }
        if (keyA > keyB) {
          return sortKey.order === 'asc' ? 1 : -1
        }
      }

      return 0 // 如果所有排序鍵都相等，保持原有順序
    })
  return {
    normalCols,
    plusCols,
    minusCols,
    companyCols,
    result,
    totalPlusSalary,
    totalMinusSalary,
    totalNetSalary
  }
})

const canCalcSubmit = computed(() => {
  return (
    payloadRefs.companyId.value &&
    payloadRefs.yearMonth.value &&
    payloadRefs.startDate.value &&
    payloadRefs.endDate.value &&
    payloadRefs.paymentDate.value
  )
})

const onFormSubmitClick = async () => {
  const payload = {
    companyId: payloadRefs.companyId.value,
    yearMonth: payloadRefs.yearMonth.value,
    startDate: payloadRefs.startDate.value,
    endDate: payloadRefs.endDate.value
  }
  await getCalculateSalaries(payload, (result: any) => {
    calcSalariesData.value = result
    page.value = 'table'
  })
}

const onPrevButtonClick = (pageValue: 'form' | 'result' | 'table') => {
  page.value = pageValue
}

const onPreviewResultClick = () => {
  page.value = 'result'
  payloadRefs.salaries.value = calcSalariesData.value
}

const onCreateSalaryGroupButtonClick = () => {
  if (!canSubmit) return
  createSalaryGroup(() => {
    emit('close')
    useSalaryStore().fetchSalaryGroups({
      companyId: Number(payloadRefs.companyId.value ?? 1),
      page: 0
    })
  })
}

const onSortEvent = ({
  key,
  order
}: {
  key: string
  order: 'asc' | 'desc' | ''
}) => {
  console.log(key, order)
  const existSortKeyIndex = sortReactive.value.findIndex(
    (item) => item.key === key
  )
  if (existSortKeyIndex !== -1) {
    if (order === '') {
      sortReactive.value.splice(existSortKeyIndex, 1)
    } else {
      sortReactive.value[existSortKeyIndex].order = order
    }
  } else {
    sortReactive.value.push({
      key,
      order
    })
  }
}

onMounted(() => {
  payloadRefs.companyId.value = props.companyId
})
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel
      class="p-4"
      :class="[
        {
          'md:w-[400px]': ['form', 'result'].includes(page),
          'max-w-[1200px] md:w-[80vw]': page === 'table'
        }
      ]"
    >
      <div class="relative mb-5 text-center text-xl">
        建立廣告
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section v-show="page === 'form'">
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">薪資發放名稱</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            v-model="payloadRefs.name.value"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">薪資年月</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="payloadRefs.yearMonth.value"
            month-picker
            auto-apply
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">起始日</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="payloadRefs.startDate.value"
            auto-apply
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">結束日</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="payloadRefs.endDate.value"
            auto-apply
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">發薪日</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="payloadRefs.paymentDate.value"
            auto-apply
          />
        </div>
        <div class="flex justify-center">
          <Button
            class="mr-2 flex-1"
            variant="outline-primary"
            @click="() => emit('close')"
          >
            關閉
          </Button>
          <Button
            class="flex-1"
            variant="primary"
            @click="onFormSubmitClick"
            :loading="calcLoading"
            :disabled="calcLoading || !canCalcSubmit"
          >
            下一步
          </Button>
        </div>
      </section>
      <section v-show="page === 'table'">
        <!--Empty Content-->
        <div
          class="flex justify-center p-10"
          v-if="calcSalariesData.value.length === 0"
        >
          查無資料
        </div>
        <template v-else>
          <div class="max-h-[70vh] overflow-x-auto overflow-y-auto">
            <Table bordered @sort="onSortEvent">
              <Table.Thead>
                <Table.Tr>
                  <!--固定欄位-->
                  <Table.Th class="whitespace-nowrap" colspan="5"></Table.Th>
                  <Table.Th
                    v-if="employeeSalaries.normalCols.size > 0"
                    class="whitespace-nowrap"
                    :colspan="employeeSalaries.normalCols.size"
                  >
                    薪資結構
                  </Table.Th>
                  <Table.Th
                    v-if="employeeSalaries.plusCols.size > 0"
                    class="whitespace-nowrap"
                    :colspan="employeeSalaries.plusCols.size"
                  >
                    薪資科目加項
                  </Table.Th>
                  <Table.Th
                    v-if="employeeSalaries.minusCols.size > 0"
                    class="whitespace-nowrap"
                    :colspan="employeeSalaries.minusCols.size"
                  >
                    薪資科目減項
                  </Table.Th>
                  <!--固定3個欄位 應發、應減、實發-->
                  <Table.Th class="whitespace-nowrap" colspan="3"></Table.Th>
                  <Table.Th
                    v-if="employeeSalaries.companyCols.size > 0"
                    class="whitespace-nowrap"
                    :colspan="employeeSalaries.companyCols.size"
                  >
                    公司負擔
                  </Table.Th>
                </Table.Tr>
                <Table.Tr>
                  <Table.Th class="whitespace-nowrap">員工編號</Table.Th>
                  <Table.Th class="whitespace-nowrap">姓名</Table.Th>
                  <Table.Th class="whitespace-nowrap">到職日</Table.Th>
                  <Table.Th class="whitespace-nowrap">離職日</Table.Th>
                  <Table.Th class="whitespace-nowrap">計薪方式</Table.Th>
                  <Table.Th
                    class="whitespace-nowrap"
                    v-for="normalCol in employeeSalaries.normalCols.values()"
                    :key="`${normalCol}`"
                    :sortableKey="normalCol"
                  >
                    {{ normalCol }}
                  </Table.Th>
                  <Table.Th
                    class="whitespace-nowrap"
                    v-for="plusCol in employeeSalaries.plusCols.values()"
                    :key="`${plusCol}`"
                    :sortableKey="plusCol"
                  >
                    {{ plusCol }}
                  </Table.Th>
                  <Table.Th
                    class="whitespace-nowrap"
                    v-for="minusCol in employeeSalaries.minusCols.values()"
                    :key="`${minusCol}`"
                    :sortableKey="minusCol"
                  >
                    {{ minusCol }}
                  </Table.Th>
                  <Table.Th class="whitespace-nowrap" sortableKey="plusSalary"
                    >應發金額</Table.Th
                  >
                  <Table.Th class="whitespace-nowrap" sortableKey="minusSalary"
                    >應減金額</Table.Th
                  >
                  <Table.Th class="whitespace-nowrap" sortableKey="netSalary"
                    >實發金額</Table.Th
                  >
                  <Table.Th
                    class="whitespace-nowrap"
                    v-for="companyCol in employeeSalaries.companyCols.values()"
                    :key="`${companyCol}`"
                    :sortableKey="companyCol"
                  >
                    {{ companyCol }}
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr
                  v-for="employeeSalary in employeeSalaries.result"
                  :key="`employSalary_${employeeSalary.id}`"
                >
                  <Table.Td class="whitespace-nowrap">
                    {{ employeeSalary['employee_id'] }}
                  </Table.Td>
                  <Table.Td class="whitespace-nowrap">
                    {{ employeeSalary['name'] }}
                  </Table.Td>
                  <Table.Td class="whitespace-nowrap">
                    {{
                      employeeSalary['onboard_date']
                        ? dayjs(employeeSalary['onboard_date']).format(
                            'YYYY-MM-DD'
                          )
                        : '--'
                    }}
                  </Table.Td>
                  <Table.Td class="whitespace-nowrap">
                    {{
                      employeeSalary['resignation_date']
                        ? dayjs(employeeSalary['resignation_date']).format(
                            'YYYY-MM-DD'
                          )
                        : '--'
                    }}
                  </Table.Td>
                  <Table.Td class="whitespace-nowrap">
                    {{ employeeSalary['salary_type'] }}
                  </Table.Td>
                  <Table.Td
                    class="whitespace-nowrap"
                    v-for="normalCol in employeeSalaries.normalCols.values()"
                    :key="`${normalCol}`"
                  >
                    {{ employeeSalary[normalCol] ?? '--' }}
                  </Table.Td>
                  <Table.Td
                    class="whitespace-nowrap"
                    v-for="plusCol in employeeSalaries.plusCols.values()"
                    :key="`${plusCol}`"
                  >
                    {{ employeeSalary[plusCol] ?? '--' }}
                  </Table.Td>
                  <Table.Td
                    class="whitespace-nowrap"
                    v-for="minusCol in employeeSalaries.minusCols.values()"
                    :key="`${minusCol}`"
                  >
                    {{ employeeSalary[minusCol] ?? '--' }}
                  </Table.Td>
                  <Table.Td class="whitespace-nowrap">
                    {{ employeeSalary['plusSalary'] ?? '--' }}
                  </Table.Td>
                  <Table.Td class="whitespace-nowrap">
                    {{ employeeSalary['minusSalary'] ?? '--' }}
                  </Table.Td>
                  <Table.Td class="whitespace-nowrap">
                    {{ employeeSalary['netSalary'] ?? '--' }}
                  </Table.Td>
                  <Table.Td
                    class="whitespace-nowrap"
                    v-for="companyCol in employeeSalaries.companyCols.values()"
                    :key="`${companyCol}`"
                  >
                    {{ employeeSalary[companyCol] ?? '--' }}
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </div>
          <div class="border p-5 text-right">
            Total Rows: {{ employeeSalaries.result.length }}
          </div>
        </template>
        <div class="mt-5 flex justify-center">
          <Button
            variant="outline-primary"
            type="button"
            class="mr-2"
            @click="() => onPrevButtonClick('form')"
          >
            上一步
          </Button>
          <Button
            variant="primary"
            type="button"
            :disabled="calcSalariesData.value.length === 0"
            @click="onPreviewResultClick"
          >
            計算結果
          </Button>
        </div>
      </section>
      <section v-show="page === 'result'">
        <div class="flex flex-col gap-3 p-5 text-base">
          <div class="flex items-center justify-between">
            <span>薪資年月：</span>
            <span>{{ payloadRefs.yearMonth.value }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>薪資發放名稱：</span>
            <span>{{ payloadRefs.name.value }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>計算區間：</span>
            <span
              >{{ payloadRefs.startDate.value }} ~
              {{ payloadRefs.endDate.value }}</span
            >
          </div>
          <div class="flex items-center justify-between">
            <span>發薪人數：</span>
            <span>{{ calcSalariesData.value.length }}人</span>
          </div>
          <div class="flex items-center justify-between">
            <span>應發總額：</span>
            <span>{{ employeeSalaries.totalPlusSalary.toLocaleString() }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>應減總額：</span>
            <span>{{
              employeeSalaries.totalMinusSalary.toLocaleString()
            }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>實發總額：</span>
            <span>{{ employeeSalaries.totalNetSalary.toLocaleString() }}</span>
          </div>
        </div>
        <div class="mt-5 flex justify-center">
          <Button
            variant="outline-primary"
            type="button"
            class="flex-1 mr-2"
            @click="() => onPrevButtonClick('table')"
          >
            上一步
          </Button>
          <Button
            variant="primary"
            type="button"
            class="flex-1"
            :disabled="!canSubmit || createSalaryGroupLoading"
            :loading="createSalaryGroupLoading"
            @click="onCreateSalaryGroupButtonClick"
          >
            確認發放
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>
