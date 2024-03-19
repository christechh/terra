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
        icon: 'Building2',
        pageName: 'Company',
        title: i18n.global.t('公司管理')
      },
      {
        icon: 'Users',
        pageName: 'User',
        title: i18n.global.t('人事管理')
      },
      {
        icon: 'ScrollText',
        title: i18n.global.t('勞務管理'),
        subMenu: [
          {
            icon: 'ScrollText',
            pageName: 'Labor',
            title: i18n.global.t('勞報單')
          },
          {
            icon: 'Briefcase',
            pageName: 'account',
            title: i18n.global.t('合作廠商')
          }
        ]
      },
      {
        icon: 'Banknote',
        title: i18n.global.t('薪資小工具'),
        subMenu: [
          {
            icon: 'Banknote',
            pageName: 'Salary',
            title: i18n.global.t('薪資管理')
          },
          {
            icon: 'Tent',
            pageName: 'holiday',
            title: i18n.global.t('假勤管理')
          }
        ]
      },
      {
        icon: 'ListChecks',
        pageName: 'Financial',
        title: i18n.global.t('財務報表')
      },
      {
        icon: 'LineChart',
        pageName: 'Report',
        title: i18n.global.t('報表分析')
      }
    ]
  })
})
