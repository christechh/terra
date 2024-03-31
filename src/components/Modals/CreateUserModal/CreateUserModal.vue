<script lang="ts" setup>
import { computed } from 'vue'
import Button from '../../../base-components/Button'
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormDatepicker,
  FormCheck
} from '../../../base-components/Form'
import { Dialog, Slideover } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateUser from './useCreateUser'
// import ContryCodePicker from '../../ContryCodePicker'
// import useUser from '../../../pages/settings/composables/useUser'

interface Props {
  subAccount?: {
    id?: number
    name: string
    email?: string
    password?: string
    employeeId: string
    workStatus: string
    onboardDate: boolean
    resignationDate?: string
    identity: string
    salaryType: string
    isEmployeeRetirementPercentage: boolean
    companyIds?: string[]
  }
  idx: number
}

// const { confirmLinkSalary } = useUser()
const emit = defineEmits(['close'])
const { subAccount } = defineProps<Props>()

const {
  email,
  name,
  password,
  employeeId,
  workStatus,
  onboardDate,
  resignationDate,
  identity,
  salaryType,
  isEmployeeRetirementPercentage,
  // companyIds,
  canSubmit,
  isEdit,
  submit
} = useCreateUser(subAccount)

const component = computed(() => {
  return isEdit.value ? Slideover : Dialog
})

const childComponet = computed(() => {
  return isEdit.value ? Slideover.Panel : Dialog.Panel
})
</script>

<template>
  <component :is="component" :open="true" size="md">
    <component :is="childComponet" class="p-4 md:w-[600px]">
      <div
        class="relative mb-5"
        :class="isEdit ? 'text-primary' : 'text-center text-xl'"
      >
        {{
          isEdit
            ? $t('user-edit-model-title') + (idx + 1)
            : $t('user-create-model-title')
        }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer text-[#939393]"
          @click="() => emit('close')"
        />
      </div>

      <div>
        <div
          class="text-gray my-4 bg-orange-300 p-2 text-center text-lg font-bold text-white"
        >
          基本資料
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">姓名</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入姓名"
            v-model="name"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">Email</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入Email"
            v-model="email"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">登入密碼</FormLabel>
          <FormInput
            class="flex-1"
            type="password"
            :placeholder="$t('error-message36')"
            v-model="password"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">員工編號 *</FormLabel>
          <FormInput
            class="flex-1"
            type="password"
            placeholder="請輸入員工編號"
            v-model="employeeId"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">在職狀態 *</FormLabel>
          <FormSelect class="flex-1" v-model="workStatus">
            <option value="在職">在職</option>
            <option value="留職停薪">留職停薪</option>
            <option value="離職">離職</option>
          </FormSelect>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">到職日期 *</FormLabel>
          <FormDatepicker
            class="flex-1"
            type="text"
            placeholder="請輸入到職日期"
            v-model="onboardDate"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">離職日期</FormLabel>
          <FormDatepicker
            class="flex-1"
            type="text"
            placeholder="請輸入離職日期"
            v-model="resignationDate"
          />
        </div>
      </div>

      <div>
        <div
          class="text-gray my-4 bg-orange-300 p-2 text-center text-lg font-bold text-white"
        >
          薪資資料
        </div>

        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">身份別 *</FormLabel>
          <FormSelect class="flex-1" v-model="identity">
            <option value="員工">員工</option>
            <option value="雇主">雇主</option>
          </FormSelect>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">計薪方式 *</FormLabel>
          <FormSelect class="flex-1" v-model="salaryType">
            <option value="月薪">月薪</option>
            <option value="時薪">時薪</option>
          </FormSelect>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">是否自提</FormLabel>

          <FormCheck>
            <FormCheck.Input
              id="isEmployeeRetirementPercentage-checkbox"
              type="checkbox"
              v-model="isEmployeeRetirementPercentage"
              :value="20"
            />
            <!-- <FormCheck.Label htmlFor="notify-switch-email">
              是
            </FormCheck.Label> -->
          </FormCheck>
        </div>
        <!-- <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">所屬公司</FormLabel>
          <FormSelect class="flex-1" v-model="companyIds">
            <option value="1">1</option>
            <option value="2">2</option>
          </FormSelect>
        </div> -->
      </div>

      <div class="flex justify-center">
        <Button
          v-if="isEdit"
          variant="outline-primary"
          @click="() => emit('close')"
          >{{ $t('cancel-btn') }}</Button
        >
        <Button
          :class="{ 'flex-1': !isEdit, 'ml-3': isEdit }"
          :disabled="!canSubmit"
          variant="primary"
          @click="() => submit(isEdit, () => emit('close'))"
          >{{ $t('save-btn') }}</Button
        >
        <!-- <Button
          :class="{ 'flex-1': !isEdit, 'ml-3': isEdit }"
          variant="primary"
          @click="confirmLinkSalary()"
          >{{ $t('save-btn') }}</Button
        > -->
      </div>
    </component>
  </component>
</template>
