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
import useCreateSalaryGroup from './useCreateSalaryGroup'

interface Props {
  salaryGroup?: {
    id: number
    image_url: string
    redirect_url: string
    expiration_date: string
    sequence: number
    valid: number
  }
  idx: number
}

const emit = defineEmits(['close'])
const { salaryGroup } = defineProps<Props>()

const {
  image_url,
  redirect_url,
  expiration_date,
  sequence,
  valid,
  canSubmit,
  isEdit,
  submit
} = useCreateSalaryGroup(salaryGroup)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯廣告' : '新增廣告' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">圖片網址</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            v-model="image_url"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">點擊後導向網址</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            v-model="redirect_url"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">過期日期</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="expiration_date"
            detail
            time-picker-inline
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">排序</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            min="0"
            step="1"
            v-model="sequence"
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
