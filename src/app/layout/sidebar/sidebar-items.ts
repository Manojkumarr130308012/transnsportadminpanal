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
    path: 'State',
    title: 'State',
    moduleName: 'State',
    iconType: 'feather',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },{
    path: 'Company',
    title: 'Company',
    moduleName: 'Company',
    iconType: 'feather',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },{
    path: 'Branch',
    title: 'Branch',
    moduleName: 'Branch',
    iconType: 'feather',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: 'Designation',
    title: 'Designation',
    moduleName: 'Designation',
    iconType: 'feather',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: 'Users',
    title: 'Users',
    moduleName: 'Users',
    iconType: 'feather',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: 'Speciality',
    title: 'Speciality',
    moduleName: 'Speciality',
    iconType: 'feather',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: 'Department',
    title: 'Department',
    moduleName: 'Department',
    iconType: 'feather',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  }
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
