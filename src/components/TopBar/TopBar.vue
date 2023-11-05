<script setup lang="ts">
import { ref, computed } from 'vue'
import Lucide from '../../base-components/Lucide'
import Breadcrumb from '../../base-components/Breadcrumb'
import { FormInput } from '../../base-components/Form'
import { Menu, Popover } from '../../base-components/Headless'
import fakerData from '../../utils/faker'
import _ from 'lodash'
import { TransitionRoot } from '@headlessui/vue'
import headPickUrl from '../../assets/images/logo.png'
import { useUserStore } from '../../stores/user'
import { useRoute } from 'vue-router'
const account = computed(() => useUserStore().getAccount)
const route = useRoute()
const searchDropdown = ref(false)
const showSearchDropdown = () => {
  searchDropdown.value = true
}
const hideSearchDropdown = () => {
  searchDropdown.value = false
}

const doLogout = () => {
  useUserStore().logout()
}
</script>

<template>
  <!-- BEGIN: Top Bar -->
  <div class="relative z-[51] flex h-[67px] items-center">
    <div class="text-lg font-bold text-black dark:text-white">
      {{ route.meta.title }}
    </div>
    <!-- BEGIN: Breadcrumb -->
    <Breadcrumb class="-intro-x mr-auto hidden sm:flex">
      <!-- <Breadcrumb.Link to="/">Application</Breadcrumb.Link> -->
      <!-- <Breadcrumb.Link to="/" :active="true"> Dashboard </Breadcrumb.Link> -->
    </Breadcrumb>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Search -->
    <div class="intro-x relative mr-3 sm:mr-6">
      <!-- <div class="relative hidden sm:block">
        <FormInput
          type="text"
          class="border-transparent w-56 shadow-none rounded-full bg-slate-300/50 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400/70"
          placeholder="Search..."
          @focus="showSearchDropdown"
          @blur="hideSearchDropdown"
        />
        <Lucide
          icon="Search"
          class="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500"
        />
      </div> -->
      <!-- <a class="relative text-slate-600 sm:hidden" href="">
        <Lucide icon="Search" class="w-5 h-5 dark:text-slate-500" />
      </a> -->
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
    <!-- END: Search  -->
    <!-- BEGIN: Notifications -->
    <!-- <Popover class="mr-auto intro-x sm:mr-6">
      <Popover.Button
        class="relative text-slate-600 outline-none block before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger"
      >
        <Lucide icon="Bell" class="w-5 h-5 dark:text-slate-500" />
      </Popover.Button>
      <Popover.Panel class="w-[280px] sm:w-[350px] p-5 mt-2">
        <div class="mb-5 font-medium">Notifications</div>
        <div
          v-for="(faker, fakerKey) in _.take(fakerData, 5)"
          :key="fakerKey"
          :class="[
            'cursor-pointer relative flex items-center',
            { 'mt-5': fakerKey },
          ]"
        >
          <div class="relative flex-none w-12 h-12 mr-1 image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              :src="faker.photos[0]"
            />
            <div
              class="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600"
            ></div>
          </div>
          <div class="ml-2 overflow-hidden">
            <div class="flex items-center">
              <a href="" class="mr-5 font-medium truncate">
                {{ faker.users[0].name }}
              </a>
              <div class="ml-auto text-xs text-slate-400 whitespace-nowrap">
                {{ faker.times[0] }}
              </div>
            </div>
            <div class="w-full truncate text-slate-500 mt-0.5">
              {{ faker.news[0].shortContent }}
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover> -->
    <!-- END: Notifications  -->
    <!-- BEGIN: Account Menu5 -->
    <Menu>
      <Menu.Button
        class="image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"
      >
        <img alt="Midone Tailwind HTML Admin Template" :src="headPickUrl" />
      </Menu.Button>
      <Menu.Items class="mt-px w-56 bg-primary text-white">
        <Menu.Header class="font-normal">
          <div class="font-medium">{{ account }}</div>
        </Menu.Header>
        <Menu.Divider class="bg-white/[0.08]" />
        <Menu.Item class="hover:bg-white/5" @click="doLogout">
          <Lucide icon="ToggleRight" class="mr-2 h-4 w-4" /> Logout
        </Menu.Item>
      </Menu.Items>
    </Menu>
  </div>
  <!-- END: Top Bar -->
</template>
