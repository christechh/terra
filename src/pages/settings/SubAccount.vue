<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from '../../base-components/Button'
import Lucide from '../../base-components/Lucide'
import CreateSubAccountModal from '../../components/Modals/CreateSubAccountModal'
import useSubAccount from './composables/useSubAccount'

const { accounts, confirmDeleteSubAccount } = useSubAccount()

const showCreateSubAccountModal = ref(false)
const selectedSubAccountIndex = ref(-1)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedSubAccount: any = computed(
  () => accounts.value[selectedSubAccountIndex.value] || null
)

const creatOredit = (idx?: number) => {
  selectedSubAccountIndex.value = -1
  if (idx !== undefined) {
    selectedSubAccountIndex.value = idx
  }
  showCreateSubAccountModal.value = true
}
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
      <Button variant="primary" @click="() => creatOredit()"
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
              ? account.notifyType === 20
                ? $t('sub-account-email-notify')
                : $t('sub-account-messenger')
              : $t('sub-account-no-notify')
          }}</span>
          <div class="flex items-center justify-center">
            <Lucide
              :size="20"
              class="cursor-pointer"
              icon="Pencil"
              @click="creatOredit(key)"
            />
            <Lucide
              :size="20"
              class="ml-4 cursor-pointer"
              icon="Trash2"
              @click="confirmDeleteSubAccount(account.id)"
            />
          </div>
        </template>
      </div>
    </div>
    <CreateSubAccountModal
      v-if="showCreateSubAccountModal"
      @close="showCreateSubAccountModal = false"
      :sub-account="selectedSubAccount"
      :idx="selectedSubAccountIndex"
    />
  </div>
</template>
