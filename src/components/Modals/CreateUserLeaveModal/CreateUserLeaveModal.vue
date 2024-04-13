<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import Button from '../../../base-components/Button'
import { FormInput, FormLabel, FormSelect } from '../../../base-components/Form'
import FormDatepicker from '../../../base-components/Form/FormDatepicker.vue'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateUserLeave from './useCreateUserLeave'
import useUser from '../../../pages/settings/composables/useUser'
import useLeave from '../../../pages/settings/composables/useLeave'
import useCompany from '../../../../src/pages/settings/composables/useCompany'

interface Props {
  userLeave?: {
    id?: number
    userId: string
    startTime: string
    endTime: string
    leaveId: string
    userName: string
    restHours: string
    description: string
  }
  idx: number
}

const { companyId } = useCompany()
const { users } = useUser(companyId.value ?? 1)
const { leaveList } = useLeave(companyId.value ?? 1)
const emit = defineEmits(['close'])
const { userLeave } = defineProps<Props>()

const {
  userId,
  startTime,
  endTime,
  leaveId,
  restHours,
  description,
  canSubmit,
  isEdit,
  submit
} = useCreateUserLeave(userLeave)
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{ isEdit ? '編輯請假申請' : '請假申請' }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>
      <section>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">假別 *</FormLabel>
          <FormSelect class="flex-1" v-model="leaveId">
            <option
              v-for="(leave, index) in leaveList"
              :key="index"
              :value="leave.id"
            >
              {{ leave.name }}
            </option>
          </FormSelect>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">起始時間 *</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="startTime"
            detail
            time-picker-inline
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">結束時間 *</FormLabel>
          <FormDatepicker
            class="flex-1"
            v-model="endTime"
            detail
            time-picker-inline
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">休息時間 (小時) *</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            min="0"
            v-model="restHours"
            step="0.1"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">原因備註</FormLabel>
          <FormInput class="flex-1" type="text" v-model="description" />
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
