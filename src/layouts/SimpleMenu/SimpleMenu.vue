<script setup lang="ts">
import { computed, onMounted, provide, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import logoUrl from '../../assets/images/logo.svg'
import DarkModeSwitcher from '../../components/DarkModeSwitcher'
import MainColorSwitcher from '../../components/MainColorSwitcher'
import MobileMenu from '../../components/MobileMenu'
import TopBar from '../../components/TopBar'
import { useSimpleMenuStore } from '../../stores/simple-menu'
import Divider from './Divider.vue'
import Menu from './Menu.vue'
import {
  FormattedMenu,
  ProvideForceActiveMenu,
  Route,
  enter,
  forceActiveMenu,
  leave,
  nestedMenu
} from './simple-menu'

const route: Route = useRoute()
let formattedMenu = reactive<Array<FormattedMenu | 'divider'>>([])
const setFormattedMenu = (
  computedFormattedMenu: Array<FormattedMenu | 'divider'>
) => {
  Object.assign(formattedMenu, computedFormattedMenu)
}
const simpleMenuStore = useSimpleMenuStore()
const simpleMenu = computed(() => nestedMenu(simpleMenuStore.menu, route))

provide<ProvideForceActiveMenu>('forceActiveMenu', (pageName: string) => {
  forceActiveMenu(route, pageName)
  setFormattedMenu(simpleMenu.value)
})

watch(simpleMenu, () => {
  setFormattedMenu(simpleMenu.value)
})

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu
  }
)

onMounted(() => {
  setFormattedMenu(simpleMenu.value)
})
</script>

<template>
  <div class="py-2">
    <DarkModeSwitcher />
    <MainColorSwitcher />
    <MobileMenu />
    <div class="mt-[4.7rem] flex md:mt-0">
      <!-- BEGIN: Simple Menu -->
      <nav class="hidden w-[85px] overflow-x-hidden pb-16 pr-5 md:block">
        <RouterLink
          :to="{ name: 'simple-menu-page-1' }"
          class="intro-x flex items-center pl-5 pt-4"
        >
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="w-6"
            :src="logoUrl"
          />
        </RouterLink>
        <Divider type="div" class="my-6"></Divider>
        <ul>
          <!-- BEGIN: First Child -->
          <template v-for="(menu, menuKey) in formattedMenu">
            <Divider
              v-if="menu == 'divider'"
              type="li"
              :class="[
                'my-6',

                // Animation
                `animate-[0.4s_ease-in-out_0.1s_intro-divider] opacity-0 animate-fill-mode-forwards animate-delay-${
                  (menuKey + 1) * 10
                }`
              ]"
              :key="'divider-' + menuKey"
            ></Divider>
            <li v-else :key="menuKey">
              <Menu
                :class="{
                  // Animation
                  [`translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] opacity-0 animate-fill-mode-forwards animate-delay-${
                    (menuKey + 1) * 10
                  }`]: !menu.active
                }"
                :menu="menu"
                :formattedMenuState="[formattedMenu, setFormattedMenu]"
                level="first"
              ></Menu>
              <!-- BEGIN: Second Child -->
              <Transition @enter="() => enter" @leave="() => leave">
                <ul
                  v-if="menu.subMenu && menu.activeDropdown"
                  class="rounded-lg bg-black/10 dark:bg-darkmode-900/30"
                >
                  <li
                    v-for="(subMenu, subMenuKey) in menu.subMenu"
                    :key="subMenuKey"
                  >
                    <Menu
                      :class="{
                        // Animation
                        [`translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] opacity-0 animate-fill-mode-forwards animate-delay-${
                          (subMenuKey + 1) * 10
                        }`]: !subMenu.active
                      }"
                      :menu="subMenu"
                      :formattedMenuState="[formattedMenu, setFormattedMenu]"
                      level="second"
                    ></Menu>
                    <!-- BEGIN: Third Child -->
                    <Transition
                      @enter="() => enter"
                      @leave="() => leave"
                      v-if="subMenu.subMenu"
                    >
                      <ul
                        v-if="subMenu.subMenu && subMenu.activeDropdown"
                        class="rounded-lg bg-black/10 dark:bg-darkmode-900/30"
                      >
                        <li
                          v-for="(
                            lastSubMenu, lastSubMenuKey
                          ) in subMenu.subMenu"
                          :key="lastSubMenuKey"
                        >
                          <Menu
                            :class="{
                              // Animation
                              [`translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] opacity-0 animate-fill-mode-forwards animate-delay-${
                                (lastSubMenuKey + 1) * 10
                              }`]: !lastSubMenu.active
                            }"
                            :menu="lastSubMenu"
                            :formattedMenuState="[
                              formattedMenu,
                              setFormattedMenu
                            ]"
                            level="third"
                          ></Menu>
                        </li>
                      </ul>
                    </Transition>
                    <!-- END: Third Child -->
                  </li>
                </ul>
              </Transition>
              <!-- END: Second Child -->
            </li>
          </template>
          <!-- END: First Child -->
        </ul>
      </nav>
      <!-- END: Simple Menu -->
      <!-- BEGIN: Content -->
      <div
        class="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]"
      >
        <TopBar />
        <RouterView />
      </div>
      <!-- END: Content -->
    </div>
  </div>
</template>
