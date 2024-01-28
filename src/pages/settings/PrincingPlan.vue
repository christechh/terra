<script setup lang="ts">
import { onMounted } from 'vue'
import Lucide from '../../base-components/Lucide/Lucide.vue'
import usePrincingPlan from './composables/usePrincingPlan'
import PlanModal from '../../components/Modals/PlanModal'
import UseCouponModal from '../../components/Modals/UseCouponModal'

const {
  isShowPlanContent,
  planContent,
  planUidName,
  princingPlan,
  mauPrecent,
  showMauOverAlert,
  isShowUseCouponModal,
  isShowPlanModal,
  getPrincingPlan
} = usePrincingPlan()

const hiddenCouponPlanUid = [
  'pinchat_tier1',
  'pinchat_tier2',
  'pinchat_tier3',
  'pinchat_tier4',
  'pinchat_tier5'
]

onMounted(() => {
  getPrincingPlan()
})
</script>

<template>
  <div class="mt-10">
    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('pricing-plan') }}</b>
      </div>
      <button
        class="flex h-[40px] items-center justify-center gap-2 rounded-lg border border-primary px-5 text-base font-bold text-primary"
        @click="isShowPlanModal = true"
      >
        {{ $t('setting-change-plan') }}
      </button>
    </div>
    <div class="mt-1 rounded-b-xl bg-white p-5 dark:bg-darkmode-600">
      <div class="items-center md:flex">
        <div class="mr-2 mt-2 flex-1">
          <b>{{ $t('pricing-CTA98') }}</b>
          <p class="pt-2 text-lg font-medium text-[#02B13F]">
            {{ $t(planUidName[princingPlan.plan_uid]) }}
          </p>
        </div>
        <div class="mr-2 mt-2 flex-1">
          <b>{{ $t('setting-plan-start-date') }}</b>
          <p class="pt-2 text-sm text-[#718096]">
            {{ princingPlan.plan_payment_at }}
          </p>
        </div>
        <div class="mt-2 flex-1">
          <b>{{ $t('setting-plan-end-date') }}</b>
          <p class="pt-2 text-sm text-[#718096]">
            <span v-if="princingPlan.plan_end_at === 'Invalid date'">{{
              $t('plan-list-free-unlimited')
            }}</span>
            <span v-else>{{ princingPlan.plan_end_at }}</span>
          </p>
        </div>
      </div>
      <div class="mt-3">
        <div
          class="my-2 flex cursor-pointer items-center"
          @click="isShowPlanContent = !isShowPlanContent"
        >
          <p class="text-base">{{ $t('plan-detail') }}</p>
          <Lucide
            icon="ChevronDown"
            width="40"
            :size="28"
            :class="[
              'stroke-2 transition-all',
              { 'rotate-180': !isShowPlanContent }
            ]"
          />
        </div>
        <div
          v-show="isShowPlanContent"
          class="flex flex-wrap bg-[#f2fbf5] p-4 dark:bg-transparent"
        >
          <div
            class="auto-rows-[minmax(min-content, max-content)] grid grid-cols-[1fr] gap-1.5 md:grid-cols-[1/3]"
          >
            <b class="w-full md:col-span-3">{{
              $t('plan-detail-features-included-all-plans')
            }}</b>
            <div v-for="item in planContent.common" :key="item">
              <div class="flex items-center">
                <Lucide icon="Check" :size="20" class="mr-4 text-[#03b240]" />
                <p class="text-sm">{{ $t(item) }}</p>
              </div>
            </div>
          </div>
          <div
            class="auto-rows-[minmax(min-content, max-content)] mt-5 grid grid-cols-[1fr] gap-1.5 md:ml-10 md:mt-0"
          >
            <b class="w-full">{{ $t('plan-tier-5-features') }}</b>
            <div
              v-for="(item, index) in planContent.appSumo"
              :key="`feat${index}`"
            >
              <div class="flex items-center">
                <Lucide icon="Check" :size="20" class="mr-4 text-[#03b240]" />
                <div class="text-sm">
                  <p v-if="index === 1">
                    <span v-if="!princingPlan.active_MAU">{{
                      $t('plan-tier-6-active-users')
                    }}</span>
                    <span v-else
                      >{{ princingPlan.active_MAU }}
                      {{ $t('plan-tier-active-users') }}</span
                    >
                  </p>
                  <p v-if="index === 5">
                    <span v-if="!princingPlan.sub_accounts_limit">{{
                      $t('plan-tier-5-subaccounts')
                    }}</span>
                    <span v-else
                      >{{ princingPlan.sub_accounts_limit }}
                      {{ $t('plan-tier-subaccounts') }}</span
                    >
                  </p>
                  <p v-else>{{ $t(item) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="princingPlan.active_MAU !== 0" class="mt-6">
    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('mau-quota') }}</b>
      </div>
    </div>
    <div class="mt-1 rounded-b-xl bg-white p-5 dark:bg-darkmode-600">
      <div class="flex flex-col items-center justify-center md:flex-row">
        <div class="w-16 pt-5 text-center">{{ $t('mau-text') }}</div>
        <div class="w-full pt-1 md:w-7/12">
          <div class="flex">
            <div id="mau-min" class="flex-1 text-left">0</div>
            <div id="mau-max" class="flex-1 text-right">
              {{ princingPlan.active_MAU }}
            </div>
          </div>
          <div
            class="dark:bg-dark-1 h-3 w-full overflow-hidden rounded bg-gray-200"
          >
            <div
              id="mau-value"
              class="h-full w-3/4 rounded bg-[#02B13F]"
              :style="`width: ${mauPrecent}%`"
            ></div>
          </div>
        </div>
        <div class="py-5 text-xs md:ml-8" style="display: block">
          {{ $t('mau-used') }}
          <span id="mau-used">{{ princingPlan.used_MAU }}</span>
          {{ $t('mau-text') }}
        </div>
      </div>
      <div
        v-if="showMauOverAlert"
        class="mx-auto mt-5 flex w-fit items-center rounded-md bg-[#e3f2a4] p-2"
      >
        <Lucide icon="Info" :size="20" class="mr-2 stroke-2" />
        <p>
          {{ $t('mau-limit-asap-start') }}
          <span
            class="cursor-pointer text-[#02B13F]"
            @click="isShowPlanModal = true"
          >
            {{ $t('mau-limit-change-plan') }}
          </span>
          {{ $t('mau-limit-asap-end') }}
        </p>
      </div>
    </div>
  </div>
  <div v-if="hiddenCouponPlanUid.includes(princingPlan.plan_uid)" class="mt-6">
    <div
      class="flex items-center justify-between rounded-t-xl bg-white p-4 dark:bg-darkmode-600"
    >
      <div>
        <b class="text-base">{{ $t('payment-coupon') }}</b>
      </div>
    </div>
    <div class="mt-1 rounded-b-xl bg-white p-5 dark:bg-darkmode-600">
      <div v-if="!princingPlan.coupon_code">
        <div
          class="flex cursor-pointer items-center text-[#02B13F]"
          @click="isShowUseCouponModal = true"
        >
          <Lucide icon="Ticket" :size="20" class="mr-2" />
          <p>{{ $t('paymnet_upgrade46') }}</p>
        </div>
      </div>
      <div v-else class="flex">
        <div class="mr-12">
          <p class="mb-2 font-bold">{{ $t('payment-in-use') }}</p>
          <p class="text-primary">{{ princingPlan.coupon_code }}</p>
        </div>
        <div>
          <p class="mb-2 font-bold">{{ $t('payment-discount-item') }}</p>
          <p>
            {{ $t('paymnet_upgrade53', { x: princingPlan.discount_value }) }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <PlanModal
    v-if="isShowPlanModal"
    @close="isShowPlanModal = false"
  ></PlanModal>
  <UseCouponModal
    v-if="isShowUseCouponModal"
    @close="isShowUseCouponModal = false"
  ></UseCouponModal>
</template>
