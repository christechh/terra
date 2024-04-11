<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { FormInput, FormLabel, FormSelect } from '../../../base-components/Form'
import FormDatepicker from '../../../base-components/Form/FormDatepicker.vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateWorkRecord from './useCreateWorkRecord'
import useUser from '../../../pages/settings/composables/useUser'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface Props {
  workRecord?: {
    id?: number
    userId: string
    startTime: string
    endTime: string
    type: string
    userName: string
    restHours: string
    description: string
  }
  idx: number
}

const { companyId } = useCompany()
const { users } = useUser(companyId.value ?? 1)
const emit = defineEmits(['close'])
const { workRecord } = defineProps<Props>()

const {
  userId,
  startTime,
  endTime,
  type,
  restHours,
  description,
  canSubmit,
  isEdit,
  submit
} = useCreateWorkRecord(workRecord)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯加班/兼職' : '加班/兼職申請' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">選擇員工 *</FormLabel>
          <FormSelect
            class="flex-1"
            type="text"
            v-model="userId"
          >
            <option
              v-for="(user, index) in users"
              :key="index"
              :value="user.id"
            >
              {{ user.name }}
            </option>
          </FormSelect>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">選擇加班歸屬日</FormLabel>
          <FormSelect class="flex-1" v-model="type">
            <option value="HOLIDAY">例假日</option>
            <option value="OFFICIALHOLIDAY">國定假日</option>
            <option value="RESTDAY">休息日</option>
            <option value="WORKDAY">工作日</option>
          </FormSelect>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">起始時間 *</FormLabel>
          <FormDatepicker class="flex-1" v-model="startTime" detail time-picker-inline />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">結束時間 *</FormLabel>
          <FormDatepicker class="flex-1" v-model="endTime" detail time-picker-inline />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">休息時間 (小時) *</FormLabel>
          <FormInput class="flex-1" type="number" min="0" step="0.1" v-model="restHours" />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">工作內容備註</FormLabel>
          <FormInput class="flex-1" type="text" v-model="description" />
        </div>
        <div class="flex justify-center">
          <Button
            class="mr-2 flex-1"
            variant="primary"
            @click="() => submit(isEdit, () => emit('close'))"
            :disabled="!canSubmit"
          >
            {{ !isEdit ? '申請' : '儲存'}}
          </Button>
        </div>
      </section>
    </Dialog.Panel>
  </Dialog>
</template>
