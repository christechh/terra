import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'
import SideMenu from '../layouts/SideMenu/SideMenu.vue'
import EmailRest from '../pages/EmailRest.vue'
import LandingPage from '../pages/LandingPage.vue'
import LoginByPhonePage from '../pages/LoginByPhone.vue'
import LoginPage from '../pages/LoginPage.vue'
import PhoneReset from '../pages/PhoneReset.vue'
import RegisterByEmail from '../pages/RegisterByEmail.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ResetPassword from '../pages/ResetPassword.vue'
import SetPasswordAfterPhone from '../pages/SetPasswordAfterPhone.vue'
import SubLogin from '../pages/SubLogin.vue'
const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/dashboard',
    component: SideMenu,
    children: [
      {
        path: '/dashboard',
        name: 'Company',
        component: () => import('@/pages/CompanyPage.vue'),
        meta: {
          title: i18n.global.t('company-title'),
          requiresAuth: true
        }
      },
      {
        path: 'enterpoint',
        name: 'User',
        component: () => import('@/pages/User.vue'),
        meta: {
          title: i18n.global.t('menu-enterpoint2'),
          requiresAuth: true
        }
      },
      {
        path: 'enterpoint_advanced',
        name: 'Salary',
        component: () => import('@/pages/CompanyPage.vue'),
        meta: {
          requiresAuth: true,
          title: i18n.global.t('menu-enterpoint3')
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login_by_phone',
    name: 'loginByPhone',
    component: LoginByPhonePage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/sublogin',
    name: 'sublogin',
    component: SubLogin,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/reset',
    name: 'reset',
    component: EmailRest,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: ResetPassword,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/reset_by_phone',
    name: 'reset_by_phone',
    component: PhoneReset,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/setpassword_after_phone',
    name: 'setpassword_after_phone',
    component: SetPasswordAfterPhone,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register_by_email',
    name: 'registerByEmail',
    component: RegisterByEmail,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      requireAuth: false
    }
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
  if (to.name === 'settings-payment-upgrade') {
    to.meta.noLayout = true
  }
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    return { name: 'login' }
  }
})

export default router
