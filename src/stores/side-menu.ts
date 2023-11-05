import { defineStore } from 'pinia'
import { Icon } from '../base-components/Lucide/Lucide.vue'
import i18n from '../i18n'
export interface Menu {
  icon: Icon
  title: string
  pageName?: string
  subMenu?: Menu[]
  ignore?: boolean
}

export interface SideMenuState {
  menu: Array<Menu | 'divider'>
}

export const useSideMenuStore = defineStore('sideMenu', {
  state: (): SideMenuState => ({
    menu: [
      {
        icon: 'BookOpen',
        pageName: 'links',
        title: i18n.global.t('my-links')
      }
    ]
  })
})
