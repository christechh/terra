<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
import _ from 'lodash'
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logoUrl from '../../assets/images/logo.svg'
import Breadcrumb from '../../base-components/Breadcrumb'
import { FormInput } from '../../base-components/Form'
import { Menu, Popover } from '../../base-components/Headless'
import Lucide from '../../base-components/Lucide'
import DarkModeSwitcher from '../../components/DarkModeSwitcher'
import MainColorSwitcher from '../../components/MainColorSwitcher'
import MobileMenu from '../../components/MobileMenu'
import { useTopMenuStore } from '../../stores/top-menu'
import fakerData from '../../utils/faker'
import MenuLink from './MenuLink.vue'
import {
  FormattedMenu,
  ProvideForceActiveMenu,
  Route,
  forceActiveMenu,
  nestedMenu
} from './top-menu'

const searchDropdown = ref(false)
const showSearchDropdown = () => {
  searchDropdown.value = true
}
const hideSearchDropdown = () => {
  searchDropdown.value = false
}
const route: Route = useRoute()
let formattedMenu = reactive<Array<FormattedMenu>>([])
const setFormattedMenu = (computedFormattedMenu: Array<FormattedMenu>) => {
  Object.assign(formattedMenu, computedFormattedMenu)
}
const topMenuStore = useTopMenuStore()
const topMenu = computed(() => nestedMenu(topMenuStore.menu, route))

provide<ProvideForceActiveMenu>('forceActiveMenu', (pageName: string) => {
  forceActiveMenu(route, pageName)
  setFormattedMenu(topMenu.value)
})

watch(topMenu, () => {
  setFormattedMenu(topMenu.value)
})

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu
  }
)

onMounted(() => {
  setFormattedMenu(topMenu.value)
})
</script>

