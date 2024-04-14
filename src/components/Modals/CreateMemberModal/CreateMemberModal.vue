<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import Button from '../../../base-components/Button'
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormDatepicker,
  FormCheck
} from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import useCreateMember from './useCreateMember'
import { useMemberStore } from '../../../stores/member'

interface Props {
  subAccount?: {
    id?: number
    name: string
    email?: string
    nationality?: string
    gender?: string
    idCardNumber?: string
    birthday?: string
    password?: string
    phone?: string
    employeeId: string
    workStatus: string
    address?: string
    onboardDate: boolean
    resignationDate?: string
    identity: string
    salaryType: string
    isEmployeeRetirementPercentage: boolean
    employeeRetirementPercentage: number
    companyIds?: string[]
    bankCode: string
    bankAccount: string
  }
  idx: number
}

const userStore = useMemberStore()
const emit = defineEmits(['close'])
const { subAccount } = defineProps<Props>()

const isEmployeeRetirementPercentage = ref(
  subAccount?.isEmployeeRetirementPercentage ? true : false
)

const {
  email,
  name,
  password,
  employeeId,
  workStatus,
  onboardDate,
  resignationDate,
  identity,
  gender,
  nationality,
  birthday,
  idCardNumber,
  address,
  mobile,
  bankCode,
  bankAccount,
  salaryType,
  salaryItems,
  employeeInsurance,
  healthInsurance,
  employeePension,
  // isEmployeeRetirementPercentage,
  employeeRetirementPercentage,
  family,
  // companyIds,
  canSubmit,
  isEdit,
  submit
} = useCreateMember(subAccount)

const component = computed(() => {
  // return isEdit.value ? Slideover : Dialog
  return Dialog
})

const childComponent = computed(() => {
  // return isEdit.value ? Slideover.Panel : Dialog.Panel
  return Dialog.Panel
})

const addSalaryItems = () => {
  salaryItems.value.push({ name: '基本薪資', amount: 0 })
}

const deleteSalaryItem = (index: number) => {
  salaryItems.value = salaryItems.value.filter(
    (_: { name: string; amount: string }, idx: number) => idx !== index
  )
}

const addFamilyMember = () => {
  family.value.push({
    name: '',
    gender: '男',
    nationality: '台灣',
    relationship: '',
    idCardNumber: ''
  })
}
const deleteFamilyMember = (index: number) => {
  family.value = family.value.filter(
    (
      _: {
        name: string
        gender: string
        nationality: string
        relationship: string
        idCardNumber: string
      },
      idx: number
    ) => idx !== index
  )
}
const totalSalary = computed(() =>
  salaryItems.value.length
    ? salaryItems.value
        .map((item: { name: string; amount: number }) => Number(item.amount))
        .reduce((a: number, b: number) => a + b)
    : 0
)

watch(isEmployeeRetirementPercentage, (newValue) => {
  if (!newValue) {
    employeeRetirementPercentage.value = 0
  }
})
</script>

