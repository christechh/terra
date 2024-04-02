<script setup lang="ts">
import { computed, ref } from 'vue'
import CreateCompanyModal from '../components/Modals/CreateCompanyModal'
import useCompany from './settings/composables/useCompany'
import Button from '../base-components/Button'
import Lucide from '../base-components/Lucide'

const { companies } = useCompany()

const showCreateCompanyModal = ref(false)
const selectedCompanyIndex = ref(-1)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedCompany: any = computed(
  () => companies.value[selectedCompanyIndex.value] || null
)
</script>

<template>
  <div class="flex justify-start">
    <div class="mr-5 mt-5 w-1/2">
      <div class="w-full rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div class="text-base font-medium">最新消息</div>
        </div>
        <div class="cursor-pointer p-4">
          全新雲端秘書系統！<br />
          對系統不熟悉嗎？<br />
          我們為你準備了操作教學手冊及使用教學影片，請在首頁查看、下載吧！

          <div class="text-right">
            <Button variant="primary" disabled class="mt-4 h-8">
              <Lucide icon="Download" class="mr-1 h-4 w-4" />
              下載教學手冊
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div class="mr-5 mt-5 w-1/2">
      <div class="w-full rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div class="text-base font-medium">勞報單系統</div>
          <a href="https://cloud.orange3.com.tw/leave" target="_blank">
            <Button variant="primary" class="h-8">
              <Lucide icon="Send" class="mr-1 h-4 w-4" />
              前往系統
            </Button>
          </a>
        </div>
        <div class="cursor-pointer p-4">
          勞報單系統文字：<br />
          尚未開通勞報單系統？<br />
          前往官方LINE購買開通吧

          <div class="text-right">
            <Button variant="primary" disabled class="mt-4 h-8">
              <Lucide icon="Send" class="mr-1 h-4 w-4" />
              前往購買
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="mr-5 mt-5">
      <div class="w-full rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div class="text-base font-medium">薪資小工具</div>
          <router-link :to="{ name: 'SalaryGroupList' }">
            <Button variant="primary">
              <Lucide icon="Send" class="mr-1 h-4 w-4" />
              薪資計算
            </Button>
          </router-link>
        </div>
        <div class="cursor-pointer p-4">
          薪資小工具文字：<br />
          歡迎 [用戶名稱]<br />
          第一次操作系統？<br />
          開始建立第一筆「人事資料」吧！

          <div class="text-right">
            <router-link :to="{ name: 'User' }">
              <Button variant="primary" class="mt-4 h-8">
                開始建立
                <Lucide icon="ArrowRight" class="mr-1 h-4 w-4" />
              </Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CreateCompanyModal
    v-if="showCreateCompanyModal"
    @close="showCreateCompanyModal = false"
    :company="selectedCompany"
    :idx="selectedCompanyIndex"
  />
</template>
