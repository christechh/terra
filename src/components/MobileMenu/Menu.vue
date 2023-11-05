<script setup lang="ts">
import { useRouter } from 'vue-router'
import Lucide from '../../base-components/Lucide'
import { FormattedMenu } from '../../layouts/SideMenu/side-menu'
import { linkTo } from './mobile-menu'
defineOptions({
  inheritAttrs: false
})
interface MenuProps {
  menu: FormattedMenu
  formattedMenuState: [
    (FormattedMenu | 'divider')[],
    (computedFormattedMenu: Array<FormattedMenu | 'divider'>) => void
  ]
  level: 'first' | 'second' | 'third'
  setActiveMobileMenu: (active: boolean) => void
}

const router = useRouter()
const props = defineProps<MenuProps>()
const [formattedMenu, setFormattedMenu] = props.formattedMenuState
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
      'flex h-[50px] items-center text-white',
      props.level == 'first' && 'px-6',
      props.level != 'first' && 'px-4'
    ]"
    @click="
      (event) => {
        event.preventDefault()
        linkTo(props.menu, router, props.setActiveMobileMenu)
        setFormattedMenu([...formattedMenu])
      }
    "
  >
    <div>
      <Lucide :icon="props.menu.icon" />
    </div>
    <div class="ml-3 flex w-full items-center">
      {{ props.menu.title }}
      <div
        v-if="props.menu.subMenu"
        :class="[
          'ml-auto transition duration-100 ease-in',
          props.menu.activeDropdown && 'rotate-180 transform'
        ]"
      >
        <Lucide icon="ChevronDown" class="h-5 w-5" />
      </div>
    </div>
  </a>
</template>
