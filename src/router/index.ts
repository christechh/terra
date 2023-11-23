import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'
import SideMenu from '../layouts/SideMenu/SideMenu.vue'
import LandingPage from '../pages/LandingPage.vue'
import LinksPage from '../pages/LinksPage.vue'
import LoginPage from '../pages/LoginPage.vue'
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
            component: () => import('@/pages/settings/subAccount.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
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
  if (to.name === 'login') return
  if (!localStorage.getItem('token')) {
    return { name: 'login' }
  }
})

export default router