<template>
  <div class="py-2">
    <DarkModeSwitcher />
    <MainColorSwitcher />
    <MobileMenu />
    <!-- BEGIN: Top Bar -->
    <div
      class="-mx-3 mb-10 mt-[2.2rem] border-b border-white/[0.08] px-3 pt-3 sm:-mx-8 sm:px-8 md:-mt-5 md:pt-0"
    >
      <div class="relative z-[51] flex h-[70px] items-center">
        <!-- BEGIN: Logo -->
        <RouterLink
          :to="{ name: 'top-menu-page-1' }"
          class="-intro-x hidden md:flex"
        >
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="w-6"
            :src="logoUrl"
          />
          <span class="ml-3 text-lg text-white"> Rubick </span>
        </RouterLink>
        <!-- END: Logo -->
        <!-- BEGIN: Breadcrumb -->
        <Breadcrumb
          light
          class="-intro-x mr-auto h-full border-white/[0.08] md:ml-10 md:border-l md:pl-10"
        >
          <Breadcrumb.Link to="/">Application</Breadcrumb.Link>
          <Breadcrumb.Link to="/" :active="true"> Dashboard </Breadcrumb.Link>
        </Breadcrumb>
        <!-- END: Breadcrumb -->
        <!-- BEGIN: Search -->
        <div class="intro-x relative mr-3 sm:mr-6">
          <div class="hidden sm:block">
            <FormInput
              type="text"
              class="w-56 rounded-full border-transparent bg-slate-200 pr-8 shadow-none transition-[width] duration-300 ease-in-out focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"
              placeholder="Search..."
              @focus="showSearchDropdown"
              @blur="hideSearchDropdown"
            />
            <Lucide
              icon="Search"
              class="absolute inset-y-0 right-0 my-auto mr-3 h-5 w-5 text-slate-600 dark:text-slate-500"
            />
          </div>
          <a class="relative text-white/70 sm:hidden" href="">
            <Lucide icon="Search" class="h-5 w-5 dark:text-slate-500" />
          </a>
          <TransitionRoot
            as="template"
            :show="searchDropdown"
            enter="transition-all ease-linear duration-150"
            enterFrom="mt-5 invisible opacity-0 translate-y-1"
            enterTo="mt-[3px] visible opacity-100 translate-y-0"
            entered="mt-[3px]"
            leave="transition-all ease-linear duration-150"
            leaveFrom="mt-[3px] visible opacity-100 translate-y-0"
            leaveTo="mt-5 invisible opacity-0 translate-y-1"
          >
            <div class="absolute right-0 z-10 mt-[3px]">
              <div class="box w-[450px] p-5">
                <div class="mb-2 font-medium">Pages</div>
                <div class="mb-5">
                  <a href="" class="flex items-center">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success dark:bg-success/10"
                    >
                      <Lucide icon="Inbox" class="h-4 w-4" />
                    </div>
                    <div class="ml-3">Mail Settings</div>
                  </a>
                  <a href="" class="mt-2 flex items-center">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-pending/10 text-pending"
                    >
                      <Lucide icon="Users" class="h-4 w-4" />
                    </div>
                    <div class="ml-3">Users & Permissions</div>
                  </a>
                  <a href="" class="mt-2 flex items-center">
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary/80 dark:bg-primary/20"
                    >
                      <Lucide icon="CreditCard" class="h-4 w-4" />
                    </div>
                    <div class="ml-3">Transactions Report</div>
                  </a>
                </div>
                <div class="mb-2 font-medium">Users</div>
                <div class="mb-5">
                  <a
                    v-for="(faker, fakerKey) in _.take(fakerData, 4)"
                    :key="fakerKey"
                    href=""
                    class="mt-2 flex items-center"
                  >
                    <div class="image-fit h-8 w-8">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        :src="faker.photos[0]"
                      />
                    </div>
                    <div class="ml-3">{{ faker.users[0].name }}</div>
                    <div
                      class="ml-auto w-48 truncate text-right text-xs text-slate-500"
                    >
                      {{ faker.users[0].email }}
                    </div>
                  </a>
                </div>
                <div class="mb-2 font-medium">Products</div>
                <a
                  v-for="(faker, fakerKey) in _.take(fakerData, 4)"
                  :key="fakerKey"
                  href=""
                  class="mt-2 flex items-center"
                >
                  <div class="image-fit h-8 w-8">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      class="rounded-full"
                      :src="faker.images[0]"
                    />
                  </div>
                  <div class="ml-3">{{ faker.products[0].name }}</div>
                  <div
                    class="ml-auto w-48 truncate text-right text-xs text-slate-500"
                  >
                    {{ faker.products[0].category }}
                  </div>
                </a>
              </div>
            </div>
          </TransitionRoot>
        </div>
        <!-- END: Search -->
        <!-- BEGIN: Notifications -->
        <Popover class="intro-x mr-4 sm:mr-6">
          <Popover.Button
            class="relative block text-white/70 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"
          >
            <Lucide icon="Bell" class="h-5 w-5 dark:text-slate-500" />
          </Popover.Button>
          <Popover.Panel class="mt-2 w-[280px] p-5 sm:w-[350px]">
            <div class="mb-5 font-medium">Notifications</div>
            <div
              v-for="(faker, fakerKey) in _.take(fakerData, 5)"
              :key="fakerKey"
              :class="[
                'relative flex cursor-pointer items-center',
                { 'mt-5': fakerKey }
              ]"
            >
              <div class="image-fit relative mr-1 h-12 w-12 flex-none">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  :src="faker.photos[0]"
                />
                <div
                  class="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="" class="mr-5 truncate font-medium">
                    {{ faker.users[0].name }}
                  </a>
                  <div class="ml-auto whitespace-nowrap text-xs text-slate-400">
                    {{ faker.times[0] }}
                  </div>
                </div>
                <div class="mt-0.5 w-full truncate text-slate-500">
                  {{ faker.news[0].shortContent }}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
        <!-- END: Notifications -->
        <!-- BEGIN: Account Menu3 -->
        <Menu>
          <Menu.Button
            class="image-fit zoom-in intro-x block h-8 w-8 scale-110 overflow-hidden rounded-full shadow-lg"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              :src="fakerData[9].photos[0]"
            />
          </Menu.Button>
          <Menu.Items
            class="relative mt-px w-56 bg-primary/80 text-white before:absolute before:inset-0 before:z-[-1] before:block before:rounded-md before:bg-black"
          >
            <Menu.Header class="font-normal">
              <div class="font-medium">{{ fakerData[0].users[0].name }}</div>
              <div class="mt-0.5 text-xs text-white/70 dark:text-slate-500">
                {{ fakerData[0].jobs[0] }}
              </div>
            </Menu.Header>
            <Menu.Divider class="bg-white/[0.08]" />
            <Menu.Item class="hover:bg-white/5">
              <Lucide icon="User" class="mr-2 h-4 w-4" /> Profile
            </Menu.Item>
            <Menu.Item class="hover:bg-white/5">
              <Lucide icon="Edit" class="mr-2 h-4 w-4" /> Add Account
            </Menu.Item>
            <Menu.Item class="hover:bg-white/5">
              <Lucide icon="Lock" class="mr-2 h-4 w-4" /> Reset Password
            </Menu.Item>
            <Menu.Item class="hover:bg-white/5">
              <Lucide icon="HelpCircle" class="mr-2 h-4 w-4" /> Help
            </Menu.Item>
            <Menu.Divider class="bg-white/[0.08]" />
            <Menu.Item class="hover:bg-white/5">
              <Lucide icon="ToggleRight" class="mr-2 h-4 w-4" /> Logout
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <!-- END: Account Menu4 -->
      </div>
    </div>
    <!-- END: Top Bar -->
    <!-- BEGIN: Top Menu -->
    <nav class="relative z-50 hidden md:block">
      <ul class="flex flex-wrap pb-3 xl:px-[50px] xl:pb-0">
        <li
          v-for="(menu, menuKey) in formattedMenu"
          :key="menuKey"
          :class="[
            'relative [&:hover>a>div:nth-child(2)>svg]:-rotate-90 [&:hover>ul]:block',
            {
              '[&:hover>a>div:nth-child(1)]:before:bg-white/5 [&:hover>a>div:nth-child(1)]:before:dark:bg-darkmode-500/70':
                !menu.active
            }
          ]"
        >
          <MenuLink
            :class="{
              [`translate-y-[50px] animate-[0.4s_ease-in-out_0.3s_intro-menu] opacity-0 animate-fill-mode-forwards animate-delay-${
                (menuKey + 1) * 10
              }`]: !menu.active
            }"
            :menu="menu"
            level="first"
          ></MenuLink>
          <!-- BEGIN: Second Child -->

          <ul
            v-if="menu.subMenu"
            class="absolute top-0 z-20 mt-14 hidden w-56 rounded-md bg-primary px-0 shadow-[0px_3px_20px_#0000000b] before:absolute before:inset-0 before:z-[-1] before:block before:h-full before:w-full before:rounded-md before:bg-black/10 dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c] xl:left-[100%] xl:-ml-[4px] xl:-mt-5"
          >
            <li
              v-for="(subMenu, subMenuKey) in menu.subMenu"
              class="relative px-5 [&:hover>a>div:nth-child(2)>svg]:-rotate-90 [&:hover>ul]:block"
              :key="subMenuKey"
            >
              <MenuLink :menu="subMenu" level="second"></MenuLink>
              <!-- BEGIN: Third Child -->
              <ul
                v-if="subMenu.subMenu"
                :class="[
                  'absolute left-[100%] top-0 z-20 ml-0 mt-0 hidden w-56 rounded-md bg-primary px-0 shadow-[0px_3px_20px_#0000000b] before:absolute before:inset-0 before:z-[-1] before:block before:h-full before:w-full before:rounded-md before:bg-black/10 dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c]'
                ]"
              >
                <li
                  v-for="(lastSubMenu, lastSubMenuKey) in subMenu.subMenu"
                  class="relative px-5 [&:hover>a>div:nth-child(2)>svg]:-rotate-90 [&:hover>ul]:block"
                  :key="lastSubMenuKey"
                >
                  <MenuLink :menu="lastSubMenu" level="third"></MenuLink>
                </li>
              </ul>
              <!-- END: Third Child -->
            </li>
          </ul>
          <!-- END: Second Child -->
        </li>
      </ul>
    </nav>
    <!-- END: Top Menu -->
    <!-- BEGIN: Content -->
    <div
      class="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]"
    >
      <RouterView />
    </div>
    <!-- END: Content -->
  </div>
</template>
