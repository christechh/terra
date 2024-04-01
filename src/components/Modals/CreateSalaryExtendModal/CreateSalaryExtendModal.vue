<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import {
  FormInput,
  FormLabel,
  FormDatepicker
} from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateSalaryExtend from './useCreateSalaryExtend'

interface Props {
  salaryExtend?: {
    id?: number
    userId: string
    name: string
    description: string
    type: string
    amount: number
    yearMonth: string
  }
  idx: number
}

const emit = defineEmits(['close'])
const { salaryExtend } = defineProps<Props>()

const {
  userId,
  name,
  description,
  type,
  amount,
  yearMonth,
  canSubmit,
  isEdit,
  submit
} = useCreateSalaryExtend(salaryExtend)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯假勤' + (idx + 1) : '新增假勤' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">員工</FormLabel>
          <FormInput class="flex-1" type="text" v-model="userId" />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">薪資年月</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="yearMonth"
            month-picker
            auto-apply
          />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">薪資科目</FormLabel>
          <FormInput class="flex-1" type="text" v-model="name" />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">金額</FormLabel>
          <FormInput class="flex-1" type="text" v-model="amount" />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">備註</FormLabel>
          <FormInput class="flex-1" type="text" v-model="description" />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">加減項</FormLabel>
          <FormInput class="flex-1" type="text" v-model="type" />
        </div>
        <div class="flex justify-center">
          <Button
            class="mr-2 flex-1"
            variant="primary"
            @click="() => submit(isEdit, () => emit('close'))"
            :disabled="!canSubmit"
          >
            新增
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>
