<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import noSubAccount from '../../assets/images/no-subAccount.png'
import Button from '../../base-components/Button'
import Lucide from '../../base-components/Lucide'
import ConfirmSubAccountLimitModal from '../../components/Modals/ConfirmSubAccountLimitModal'
import CreateSubAccountModal from '../../components/Modals/CreateSubAccountModal'
import useSubAccount from './composables/useSubAccount'
import useUserInfo from './composables/useUserInfo'

const { accounts, confirmDeleteSubAccount } = useSubAccount()
const { userInfo, getUserInfo } = useUserInfo()

const showCreateSubAccountModal = ref(false)
const selectedSubAccountIndex = ref(-1)
const showSubAccountLimitAlert = ref(false)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedSubAccount: any = computed(
  () => accounts.value[selectedSubAccountIndex.value] || null
)

const creatOredit = (idx?: number) => {
  if (!idx && userInfo.sub_accounts_count >= userInfo.sub_accounts_limit) {
    return (showSubAccountLimitAlert.value = true)
  }
  selectedSubAccountIndex.value = -1
  if (idx !== undefined) {
    selectedSubAccountIndex.value = idx
  }
  showCreateSubAccountModal.value = true
}

onMounted(() => {
  getUserInfo()
})
</script>

<template>
  <div v-if="!accounts.length" class="text-center">
    <img :src="noSubAccount" class="mx-auto block" width="50" />
    <div class="mt-4 text-center">{{ $t('sub-account-empty-desc') }}</div>
    <Button
      variant="primary"
      class="mx-auto mt-5 h-10 whitespace-nowrap"
      @click="() => creatOredit()"
      ><Lucide icon="Plus" />{{ $t('sub-account-add-btn-text') }}</Button
    >
  </div>
  <div v-else class="">
    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('sub-account-list') }}</b>
        <div style="color: #728195">{{ $t('sub-account-desc') }}</div>
      </div>
      <Button
        variant="primary"
        class="h-10 whitespace-nowrap"
        @click="() => creatOredit()"
        ><Lucide icon="Plus" />{{ $t('sub-account-add-btn-text') }}</Button
      >
    </div>

    <div class="mt-1 rounded-b-xl bg-white p-4 dark:bg-darkmode-600">
      <div class="grid grid-cols-8 gap-y-3 text-center">
        <b class="border-b-2 border-solid border-[#e2e8f0] pb-2">{{
          $t('sub-account-table-no')
        }}</b>
        <b class="col-span-2 border-b-2 border-solid border-[#e2e8f0] pb-2">{{
          $t('sub-account-name')
        }}</b>
        <b class="col-span-2 border-b-2 border-solid border-[#e2e8f0] pb-2">{{
          $t('sub-account-login-label')
        }}</b>
        <b class="col-span-2 border-b-2 border-solid border-[#e2e8f0] pb-2">{{
          $t('sub-account-notify-setting')
        }}</b>
        <b class="border-b-2 border-solid border-[#e2e8f0] pb-2">{{
          $t('sub-account-table-action')
        }}</b>
        <template v-for="(account, key) in accounts" :key="account.id">
          <span class="border-b-2 border-solid border-[#e2e8f0] pb-2">{{
            key + 1
          }}</span>
          <span
            class="col-span-2 border-b-2 border-solid border-[#e2e8f0] pb-2"
            >{{ account.name }}</span
          >
          <span
            class="col-span-2 border-b-2 border-solid border-[#e2e8f0] pb-2"
            >{{ account.account }}</span
          >
          <span
            class="col-span-2 border-b-2 border-solid border-[#e2e8f0] pb-2"
            >{{
              account.notifyOpen
                ? account.notifyType === 20
                  ? $t('sub-account-email-notify')
                  : $t('sub-account-messenger')
                : $t('sub-account-no-notify')
            }}</span
          >
          <div
            class="flex items-center justify-center border-b-2 border-solid border-[#e2e8f0] pb-2"
          >
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
    <ConfirmSubAccountLimitModal
      v-if="showSubAccountLimitAlert"
      @close="showSubAccountLimitAlert = false"
      :limit="userInfo.sub_accounts_limit"
    />
  </div>
</template>
