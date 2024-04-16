<script lang="ts" setup>
import { computed } from 'vue'
import Button from '../../../base-components/Button'
import { FormLabel, FormSelect, FormInput } from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateMember from './useCreateMember'

interface Props {
  subAccount?: {
    review_status: string
    amount: number
  }
  idx: number
}

const emit = defineEmits(['close'])
const { subAccount } = defineProps<Props>()

const { review_status, amount, submit } = useCreateMember(subAccount)

const component = computed(() => {
  // return isEdit.value ? Slideover : Dialog
  return Dialog
})

const childComponent = computed(() => {
  // return isEdit.value ? Slideover.Panel : Dialog.Panel
  return Dialog.Panel
})
</script>

<template>
  <component :is="component" :open="true" size="md">
    <component :is="childComponent" class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        編輯資料
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>

      <div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">審核狀態 *</FormLabel>
          <FormSelect class="mr-3 flex-1" v-model="review_status">
            <option value="1">審核中</option>
            <option value="2">通過</option>
            <option value="3">不通過</option>
          </FormSelect>
          <Button
            class="flex-1"
            variant="primary"
            @click="() => submit('update', () => emit('close'))"
            >修改狀態</Button
          >
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">減少手環數 *</FormLabel>
          <FormInput
            v-model="amount"
            type="number"
            class="mr-3 flex-1"
            placeholder="數量"
          />
          <Button
            class="flex-1"
            variant="primary"
            @click="() => submit('update_wallet', () => emit('close'))"
            >更新數量</Button
          >
        </div>
      </div>
    </component>
  </component>
</template>
