import { Router, RouteLocationNormalizedLoaded } from 'vue-router'
import { Menu } from '../../stores/side-menu'
import { slideUp, slideDown } from '../../utils/helper'

export interface Route extends RouteLocationNormalizedLoaded {
  forceActiveMenu?: string
}

export interface FormattedMenu extends Menu {
  active?: boolean
  activeDropdown?: boolean
  subMenu?: FormattedMenu[]
}

export type ProvideForceActiveMenu = (pageName: string) => void

const forceActiveMenu = (route: Route, pageName: string) => {
  route.forceActiveMenu = pageName
}

// Setup side menu
const findActiveMenu = (subMenu: Menu[], route: Route): boolean => {
  let match = false
  subMenu.forEach((item) => {
    if (
      ((route.forceActiveMenu !== undefined &&
        item.pageName === route.forceActiveMenu) ||
        (route.forceActiveMenu === undefined &&
          item.pageName === route.name)) &&
      !item.ignore
    ) {
      match = true
    } else if (!match && item.subMenu) {
      match = findActiveMenu(item.subMenu, route)
    }
  })
  return match
}

const nestedMenu = (menu: Array<Menu | 'divider'>, route: Route) => {
  const formattedMenu: Array<FormattedMenu | 'divider'> = []
  menu.forEach((item) => {
    if (typeof item !== 'string') {
      if (!showLinkDetailSubMenu(item, route)) {
        return
      }

      const menuItem: FormattedMenu = {
        icon: item.icon,
        title: item.title,
        pageName: item.pageName,
        subMenu: item.subMenu,
        ignore: item.ignore
      }
      menuItem.active =
        ((route.forceActiveMenu !== undefined &&
          menuItem.pageName === route.forceActiveMenu) ||
          (route.forceActiveMenu === undefined &&
            menuItem.pageName === route.name) ||
          (menuItem.subMenu && findActiveMenu(menuItem.subMenu, route))) &&
        !menuItem.ignore

      if (menuItem.subMenu) {
        menuItem.activeDropdown = findActiveMenu(menuItem.subMenu, route)

        // Nested menu
        const subMenu: Array<FormattedMenu> = []
        nestedMenu(menuItem.subMenu, route).map(
          (menu) => typeof menu !== 'string' && subMenu.push(menu)
        )
        menuItem.subMenu = subMenu
      }

      formattedMenu.push(menuItem)
    } else {
      formattedMenu.push(item)
    }
  })

  return formattedMenu
}

// TODO: Add all link detail routes here
/**
 * All routes that need to show the LinkDetail sub menu.
 */
const linkDetailRoutes = [
  'enterpoint-root',
  'enterpoint-customer',
  'enterpoint-setting',
  'enterpoint-advanced'
]

/**
 * Control the dynamic side menu with 'enterpoint'.
 */
const showLinkDetailSubMenu = (menu: FormattedMenu, route: Route) => {
  const { pageName } = menu
  if (!pageName) {
    return true
  }

  if (!linkDetailRoutes.includes(pageName)) {
    return true
  }

  return !!route.query.token
}

const linkTo = (menu: FormattedMenu, router: Router) => {
  const { pageName, subMenu } = menu
  if (subMenu) {
    menu.activeDropdown = !menu.activeDropdown
    return
  }

  if (!pageName) {
    return ''
  }

  // Handle the link with enterpoint token
  const { token } = router.currentRoute.value.query
  if (linkDetailRoutes.includes(pageName) && token) {
    return router.push({
      name: pageName,
      query: {
        token,
        type: 'direct'
      }
    })
  }

  return router.push({
    name: pageName
  })
}

const enter = (el: HTMLElement) => {
  slideDown(el, 300)
}

const leave = (el: HTMLElement) => {
  slideUp(el, 300)
}

export { nestedMenu, linkTo, enter, leave, forceActiveMenu }
