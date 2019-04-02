import config from '@/config'
const { routerStorage } = config
// import { arrageArrToObj, arrageObjToRouterTree } from '../lib/utils'
let authRouterStorage = localStorage.getItem(routerStorage)
let routerArr = []
if (authRouterStorage) {
  authRouterStorage = JSON.parse(authRouterStorage)
  routerArr = [...routerArr, ...authRouterStorage]
  routerArr.push({
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import(/* webpackChunkName: "401" */'@v/error-page/401.vue')
  })
  // routerArr = arrageObjToRouterTree(arrageArrToObj(authRouterStorage), 0)
}
let routes = [
  {
    name: 'container',
    path: '/container',
    component: () => import(/* webpackChunkName: "container" */'@c/container/container.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */'@v/login/login')
  },
  {
    path: '/home',
    name: '_home',
    alias: '/',
    component: () => import(/* webpackChunkName: "container" */'@c/container'),
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import(/* webpackChunkName: "home" */'@v/home/home')
      }
    ]
  },
  ...routerArr,
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import(/* webpackChunkName: "500" */'@v/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import(/* webpackChunkName: "404" */'@v/error-page/404.vue')
  }
]
export default routes
