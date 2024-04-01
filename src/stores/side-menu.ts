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
        title: '首頁(缺文字及教學影片)'
      },
      {
        icon: 'Building2',
        pageName: 'Company',
        title: '公司管理'
      },
      {
        icon: 'Users',
        pageName: 'User',
        title: '人事管理'
      },
      {
        icon: 'ScrollText',
        title: '勞務管理',
        subMenu: [
          {
            icon: 'ScrollText',
            pageName: 'Labor',
            title: '勞報單(會連到舊系統)'
          },
          {
            icon: 'Briefcase',
            pageName: 'account',
            title: '合作廠商(會連到舊系統)'
          }
        ]
      },
      {
        icon: 'Banknote',
        title: '薪資小工具',
        subMenu: [
          {
            icon: 'Banknote',
            pageName: 'SalaryGroupList',
            title: '薪資管理'
          },
          {
            icon: 'CalendarPlus',
            pageName: 'WorkRecordList',
            title: '加班/兼職出勤'
          },
          {
            icon: 'CircleDollarSign',
            pageName: 'SalaryExtend',
            title: '薪資科別加減項'
          },
          {
            icon: 'CalendarClock',
            pageName: 'UserLeave',
            title: '假勤申請'
          },
          {
            icon: 'Settings',
            pageName: 'Leave',
            title: '假勤設定'
          }
        ]
      }
      // {
      //   icon: 'ListChecks',
      //   pageName: 'Financial',
      //   title: '財務報表'
      // },
      // {
      //   icon: 'LineChart',
      //   pageName: 'Report',
      //   title: '報表分析'
      // }
    ]
  })
})
