import { createRouter, createWebHistory } from 'vue-router'
import SideMenu from '../layouts/SideMenu/SideMenu.vue'
import LoginPage from '../pages/LoginPage.vue'
import LandingPage from '../pages/LandingPage.vue'
import LinksPage from '../pages/LinksPage.vue'
import i18n from '../i18n'
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

export default router
