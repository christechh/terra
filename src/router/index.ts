import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'
import SideMenu from '../layouts/SideMenu/SideMenu.vue'
import LandingPage from '../pages/LandingPage.vue'
import LinksPage from '../pages/LinksPage.vue'
import LoginByPhonePage from '../pages/LoginByPhone.vue'
import LoginPage from '../pages/LoginPage.vue'
import SubLogin from '../pages/SubLogin.vue'
const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: '/dashboard',
    component: SideMenu,
    children: [
      {
        path: '/dashboard',
        name: 'links',
        component: LinksPage,
        meta: {
          title: i18n.global.t('my-links')
        }
      },
      {
        path: 'enterpoint',
        name: 'enterpoint-setting',
        component: () => import('@/pages/LinkDetail/BaseSettingPage.vue'),
        meta: {
          title: i18n.global.t('menu-enterpoint2')
        }
      },
      {
        path: 'enterpoint_advanced',
        name: 'enterpoint-advanced',
        component: () => import('@/pages/LinkDetail/AdvancedSettingPage.vue'),
        meta: {
          title: i18n.global.t('menu-enterpoint3')
        }
      },
      {
        path: 'enterpoint_thirds',
        name: 'enterpoint-thirds',
        component: () => import('@/pages/LinkDetail/ThirdPage.vue'),
        meta: {
          title: i18n.global.t('menu-enterpoint5')
        }
      },
      {
        path: 'enterpoint_customer',
        name: 'enterpoint-customer',
        component: () => import('@/pages/LinkDetail/CustomerPage.vue'),
        meta: {
          title: i18n.global.t('menu-enterpoint4')
        }
      },
      {
        path: 'settings',
        name: 'settings',
        children: [
          {
            path: '',
            name: 'settings-account',
            component: () => import('@/pages/settings/Account.vue')
          },
          {
            path: 'sub_account',
            name: 'settings-sub_account',
            component: () => import('@/pages/settings/SubAccount.vue')
          },
          {
            path: 'princing_plan',
            name: 'settings-princing_plan',
            component: () => import('@/pages/settings/PrincingPlan.vue')
          },
          {
            path: 'payment_upgrade',
            name: 'settings-payment-upgrade',
            component: () => import('@/pages/settings/PaymentUpgrade.vue')
          },
          {
            path: 'settings_payment_flow',
            name: 'settings-payment',
            component: () => import('@/pages/settings/Payment.vue')
          },
          {
            path: 'settings_payment_flow_paypal',
            name: 'settings-payment-paypal',
            component: () => import('@/pages/settings/SettingPayPal.vue')
          },
          {
            path: 'settings_payment_flow_stripe',
            name: 'settings-payment-stripe',
            component: () => import('@/pages/settings/SettingStripe.vue')
          },
          {
            path: 'settings_payment_flow_line_pay',
            name: 'settings-payment-line-pay',
            component: () => import('@/pages/settings/SettingLinePay.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/login_by_phone',
    name: 'loginByPhone',
    component: LoginByPhonePage
  },
  {
    path: '/sublogin',
    name: 'sublogin',
    component: SubLogin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition ?? { left: 0, top: 0 }
  }
})

router.beforeEach(async (to) => {
  if (to.name === 'landing-page') return
  if (
    to.name === 'login' ||
    to.name === 'loginByPhone' ||
    to.name === 'sublogin'
  )
    return
  if (to.name === 'settings-payment-upgrade') {
    to.meta.noLayout = true
  }
  if (!localStorage.getItem('token')) {
    return { name: 'login' }
  }
})

export default router
