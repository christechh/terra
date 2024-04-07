<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { FormInput, FormLabel, FormSelect } from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateLeave from './useCreateLeave'

interface Props {
  leave?: {
    id?: number
    name: string
    limitHours: string
    salaryStandard: string
    description: string
  }
  idx: number
}

const emit = defineEmits(['close'])
const { leave } = defineProps<Props>()

const {
  name,
  limitHours,
  salaryStandard,
  description,
  canSubmit,
  isEdit,
  submit
} = useCreateLeave(leave)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯假勤' : '新增假勤' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">假勤名稱 *</FormLabel>
          <FormInput class="flex-1" type="text" v-model="name" />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">請假上限 (小時) *</FormLabel>
          <FormInput class="flex-1" type="number" v-model="limitHours" />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">薪資給薪標準</FormLabel>
          <FormSelect class="flex-1" v-model="salaryStandard">
            <option value="ALL">全薪</option>
            <option value="HALF">半薪</option>
            <option value="NONE">不支薪</option>
            <option value="OTHER">其他</option>
          </FormSelect>
        </div>
 
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">說明</FormLabel>
          <FormInput class="flex-1" type="text" v-model="description" />
        </div>
        <div class="flex justify-center">
          <Button
            class="mr-2 flex-1"
            variant="primary"
            @click="() => submit(isEdit, () => emit('close'))"
            :disabled="!canSubmit"
          >
            {{ !isEdit ? '新增' : '儲存' }}
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>