<template>
  <component :is="component" :open="true" size="md">
    <component :is="childComponent" class="p-4 md:w-[600px]">
      <div class="relative mb-5 text-center text-xl">
        {{
          isEdit
            ? $t('Member-edit-model-title')
            : $t('Member-create-model-title')
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
          <FormLabel class="w-[120px]">姓名 *</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入姓名"
            v-model="name"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">Email *</FormLabel>
          <FormInput
            class="flex-1"
            type="email"
            placeholder="請輸入Email"
            v-model="email"
          />
        </div>
        <div
          class="mb-4 flex items-center"
          v-if="userStore.xMemberType === 'admin'"
        >
          <FormLabel class="w-[120px]">登入密碼</FormLabel>
          <FormInput
            class="flex-1"
            type="password"
            :placeholder="$t('error-message36')"
            v-model="password"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">性別 *</FormLabel>
          <FormSelect class="flex-1" v-model="gender">
            <option value="男">男</option>
            <option value="女">女</option>
          </FormSelect>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">國籍</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入國籍"
            v-model="nationality"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">生日</FormLabel>
          <FormDatepicker
            class="flex-1"
            type="text"
            placeholder="請輸入生日"
            v-model="birthday"
            auto-apply
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">身分證字號 *</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入身分證字號"
            v-model="idCardNumber"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">員工編號 *</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
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
            auto-apply
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">離職日期</FormLabel>
          <FormDatepicker
            class="flex-1"
            type="text"
            placeholder="請輸入離職日期"
            v-model="resignationDate"
            auto-apply
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">戶籍地址 *</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入戶籍地址"
            v-model="address"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">行動電話</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入行動電話"
            v-model="mobile"
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
          <FormLabel class="w-[120px]">銀行代碼</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入銀行代碼"
            v-model="bankCode"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">銀行帳號</FormLabel>
          <FormInput
            class="flex-1"
            type="text"
            placeholder="請輸入銀行帳號"
            v-model="bankAccount"
          />
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
          <FormSelect class="mr-3 flex-1" v-model="salaryType">
            <option value="月薪">月薪</option>
            <option value="時薪">時薪</option>
          </FormSelect>
          <Button variant="primary" @click="addSalaryItems">新增</Button>
        </div>
        <div v-if="salaryItems && salaryItems.length" class="px-4 pb-4">
          <div
            class="mb-4"
            v-for="(salaryItem, index) in salaryItems"
            :key="index"
          >
            <div class="flex items-center">
              <!-- <FormInput
                class="mr-8 max-w-[120px]"
                type="text"
                placeholder="薪資名目"
                v-model="salaryItem.name"
              /> -->
              <FormSelect class="flex-1" v-model="salaryItem.name">
                <option value="基本薪資">基本薪資</option>
                <option value="伙食費">伙食費</option>
                <option value="主管津貼">主管津貼</option>
                <option value="其他津貼">其他津貼</option>
              </FormSelect>
              <FormInput
                class="ml-4 mr-3 max-w-[50%]"
                type="number"
                placeholder="金額"
                v-model="salaryItem.amount"
                min="0"
                onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
              />
              <Button variant="primary" @click="() => deleteSalaryItem(index)">
                移除
              </Button>
            </div>
          </div>
          <div>薪資合計：{{ totalSalary }}</div>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">勞工保險 *</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            placeholder="勞工保險"
            v-model="employeeInsurance"
            min="0"
            onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">健保 *</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            placeholder="健保"
            v-model="healthInsurance"
            min="0"
            onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          />
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">退休金 *</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            placeholder="退休金"
            v-model="employeePension"
            min="0"
            onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
          />
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
          </FormCheck>
        </div>
        <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">自提 % 數</FormLabel>
          <FormInput
            class="flex-1"
            type="number"
            placeholder="自提 % 數"
            v-model="employeeRetirementPercentage"
            max="6"
            min="1"
            onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
            :disabled="!isEmployeeRetirementPercentage"
          />
        </div>
        <!-- <div class="mb-4 flex items-center">
          <FormLabel class="w-[120px]">所屬公司</FormLabel>
          <FormSelect class="flex-1" v-model="companyIds">
            <option value="1">1</option>
            <option value="2">2</option>
          </FormSelect>
        </div> -->
      </div>

      <div>
        <div
          class="text-gray my-4 bg-orange-300 p-2 text-center text-lg font-bold text-white"
        >
          眷屬
        </div>
        <Button variant="primary" class="mb-3" @click="addFamilyMember">
          新增成員
        </Button>

        <div
          class="mb-3 flex flex-wrap items-center rounded-[6px] border p-3"
          v-for="(member, index) in family"
          :key="index"
        >
          <FormInput
            class="m-2 flex-1"
            type="text"
            placeholder="請輸入姓名"
            v-model="member.name"
          />

          <FormSelect class="m-2 flex-1" v-model="member.gender">
            <option value="男">男</option>
            <option value="女">女</option>
          </FormSelect>
          <div class="mb-4 flex items-center">
            <FormInput
              class="m-2 flex-1"
              type="text"
              placeholder="請輸入國籍"
              v-model="member.nationality"
            />
            <FormInput
              class="m-2 flex-1"
              type="text"
              placeholder="關係"
              v-model="member.relationship"
            />

            <FormInput
              class="m-2 flex-1"
              type="text"
              placeholder="請輸入身分證字號"
              v-model="member.idCardNumber"
            />
            <Button variant="primary" @click="() => deleteFamilyMember(index)">
              移除
            </Button>
          </div>
        </div>
      </div>

      <div class="mt-3 flex justify-center">
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
