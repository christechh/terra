<script setup lang="ts">
import { useRouter } from 'vue-router'
import Lucide from '../../base-components/Lucide'
import SideMenuTooltip from './SideMenuTooltip.vue'
import { FormattedMenu, linkTo } from './side-menu'
defineOptions({
  inheritAttrs: false
})
interface MenuProps {
  class?: string | object
  menu: FormattedMenu
  formattedMenuState: [
    (FormattedMenu | 'divider')[],
    (computedFormattedMenu: Array<FormattedMenu | 'divider'>) => void
  ]
  level: 'first' | 'second' | 'third'
}

const router = useRouter()
const props = defineProps<MenuProps>()
const [formattedMenu, setFormattedMenu] = props.formattedMenuState
</script>

<template>
  <SideMenuTooltip
    :content="props.menu.title"
    :class="[
      'relative mb-1 flex h-[50px] items-center rounded-full pl-5',
      {
        'text-primary dark:text-slate-300':
          props.menu.active && props.level != 'first',
        'text-black dark:text-slate-400':
          !props.menu.active && props.level != 'first',
        'z-10 bg-slate-100 dark:bg-darkmode-700':
          props.menu.active && props.level == 'first',
        'before:absolute before:right-0 before:top-0 before:-mr-5 before:-mt-[30px] before:h-[30px] before:w-[30px] before:rotate-90 before:scale-[1.04] before:bg-menu-corner before:bg-[length:100%] before:content-[\'\'] dark:before:bg-menu-corner-dark':
          props.menu.active && props.level == 'first',
        'after:absolute after:right-0 after:top-0 after:-mr-5 after:mt-[50px] after:h-[30px] after:w-[30px] after:scale-[1.04] after:bg-menu-corner after:bg-[length:100%] after:content-[\'\'] dark:after:bg-menu-corner-dark':
          props.menu.active && props.level == 'first',
        '[&>div:nth-child(1)]:hover:before:bg-white/5 [&>div:nth-child(1)]:hover:before:dark:bg-darkmode-500/70':
          !props.menu.active &&
          !props.menu.activeDropdown &&
          props.level == 'first'
      },
      props.class
    ]"
    @click="
      (event) => {
        event.preventDefault()
        linkTo(props.menu, router)
        setFormattedMenu([...formattedMenu])
      }
    "
  >
    <div
      :class="{
        'text-primary dark:text-slate-300':
          props.menu.active && props.level == 'first' && !props.menu.subMenu,
        'text-black dark:text-slate-400':
          !props.menu.active && props.level == 'first',
        'before:absolute before:right-0 before:top-0 before:z-[-1] before:-mr-5 before:h-full before:w-12 before:bg-slate-100 before:content-[\'\'] before:dark:bg-darkmode-700':
          props.menu.active && props.level == 'first',
        'before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[230px] before:rounded-l-full before:transition before:duration-100 before:ease-in before:content-[\'\']':
          !props.menu.activeDropdown &&
          !props.menu.active &&
          props.level == 'first'
      }"
    >
      <Lucide :icon="props.menu.icon" />
    </div>
    <div
      :class="[
        'ml-3 hidden w-full items-center xl:flex',
        { 'font-medium': props.menu.active && props.level != 'first' },
        {
          'font-medium text-primary dark:text-slate-300':
            props.menu.active && props.level == 'first' && !props.menu.subMenu
        },
        { 'dark:text-slate-400': !props.menu.active && props.level == 'first' }
      ]"
    >
      {{ props.menu.title }}

      <div
        v-if="props.menu.subMenu"
        :class="[
          'ml-auto mr-5 hidden transition duration-100 ease-in xl:block',
          { 'rotate-180 transform': props.menu.activeDropdown }
        ]"
      >
        <Lucide class="h-4 w-4" icon="ChevronDown" />
      </div>
    </div>
  </SideMenuTooltip>
</template>
