import { createRouter, createWebHistory } from 'vue-router'
import SideMenu from '../layouts/SideMenu/SideMenu.vue'
import Login from '../pages/Login.vue'
// import CampaignList from "../pages/CampaignList.vue";
import Index from '../pages/Index.vue'

const routes = [
  {
    path: '/',
    component: SideMenu,
    children: [
      {
        path: '/',
        name: 'index',
        component: Index
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
