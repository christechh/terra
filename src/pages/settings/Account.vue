<script setup lang="ts">
import Button from '../../base-components/Button'
import FormLabel from '../../base-components/Form/FormLabel.vue';
import FormInput from '../../base-components/Form/FormInput.vue';
import { FormSwitch, FormCheck, InputGroup } from '../../base-components/Form';
import Lucide from '../../base-components/Lucide/index';
import HeadUploadModal from '../../components/Modals/HeadUploadModal'
import { reactive, ref } from 'vue';
import { AuthType, getRequest } from '../../api/api';
import TomSelect from '../../base-components/TomSelect'

const showHeadUploadPopup = ref(false);
const userInfo: any = reactive({})
const activeLogs: any = ref([])
const accountSettingChange = ref(false)
const psdChange = ref(false)
const nofityChange = ref(false)

const getUserInfo = () => {
  getRequest('auth/setting', {}, AuthType.JWT).then(res => {
    const { data } = res.data
    Object.assign(userInfo, data)
  })
}

const getUserActiveLog = () => {
  getRequest('user/login', { page: 0, pageSize: 5 }, AuthType.JWT).then(res => {
    const { data } = res.data
    activeLogs.value = data
  })
}

getUserInfo()
getUserActiveLog()
</script>
<template>
  <div class="flex">
    <div class="flex-1">
      <div class="bg-white dark:bg-darkmode-600 rounded-xl">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>{{ $t('accountSetting') }}</div>
          <Button variant="primary" :disabled="!accountSettingChange">{{ $t('save') }}</Button>
        </div>
        <div class="grid grid-cols-4 p-4 gap-y-3 cursor-pointer" @click="showHeadUploadPopup = true">
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('head') }}</FormLabel>
          <div class="col-span-3">
            <div class="relative w-32 h-32">
              <img :src="userInfo.avatar" width="128" height="128" alt="" class="rounded-full">
              <div class="bg-primary w-8 h-8 flex justify-center items-center rounded-full p-2 absolute right-0 bottom-0">
                <Lucide icon="Camera" color="white" />
              </div>
            </div>
          </div>
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('displayName') }}</FormLabel>
          <FormInput v-model="userInfo.name" class="col-span-3" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('email') }}</FormLabel>
          <FormInput v-model="userInfo.email" class="col-span-3" />
        </div>
      </div>
      <div class="bg-white dark:bg-darkmode-600 rounded-xl mt-3">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>{{ $t('changePassword') }}</div>
          <Button variant="primary" :disabled="!psdChange">{{ $t('confirmEdit') }}</Button>
        </div>
        <div class="grid grid-cols-4 p-4 gap-y-3">
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('oldPassword') }}</FormLabel>
          <FormInput :placeholder="$t('inputOldPSD')" class="col-span-3" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('newPassword') }}</FormLabel>
          <FormInput :placeholder="$t('inputNewPSD')" class="col-span-3" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('email') }}</FormLabel>
          <FormInput :placeholder="$t('inputNewPSDAgain')" class="col-span-3" />
        </div>
      </div>
    </div>
    <div class="flex-1 ml-3">
      <div class="bg-white dark:bg-darkmode-600 rounded-xl">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>{{ $t('notifySetting') }}</div>
          <Button variant="primary" :disabled="!nofityChange">{{ $t('save') }}</Button>
        </div>
        <div class="grid grid-cols-4 p-4 gap-y-3">
          <FormCheck class="col-span-1">
            <FormCheck.Input id="radio-switch-6" type="radio" name="horizontal_radio_button"
              value="horizontal-radio-daniel-craig" />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('email') }}
            </FormCheck.Label>
          </FormCheck>
          <FormInput v-model="userInfo.notify_email" class="col-span-3" />
          <FormCheck class="col-span-1">
            <FormCheck.Input id="radio-switch-6" type="radio" name="horizontal_radio_button"
              value="horizontal-radio-daniel-craig" />
            <FormCheck.Label htmlFor="radio-switch-6">
              {{ $t('phone') }}
            </FormCheck.Label>
          </FormCheck>
          <InputGroup class="col-span-3">
            <FormInput v-model="userInfo.notify_phone" />
          </InputGroup>
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('switch') }}</FormLabel>
          <div class="mt-2">
            <FormSwitch>
              <FormSwitch.Input v-model="userInfo.is_open_notify" id="checkbox-switch-7" type="checkbox" />
            </FormSwitch>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-darkmode-600 rounded-xl mt-3">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>{{ $t('activeLog') }}</div>
          <Button variant="outline-primary">{{ $t('viewAll') }}</Button>
        </div>
        <div class="grid grid-cols-4 p-4 gap-y-3 text-xs">
          <span>{{ $t('browser') }}</span>
          <span>{{ $t('device') }}</span>
          <span>{{ $t('IP') }}</span>
          <span>{{ $t('time') }}</span>
          <template v-for="log in activeLogs">
            <span>{{ log.browser }}</span>
            <span>{{ log.os }}</span>
            <span>{{ log.ip }}</span>
            <span>{{ log.createdAt }}</span>
          </template>
        </div>
      </div>
      <div class="bg-white dark:bg-darkmode-600 rounded-xl mt-3">
        <div class="flex items-center justify-between p-4">
          <div>{{ $t('deleteAccount') }}</div>
        </div>
        <div class="flex items-center justify-between p-4">
          <span class="text-xs">{{ $t('deleteAlert') }}</span>
          <Button variant="danger">{{ $t('delete') }}</Button>
        </div>
      </div>
    </div>
    <HeadUploadModal v-model="showHeadUploadPopup" />
  </div>
</template>