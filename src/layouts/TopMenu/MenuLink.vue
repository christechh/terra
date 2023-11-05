<script setup lang="ts">
import { useRouter } from 'vue-router'
import Lucide from '../../base-components/Lucide'
import { FormattedMenu, linkTo } from './top-menu'
defineOptions({
  inheritAttrs: false
})
interface MenuProps {
  class?: string | object
  menu: FormattedMenu
  level: 'first' | 'second' | 'third'
}

const router = useRouter()
const props = defineProps<MenuProps>()
</script>

<template>
  <a
    :href="
      props.menu.subMenu
        ? '#'
        : ((pageName: string | undefined) => {
            try {
              return router.resolve({
                name: pageName
              }).fullPath
            } catch (err) {
              return ''
            }
          })(props.menu.pageName)
    "
    :class="[
      'relative flex h-[55px] items-center rounded-full text-white xl:rounded-b-none xl:rounded-t-[1rem]',
      {
        'mr-1 px-5': props.level == 'first',
        'mr-0 px-0': props.level != 'first',

        'z-10 bg-slate-100 dark:bg-darkmode-700':
          props.level == 'first' && props.menu.active,

        'before:absolute before:bottom-0 before:left-0 before:-ml-[20px] before:hidden before:h-[20px] before:w-[20px] before:rotate-90 before:scale-[1.04] before:bg-menu-corner before:bg-[length:100%] before:content-[\'\'] dark:before:bg-menu-corner-dark before:xl:block':
          props.level == 'first' && props.menu.active,
        'after:absolute after:bottom-0 after:right-0 after:-mr-[20px] after:hidden after:h-[20px] after:w-[20px] after:rotate-180 after:scale-[1.04] after:bg-menu-corner after:bg-[length:100%] after:content-[\'\'] dark:after:bg-menu-corner-dark after:xl:block':
          props.level == 'first' && props.menu.active
      },
      props.class
    ]"
    @click="
      (event: MouseEvent) => {
        event.preventDefault()

        linkTo(props.menu, router)
      }
    "
  >
    <div
      :class="[
        'dark:text-slate-400',
        {
          'text-primary dark:text-white':
            props.level == 'first' && props.menu.active,

          'before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-full before:transition before:duration-100 before:ease-in before:content-[\'\'] xl:before:rounded-b-none xl:before:rounded-t-lg':
            !props.menu.active
        }
      ]"
    >
      <Lucide :icon="props.menu.icon" />
    </div>
    <div
      :class="[
        'ml-3 flex items-center whitespace-nowrap dark:text-slate-400',
        {
          'font-medium text-black dark:text-white':
            props.level == 'first' && props.menu.active,
          'w-full': props.level != 'first'
        }
      ]"
    >
      {{ props.menu.title }}
      <Lucide
        v-if="props.menu.subMenu"
        icon="ChevronDown"
        :class="[
          'hidden h-4 w-4 transition duration-100 ease-in xl:block',
          { 'ml-2': props.level == 'first' },
          { 'ml-auto': props.level != 'first' }
        ]"
      />
    </div>
  </a>
</template>
