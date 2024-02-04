import { ref, computed } from 'vue'
import { usePrincingPlanStore } from '../../../stores/princingPlan'

export default function usePrincingPlan() {
  const princingPlanStore = usePrincingPlanStore()
  const { getPrincingPlan } = princingPlanStore

  const princingPlan = computed(() => princingPlanStore.princingPlan)

  // plan
  const planUidName: { [key: string]: string } = {
    free: 'billing-free-text',
    standard_month: 'plan-list-team-title',
    advanced_month: 'plan-list-advanced-month-title',
    advanced_year: 'plan-list-advanced-year-title',
    enterprise_month: 'plan-list-enterprise-title',
    exhibition_month: 'plan-list-exhibition-title',
    trial: 'plan-list-trial',
    pinchat_tier1: 'plan-appsumo-tier-1',
    pinchat_tier2: 'plan-appsumo-tier-2',
    pinchat_tier3: 'plan-appsumo-tier-3',
    pinchat_tier4: 'plan-appsumo-tier-4',
    pinchat_tier5: 'plan-appsumo-tier-5',
    pinchat_tier6: 'plan-appsumo-tier-6',
    starter_month: 'billing-starter',
    light_month: 'billing-light',
    standard2_month: 'billing-standard'
  }
  const appSumoPlanUid: string[] = [
    'pinchat_tier1',
    'pinchat_tier2',
    'pinchat_tier3',
    'pinchat_tier4',
    'pinchat_tier5',
    'pinchat_tier6'
  ]
  const isShowPlanContent = ref(true)
  const planTierFeaturesTitle: { [key: string]: string } = {
    pinchat_tier1: 'plan-tier-1-features',
    pinchat_tier2: 'plan-tier-2-features',
    pinchat_tier3: 'plan-tier-3-features',
    pinchat_tier4: 'plan-tier-4-features',
    pinchat_tier5: 'plan-tier-5-features',
    pinchat_tier6: 'plan-tier-6-features'
  }
  const planContent = ref({
    common: [
      'plan-detail-set-chat-type',
      'plan-detail-export-chat-data',
      'plan-detail-set-welcome-message',
      'plan-detail-integration-messengers',
      'plan-detail-customizable-chat-link',
      'plan-detail-in-chat-payment',
      'plan-detail-set-chatroom-appearance',
      'plan-detail-customize-messaging-func',
      'plan-detail-full-fledged-messaging',
      'plan-detail-client-list',
      'plan-detail-data-analytics',
      'plan-detail-notification',
      'plan-detail-chatbot-editor',
      'plan-detail-chat-widget'
    ],
    appSumo: [
      'plan-tier-all-features',
      '', // ${變數}每月活躍用戶
      'plan-tier-unlimited-users',
      'plan-tier-unlimited-websites',
      'plan-tier-all-standard-features',
      '' // ${變數}個子帳號
    ]
  })

  // mau
  const mauPrecent = computed(() => {
    const active_MAU = princingPlan.value.active_MAU ?? 0
    const used_MAU = princingPlan.value.used_MAU ?? 0
    const precent = (used_MAU / active_MAU) * 100
    return precent ? precent : 0
  })
  const showMauOverAlert = computed(() => {
    const active_MAU = princingPlan.value.active_MAU ?? 0
    const used_MAU = princingPlan.value.used_MAU ?? 0
    const isShowMauOverAlert = used_MAU >= active_MAU ? true : false
    return isShowMauOverAlert
  })

  // modal
  const isShowPlanModal = ref(false)
  const isShowUseCouponModal = ref(false)

  return {
    isShowPlanContent,
    isShowUseCouponModal,
    planContent,
    planUidName,
    appSumoPlanUid,
    planTierFeaturesTitle,
    princingPlan,
    mauPrecent,
    showMauOverAlert,
    isShowPlanModal,
    getPrincingPlan
  }
}
