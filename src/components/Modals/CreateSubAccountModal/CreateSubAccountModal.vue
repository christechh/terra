<script lang="ts" setup>
import {
  FormCheck,
  FormInput,
  FormLabel,
  InputGroup
} from '../../../base-components/Form'
import { Dialog } from '../../../base-components/Headless'
import Lucide from '../../../base-components/Lucide'
import ContryCodePicker from '../../ContryCodePicker'
import useCreateSubAccount from './useCreateSubAccount'

const emit = defineEmits(['close'])

const {
  account,
  name,
  password,
  notifyType,
  notifyEmail,
  phoneCode,
  notifyPhone
} = useCreateSubAccount()
</script>

<template>
  <Dialog :open="true" size="md">
    <Dialog.Panel class="p-4 md:w-[400px]">
      <div class="relative mb-5 text-center text-xl">
        {{ $t('sub-account-add-btn-text') }}
        <Lucide
          icon="X"
          class="absolute right-0 top-0 cursor-pointer"
          @click="() => emit('close')"
        />
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[100px]">{{ $t('sub-account-name') }}</FormLabel>
        <FormInput
          class="flex-1"
          type="text"
          :placeholder="$t('signup-display-name-placeholder')"
          v-model="name"
        />
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[100px]">{{
          $t('sub-account-account-label')
        }}</FormLabel>
        <FormInput
          class="flex-1"
          type="text"
          :placeholder="$t('error-message35')"
          v-model="account"
        />
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[100px]">{{
          $t('sub-account-pwd-label')
        }}</FormLabel>
        <FormInput
          class="flex-1"
          type="text"
          :placeholder="$t('error-message36')"
          v-model="password"
        />
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[100px]">{{
          $t('sub-account-notify-setting')
        }}</FormLabel>
        <div>
          <FormCheck>
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              v-model="notifyType"
              :value="20"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('sub-account-table-email') }}
            </FormCheck.Label>
          </FormCheck>
          <FormCheck>
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              v-model="notifyType"
              :value="10"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('sub-account-table-phone') }}
            </FormCheck.Label>
          </FormCheck>
          <FormCheck>
            <FormCheck.Input
              id="radio-switch-6"
              type="radio"
              name="horizontal_radio_button"
              v-model="notifyType"
              value="none"
            />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('sub-account-no-notify') }}
            </FormCheck.Label>
          </FormCheck>
        </div>
      </div>
      <div class="mb-4 flex items-center">
        <FormLabel class="w-[100px]" v-if="notifyType !== 'none'">{{
          notifyType === 20
            ? $t('sub-account-table-email')
            : $t('sub-account-table-phone')
        }}</FormLabel>
        <FormInput
          v-if="notifyType === 20"
          class="flex-1"
          type="text"
          :placeholder="$t('error-message36')"
          v-model="notifyEmail"
        />
        <InputGroup v-if="notifyType === 10">
          <ContryCodePicker v-model="phoneCode" />
          <FormInput v-model="notifyPhone" type="text" />
        </InputGroup>
      </div>
    </Dialog.Panel>
  </Dialog>
</template>
