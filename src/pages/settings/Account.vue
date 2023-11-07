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
          <div>帳號設定</div>
          <Button variant="primary">儲存</Button>
        </div>
        <div class="grid grid-cols-3 p-4 gap-y-3">
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">頭貼</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">顯示名稱</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">Email</FormLabel>
          <FormInput class="col-span-2" />
        </div>
      </div>
      <div class="bg-white dark:bg-darkmode-600 rounded-xl mt-3">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>變更密碼</div>
          <Button variant="primary">儲存</Button>
        </div>
        <div class="grid grid-cols-3 p-4 gap-y-3">
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">舊密碼</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">心密碼</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">Email</FormLabel>
          <FormInput class="col-span-2" />
        </div>
      </div>
    </div>
    <div class="flex-1 ml-3">
      <div class="bg-white dark:bg-darkmode-600 rounded-xl">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>訊息通知設定</div>
          <Button variant="primary">儲存</Button>
        </div>
        <div class="grid grid-cols-3 p-4 gap-y-3">
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">email</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">手機號碼</FormLabel>
          <FormInput class="col-span-2" />
          <FormLabel class="col-span-1 flex items-center justify-end mb-0 mr-2">開關</FormLabel>
          <FormSwitch />
        </div>
      </div>
      <div class="bg-white dark:bg-darkmode-600 rounded-xl mt-3">
        <div class="flex items-center justify-between p-4 border-b border-slate-200">
          <div>帳戶活動紀錄</div>
          <Button variant="primary">儲存</Button>
        </div>
        <div class="grid grid-cols-4 p-4 gap-y-3 text-xs">
          <span>瀏覽器</span>
          <span>裝置</span>
          <span>IP</span>
          <span>時間</span>
          <span>Chrome</span>
          <span>Mac 10.15.7</span>
          <span>220.130.45.83, 52.46.57.72, 10.100.7.132 (Hsinchu)</span>
          <span>2023/11/2 20:53:59</span>
        </div>
      </div>
      <div class="bg-white dark:bg-darkmode-600 rounded-xl mt-3">
        <div class="flex items-center justify-between p-4">
          <div>刪除帳號</div>
        </div>
        <div class="flex items-center justify-between p-4">
          <span class="text-xs">請注意，這將會永久的刪除您的所有資料，一但您刪除帳號，您的帳號將無法還原。</span>
          <Button variant="danger">刪除</Button>
        </div>
      </div>
    </div>
  </div>
</template>