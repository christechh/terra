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
      },
      {
        icon: 'AlignJustify',
        title: i18n.global.t('menu-enterpoint1'),
        pageName: 'enterpoint-root',
        subMenu: [
          {
            icon: 'UserCog',
            pageName: 'enterpoint-setting',
            title: i18n.global.t('menu-enterpoint2')
          },
          {
            icon: 'UserCog',
            pageName: 'enterpoint-customer',
            title: i18n.global.t('menu-enterpoint4')
          }
        ]
      },
      {
        icon: 'Settings',
        title: i18n.global.t('breadcrumbs-label2'),
        subMenu: [
          {
            icon: 'UserCircle2',
            pageName: 'settings-account',
            title: i18n.global.t('account-management')
          },
          {
            icon: 'Users',
            pageName: 'settings-sub_account',
            title: i18n.global.t('subaccount-section1-title')
          }
        ]
      }
    ]
  })
})
