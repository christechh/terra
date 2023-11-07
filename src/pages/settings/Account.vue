<script setup lang="ts">
import Button from '../../base-components/Button'
import FormLabel from '../../base-components/Form/FormLabel.vue';
import FormInput from '../../base-components/Form/FormInput.vue';
import FormSwitch from '../../base-components/Form/FormSwitch/FormSwitch.vue';
</script>
<template>
  <div class="flex">
    <div class="flex-1">
      <div class="bg-white dark:bg-darkmode-600 rounded-xl">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>{{ $t('accountSetting') }}</div>
          <Button variant="primary">{{ $t('save') }}</Button>
        </div>
        <div class="grid grid-cols-3 p-4 gap-y-3">
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('head') }}</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('displayName') }}</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('email') }}</FormLabel>
          <FormInput class="col-span-2" />
        </div>
      </div>
      <div class="bg-white dark:bg-darkmode-600 rounded-xl mt-3">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>{{ $t('changePassword') }}</div>
          <Button variant="primary">{{ $t('save') }}</Button>
        </div>
        <div class="grid grid-cols-3 p-4 gap-y-3">
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('oldPassword') }}</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('newPassword') }}</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('email') }}</FormLabel>
          <FormInput class="col-span-2" />
        </div>
      </div>
    </div>
    <div class="flex-1 ml-3">
      <div class="bg-white dark:bg-darkmode-600 rounded-xl">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>{{ $t('notifySetting') }}</div>
          <Button variant="primary">{{ $t('save') }}</Button>
        </div>
        <div class="grid grid-cols-3 p-4 gap-y-3">
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('email') }}</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('phone') }}</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">{{ $t('switch') }}</FormLabel>
          <FormSwitch />
        </div>
      </div>
      <div class="bg-white dark:bg-darkmode-600 rounded-xl mt-3">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>{{ $t('activeLog') }}</div>
          <Button variant="primary">{{ $t('save') }}</Button>
        </div>
        <div class="grid grid-cols-4 p-4 gap-y-3 text-xs">
          <span>{{ $t('browser') }}</span>
          <span>{{ $t('device') }}</span>
          <span>{{ $t('IP') }}</span>
          <span>{{ $t('time') }}</span>
          <span>Chrome</span>
          <span>Mac 10.15.7</span>
          <span>220.130.45.83, 52.46.57.72, 10.100.7.132 (Hsinchu)</span>
          <span>2023/11/2 20:53:59</span>
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
  </div>
</template>