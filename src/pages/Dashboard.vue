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
    <div class="mr-5 mt-5">
      <div class="w-72 rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div class="text-base font-medium">最新消息</div>
          <router-link :to="{ name: 'SalaryGroupList' }">
            <Button variant="primary" disabled>
              <Lucide icon="LibraryBig" class="mr-1 h-4 w-4" />
              查看更多
            </Button>
          </router-link>
        </div>
        <div class="grid cursor-pointer grid-cols-4 gap-y-3 p-4">....</div>
      </div>
    </div>

    <div class="mr-5 mt-5">
      <div class="w-72 rounded-xl bg-white dark:bg-darkmode-600">
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
        <div class="grid cursor-pointer grid-cols-4 gap-y-3 p-4">....</div>
      </div>
    </div>

    <div class="mr-5 mt-5">
      <div class="w-72 rounded-xl bg-white dark:bg-darkmode-600">
        <div
          class="flex items-center justify-between border-b border-slate-200 p-4"
        >
          <div class="text-base font-medium">勞報單</div>
          <router-link :to="{ name: 'SalaryGroupList' }">
            <Button variant="primary" disabled>
              <Lucide icon="Send" class="mr-1 h-4 w-4" />
              新增勞報
            </Button>
          </router-link>
        </div>
        <div class="grid cursor-pointer grid-cols-4 gap-y-3 p-4">....</div>
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
