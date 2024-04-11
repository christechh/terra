<script setup lang="ts">
import { useRoute } from 'vue-router'
import { twMerge } from 'tailwind-merge'
import logoUrl from '../../assets/images/logo.svg'
import Divider from './Divider.vue'
import Menu from './Menu.vue'
import Lucide from '../../base-components/Lucide'
import { useSideMenuStore } from '../../stores/side-menu'
import {
  FormattedMenu,
  nestedMenu,
  enter,
  leave
} from '../../layouts/SideMenu/side-menu'
import { watch, reactive, computed, onMounted, ref } from 'vue'
import SimpleBar from 'simplebar'

const route = useRoute()
let formattedMenu = reactive<Array<FormattedMenu | 'divider'>>([])
const setFormattedMenu = (
  computedFormattedMenu: Array<FormattedMenu | 'divider'>
) => {
  Object.assign(formattedMenu, computedFormattedMenu)
}
const sideMenuStore = useSideMenuStore()
const sideMenu = computed(() => nestedMenu(sideMenuStore.filteredMenu, route))

const activeMobileMenu = ref(false)
const setActiveMobileMenu = (active: boolean) => {
  activeMobileMenu.value = active
}

const scrollableRef = ref<HTMLDivElement>()

watch(sideMenu, () => {
  setFormattedMenu(sideMenu.value)
})

onMounted(() => {
  if (scrollableRef.value) {
    new SimpleBar(scrollableRef.value)
  }

  setFormattedMenu(sideMenu.value)
})
</script>

<template>
  <!-- BEGIN: Mobile Menu -->
  <div
    :class="[
      'fixed z-[60] -mx-3 -mt-5 mb-6 w-full border-b border-white/[0.08] bg-primary/90 dark:bg-darkmode-800/90 sm:-mx-8 md:hidden',
      'before:fixed before:inset-x-0 before:z-10 before:h-screen before:w-full before:bg-black/90 before:transition-opacity before:duration-200 before:ease-in-out before:content-[\'\']',
      !activeMobileMenu && 'before:invisible before:opacity-0',
      activeMobileMenu && 'before:visible before:opacity-100'
    ]"
  >
    <div class="flex h-[70px] items-center px-3 sm:px-8">
      <a href="" class="mr-auto flex">
        <img
          alt="Midone Tailwind HTML Admin Template"
          class="w-6"
          :src="logoUrl"
        />
      </a>
      <a href="#" @click="(e) => e.preventDefault()">
        <Lucide
          icon="BarChart2"
          class="h-8 w-8 -rotate-90 transform text-white"
          @click="
            () => {
              setActiveMobileMenu(!activeMobileMenu)
            }
          "
        />
      </a>
    </div>
    <div
      ref="scrollableRef"
      :class="
        twMerge([
          'left-0 top-0 z-20 -ml-[100%] h-screen w-[270px] bg-primary transition-all duration-300 ease-in-out dark:bg-darkmode-800',
          '[&[data-simplebar]]:fixed [&_.simplebar-scrollbar]:before:bg-black/50',
          activeMobileMenu && 'ml-0'
        ])
      "
    >
      <a
        href="#"
        @click="(e) => e.preventDefault()"
        :class="[
          'fixed right-0 top-0 mr-4 mt-4 transition-opacity duration-200 ease-in-out',
          !activeMobileMenu && 'invisible opacity-0',
          activeMobileMenu && 'visible opacity-100'
        ]"
      >
        <Lucide
          icon="XCircle"
          class="h-8 w-8 -rotate-90 transform text-white"
          @click="
            () => {
              setActiveMobileMenu(!activeMobileMenu)
            }
          "
        />
      </a>
      <ul class="py-2">
        <!-- BEGIN: First Child -->
        <template v-for="(menu, menuKey) in formattedMenu">
          <Divider
            v-if="menu == 'divider'"
            as="li"
            class="my-6"
            :key="'divider-' + menuKey"
          ></Divider>
          <li v-else :key="menuKey">
            <Menu
              :menu="menu"
              :formattedMenuState="[formattedMenu, setFormattedMenu]"
              level="first"
              :setActiveMobileMenu="setActiveMobileMenu"
            ></Menu>
            <!-- BEGIN: Second Child -->
            <Transition
              @enter="() => enter"
              @leave="() => leave"
              v-if="menu.subMenu"
            >
              <ul
                v-if="menu.subMenu && menu.activeDropdown"
                :class="[
                  'mx-4 my-1 rounded-lg bg-black/10 dark:bg-darkmode-700',
                  !menu.activeDropdown && 'hidden',
                  menu.activeDropdown && 'block'
                ]"
              >
                <li
                  v-for="(subMenu, subMenuKey) in menu.subMenu"
                  class="mx-auto w-full max-w-[1280px]"
                  :key="subMenuKey"
                >
                  <Menu
                    :menu="subMenu"
                    :formattedMenuState="[formattedMenu, setFormattedMenu]"
                    level="second"
                    :setActiveMobileMenu="setActiveMobileMenu"
                  ></Menu>
                  <!-- BEGIN: Third Child -->
                  <Transition
                    @enter="() => enter"
                    @leave="() => leave"
                    v-if="subMenu.subMenu"
                  >
                    <ul
                      v-if="subMenu.subMenu && subMenu.activeDropdown"
                      :class="[
                        'my-1 rounded-lg bg-black/10 dark:bg-darkmode-600',
                        !subMenu.activeDropdown && 'hidden',
                        subMenu.activeDropdown && 'block'
                      ]"
                    >
                      <li
                        v-for="(lastSubMenu, lastSubMenuKey) in subMenu.subMenu"
                        class="mx-auto w-full max-w-[1280px]"
                        :key="lastSubMenuKey"
                      >
                        <Menu
                          :menu="lastSubMenu"
                          :formattedMenuState="[
                            formattedMenu,
                            setFormattedMenu
                          ]"
                          level="third"
                          :setActiveMobileMenu="setActiveMobileMenu"
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
    </div>
  </div>
  <!-- END: Mobile Menu -->
</template>
