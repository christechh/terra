import { useI18n } from 'vue-i18n'
// import { storeToRefs } from 'pinia'
// import { usePrincingPlanStore } from '../../../../stores/princingPlan'

export default function usePlanModal() {
  // const princingPlanStore = usePrincingPlanStore()
  // const { princingPlan } = storeToRefs(princingPlanStore)

  const plans = [
    {
      price: 0,
      plan_uid: 'free',
      href: 'https://pinchat.me/contact',
      version: 'pricing-addnew1',
      description: 'pricing-plan12',
      content: [
        'pricing-plan14',
        'pricing-plan15',
        'pricing-plan16',
        'pricing-plan17',
        'pricing-plan18',
        'pricing-plan1'
      ]
    },
    {
      price: 'pricing-addnew5',
      plan_uid: 'starter_month',
      version: 'pricing-plan10',
      href: 'payment_upgrade?type=package750',
      description: 'pricing-addnew6',
      content: [
        'pricing-plan14',
        'paymnet_upgrade4',
        'paymnet_upgrade5',
        'paymnet_upgrade6',
        'paymnet_upgrade7'
      ]
    },
    {
      price: 'pricing-addnew13',
      plan_uid: 'light_month',
      href: 'payment_upgrade?type=package1200',
      version: 'pricing-addnew12',
      description: 'pricing-addnew14',
      content: ['pricing-plan14', 'pricing-addnew15', 'pricing-addnew16']
    },
    {
      price: 'pricing-addnew18',
      plan_uid: 'standard2_month',
      href: 'payment_upgrade?type=package1800',
      version: 'pricing-addnew17',
      description: 'pricing-addnew19',
      content: [
        'pricing-plan14',
        'pricing-addnew20',
        'pricing-addnew21',
        'custom-domain-title',
        'pricing-addnew11'
      ]
    }
  ]
  const customContent = [
    'plan-list-rule-qrcode-desc2',
    'plan-desc-5-1',
    'pricing-plan39',
    'pricing-plan40',
    'pricing-plan41'
  ]

  // const planUid: string = princingPlan.value.plan_uid
  const planUid: string = 'light_month'

  function planChoice(currentPlan: string) {
    const { t } = useI18n()
    if (currentPlan === planUid) return t('pricing-CTA98')
    if (planUid === 'free') return t('pricing-addnew25')
    return t('menu-label-1')
  }

  function getPlanUrl(currentPlan: string, url: string) {
    if (currentPlan === planUid) return 'https://pinchat.me/contact'
    if (planUid === 'free') return url
    return 'https://pinchat.me/contact'
  }

  return {
    plans,
    customContent,
    planUid,
    planChoice,
    getPlanUrl
  }
}
