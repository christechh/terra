<script setup lang="ts">
import { ref } from 'vue'
import axios from '../../axios'
import Button from '../../base-components/Button'
import Lucide from '../../base-components/Lucide'

interface Account {
  id: number
  name: string
  account: string
  notifyOpen: boolean
  notifyType: number
}

const accounts = ref<Account[]>([])

const fetchSubAccounts = () => {
  axios
    .get('user/subAccount', {
      params: {
        page: 0,
        pageSize: 100
      }
    })
    .then((res) => {
      accounts.value = res.data.data.data
    })
}

fetchSubAccounts()
</script>

<template>
  <div class="">
    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('sub-account-list') }}</b>
        <div style="color: #728195">{{ $t('sub-account-desc') }}</div>
      </div>
      <Button variant="primary"
        ><Lucide icon="Plus" />{{ $t('sub-account-add-btn-text') }}</Button
      >
    </div>
    <div class="mt-1 rounded-b-xl bg-white p-4">
      <div class="grid grid-cols-5 gap-y-5 text-center">
        <span>{{ $t('sub-account-table-no') }}</span>
        <span>{{ $t('sub-account-name') }}</span>
        <span>{{ $t('sub-account-login-label') }}</span>
        <span>{{ $t('sub-account-notify-setting') }}</span>
        <span>{{ $t('sub-account-table-action') }}</span>
        <template v-for="(account, key) in accounts" :key="account.id">
          <span>{{ key + 1 }}</span>
          <span>{{ account.name }}</span>
          <span>{{ account.account }}</span>
          <span>{{
            account.notifyOpen
              ? account.notifyType === 10
                ? $t('sub-account-email-notify')
                : $t('sub-account-messenger')
              : $t('sub-account-no-notify')
          }}</span>
          <div class="flex items-center justify-center">
            <Lucide :size="20" icon="Pencil" />
            <Lucide :size="20" class="ml-4" icon="Trash2" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
