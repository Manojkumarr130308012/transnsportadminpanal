import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: '',
    title: 'MENUITEMS.HOME.TEXT',
    moduleName: 'dashboard',
    iconType: 'feather',
    icon: 'monitor',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [
      {
        path: '/dashboard/main',
        title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [],
      }
    ],
  },
  {
    path: 'Customer',
    title: 'Customer',
    moduleName: 'Customer',
    iconType: 'feather',
    icon: 'copy',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: 'User',
    title: 'User',
    moduleName: 'User',
    iconType: 'feather',
    icon: 'trello',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: 'GoodsType',
    title: 'GoodsType',
    moduleName: 'Goodstype',
    iconType: 'feather',
    icon: 'server',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: 'Vechicle',
    title: 'Vechicle',
    moduleName: 'Vechicle',
    iconType: 'feather',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  // {
  //   path: '',
  //   title: '-- Pages',
  //   moduleName: '',
  //   iconType: '',
  //   icon: '',
  //   class: '',
  //   groupTitle: true,
  //   badge: '',
  //   badgeClass: '',
  //   submenu: [],
  // },



  
  


];