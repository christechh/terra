<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { FormInput, FormLabel } from '../../../base-components/Form'
import FormDatepicker from '../../../base-components/Form/FormDatepicker.vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateWorkRecord from './useCreateWorkRecord'

interface Props {
  workRecord?: {
    id?: number
    rate: number
    effective_date: string
  }
  idx: number
}

const emit = defineEmits(['close'])
const { workRecord } = defineProps<Props>()

const { rate, effective_date, canSubmit, isEdit, submit } =
  useCreateWorkRecord(workRecord)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯手環匯率' : '加班/兼職申請' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">比率</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            min="0"
            max="1"
            step="0.1"
            v-model="rate"
          />
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">有效期限</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="effective_date"
            detail
            time-picker-inline
          />
        </div>

        <div class="flex justify-center">
          <Button
            class="mr-2 flex-1"
            variant="primary"
            @click="() => submit(isEdit, () => emit('close'))"
            :disabled="!canSubmit"
          >
            {{ !isEdit ? '申請' : '儲存' }}
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>
