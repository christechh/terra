import { createRouter, createWebHistory } from 'vue-router'
import SideMenu from '../layouts/SideMenu/SideMenu.vue'
import Login from '../pages/Login.vue'
// import CampaignList from "../pages/CampaignList.vue";
import Landing from '../pages/Landing.vue'
import Links from '../pages/Links.vue'

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: Landing
  },
  {
    path: '/dashboard',
    component: SideMenu,
    children: [
      {
        path: '/dashboard',
        name: 'links',
        component: Links
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

export default router
