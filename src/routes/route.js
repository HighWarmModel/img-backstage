import config from '@/config'
import { arrageArrToObj, arrageObjToRouterTree } from '../lib/utils'
import routers from './module'
import { Login, Home, Error401, Error500, Error404 } from './baseRoute'
const { routerStorage } = config
let authRouterStorage = localStorage.getItem(routerStorage)
let routerArr = []
let pathRoute = {}
if (authRouterStorage) {
  authRouterStorage = JSON.parse(authRouterStorage)
  routerArr = [...routerArr, ...authRouterStorage]
  routerArr = arrageObjToRouterTree({ obj: arrageArrToObj(authRouterStorage), parentId: 0, routers, pathRoute })
  routerArr.push(Error401)
  pathRoute[Error401.name] = Error401
}
let routes = [
  Login,
  {
    path: '/home',
    name: '_home',
    alias: '/',
    component: () => import(/* webpackChunkName: "container" */'@c/container'),
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [Home]
  },
  ...routerArr,
  Error500,
  Error404
]
pathRoute = {
  ...pathRoute,
  [Login.name]: Login,
  [Home.name]: Home,
  [Error401.name]: Error401,
  [Error500.name]: Error500,
  [Error404.name]: Error404
}
export {
  routes,
  pathRoute
}
