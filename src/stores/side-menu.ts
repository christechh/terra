import { defineStore } from 'pinia'
import { Icon } from '../base-components/Lucide/Lucide.vue'
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
        icon: 'Home',
        pageName: 'Dashboard',
        title: '首頁'
      },
      {
        icon: 'Building2',
        pageName: 'Company',
        title: '會員管理'
      },
      {
        icon: 'Users',
        pageName: 'User',
        title: '會員管理'
      },
      {
        icon: 'Settings',
        title: '設定管理',
        subMenu: [
          {
            icon: 'Banknote',
            pageName: 'SalaryGroupList',
            title: '廣告管理'
          },
          {
            icon: 'CalendarPlus',
            pageName: 'WorkRecordList',
            title: '手環匯率管理'
          },
          {
            icon: 'CircleDollarSign',
            pageName: 'SalaryExtend',
            title: '儲值方案管理'
          },
          {
            icon: 'CalendarClock',
            pageName: 'UserLeave',
            title: '幫助管理'
          },
          {
            icon: 'Settings',
            pageName: 'Leave',
            title: '意見管理'
          },
          {
            icon: 'Settings',
            pageName: 'Leave',
            title: '條款管理'
          }
        ]
      }
    ]
  })
})
