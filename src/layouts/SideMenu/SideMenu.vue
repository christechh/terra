<script setup lang="ts">
import { useRoute } from 'vue-router'
import logoUrl from '../../assets/images/logo_dark_v6.png'
import logoUrlM from '../../assets/images/logo_dark_v6_m.png'
import TopBar from '../../components/TopBar'
import Divider from './Divider.vue'
import Menu from './Menu.vue'
// import DarkModeSwitcher from "../../components/DarkModeSwitcher";
// import MainColorSwitcher from "../../components/MainColorSwitcher";
// import MobileMenu from "../../components/MobileMenu";
import { computed, onMounted, provide, ref, watch } from 'vue'
import CommonModal from '../../components/Modals/CommonModal'
import CommonNotifications from '../../components/Notifications/CommonNotifications'
import RedirectTo from '../../components/RedirectTo'
import { useSideMenuStore } from '../../stores/side-menu'
import {
  FormattedMenu,
  ProvideForceActiveMenu,
  Route,
  enter,
  forceActiveMenu,
  leave,
  nestedMenu
} from './side-menu'

const route: Route = useRoute()
let formattedMenu = ref<Array<FormattedMenu | 'divider'>>([])
// TODO: Check if this is needed
const setFormattedMenu = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  computedFormattedMenu: Array<FormattedMenu | 'divider'>
) => {
  // formattedMenu.value = computedFormattedMenu
}
const sideMenuStore = useSideMenuStore()
const sideMenu = computed(() => nestedMenu(sideMenuStore.menu, route))

provide<ProvideForceActiveMenu>('forceActiveMenu', (pageName: string) => {
  forceActiveMenu(route, pageName)
  setFormattedMenu(sideMenu.value)
})

watch(sideMenu, () => {
  formattedMenu.value = sideMenu.value
  // setFormattedMenu(sideMenu.value)
})

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu
  }
)

onMounted(() => {
  formattedMenu.value = sideMenu.value
  // setFormattedMenu(sideMenu.value)
})
</script>

<template>
  <div class="py-2">
    <!-- <DarkModeSwitcher />
    <MainColorSwitcher />
    <MobileMenu /> -->
    <div class="mt-[4.7rem] flex md:mt-0">
      <!-- BEGIN: Side Menu -->
      <nav
        class="hidden w-[85px] overflow-x-hidden pb-16 pr-2 md:block xl:w-[230px]"
        v-if="!$route.meta.noLayout"
      >
        <RouterLink
          :to="{ name: 'landing-page' }"
          class="intro-x flex items-center pl-5 pt-4"
        >
          <img
            alt="Pinchat"
            class="w-100 hidden xl:block"
            style="max-width: 160px"
            :src="logoUrl"
          />
          <img alt="Pinchat" class="xl:hidden" width="32" :src="logoUrlM" />
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
                  class="mt-2 rounded-lg bg-dashboard_bg dark:bg-darkmode-900/30"
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
      <!-- END: Side Menu -->
      <!-- BEGIN: Content -->
      <div
        :class="[
          'md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px]  before:block before:h-px before:w-full dark:bg-darkmode-700 ',
          route.meta.noLayout
            ? 'bg-transparent p-0'
            : 'bg-dashboard_bg px-4 pb-10 md:px-[22px]'
        ]"
      >
        <TopBar />
        <RouterView />
      </div>
      <!-- END: Content -->
      <CommonModal />
      <CommonNotifications />
      <RedirectTo />
    </div>
  </div>
</template>
