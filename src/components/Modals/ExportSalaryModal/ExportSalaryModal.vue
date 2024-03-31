<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../../../base-components/Button'
import { FormSelect, FormLabel } from '../../../base-components/Form'
// import FormDatepicker from '../../../base-components/Form/FormDatepicker.vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import { SalaryGroup } from '../../../stores/salary'
import useExportSalary, { ExportSalaryPayload } from './useExportSalary'

interface Props {
  companyId: number
  salaryGroups: SalaryGroup[]
}

const emit = defineEmits(['close'])
const { salaryGroups, companyId } = defineProps<Props>()
const selectGroup = ref<string>('')

const { exportSalary, loading: exportLoading } = useExportSalary()

const onSalaryGroupSelect = (value: any) => {
  console.log('select group', value)
}

const onSubmitButtonClick = () => {
  if (!selectGroup.value || !companyId) return
  const payload: ExportSalaryPayload = {
    companyId,
    salaryGroupId: selectGroup.value
  }
  exportSalary(payload, () => emit('close'))
}
</script>

<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[400px]">
      <div class="relative mb-5" :class="['text-center text-xl']">
        匯出薪資明細
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[120px]">薪資發放名稱</FormLabel>
        <FormSelect
          v-model="selectGroup"
          class="flex-1"
          @change="onSalaryGroupSelect"
        >
          <option disabled selected value="">選擇發放名稱</option>
          <option
            v-for="salaryGroup in salaryGroups"
            :key="salaryGroup.id"
            :value="salaryGroup.id"
          >
            {{ salaryGroup.name }}
          </option>
        </FormSelect>
      </div>
      <!-- <div class="mb-4 flex items-center">
        <FormLabel class="w-[120px]">勞報單模組</FormLabel>
        <FormDatepicker
          class="flex-1"
          type="text"
          :placeholder="$t('error-message35')"
          v-model="labor"
        />
      </div> -->

      <div class="flex justify-center">
        <Button
          class="flex-1"
          :disabled="!selectGroup || exportLoading"
          :loading="exportLoading"
          variant="primary"
          @click="onSubmitButtonClick"
        >
          匯出
        </Button>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
