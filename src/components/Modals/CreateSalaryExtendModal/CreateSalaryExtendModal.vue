<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import {
  FormInput,
  FormLabel,
  FormDatepicker,
  FormSelect
} from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateSalaryExtend from './useCreateSalaryExtend'

interface Props {
  salaryExtend?: {
    id?: number
    redeem_point: number
    price: number
    discount: number
    start_date: string
    end_date: string
    valid: number
  }
  idx: number
}

const emit = defineEmits(['close'])
const { salaryExtend } = defineProps<Props>()

const {
  redeem_point,
  price,
  discount,
  start_date,
  end_date,
  valid,
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
        {{ isEdit ? '編輯儲值方案' : '新增儲值方案' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">手環數量</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            min="0"
            step="1"
            v-model="redeem_point"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">價格</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            min="0"
            step="1"
            v-model="price"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">折扣</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            min="0"
            step="1"
            v-model="discount"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">開始日期</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="start_date"
            detail
            time-picker-inline
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">結束日期</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="end_date"
            detail
            time-picker-inline
          />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">是否有效</FormLabel>
          <FormSelect class="flex-1" type="text" v-model="valid">
            <option value="1">有效</option>
            <option value="2">無效</option>
          </FormSelect>
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
