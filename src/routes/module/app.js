
/** ******************************** 组件 ******************/
const Container = () => import(/* webpackChunkName: "container */'@c/Container')
const ParentView = () => import(/* webpackChunkName: "parent-view" */'@c/parent-view')
/** ******************************** 页面 ******************/
// 关于
const About = {
  name: 'about',
  path: '/about',
  meta: {
    icon: 'about' // 图标
  },
  component: () => import(/* webpackChunkName: "About" */'@v/about/about.vue')
}
// 错误日志收集
const ErrorStore = {
  name: 'error_store',
  path: '/error-store',
  meta: {
    hideInMenu: true,
    icon: 'error_store' // 图标
  },
  component: () => import(/* webpackChunkName: "ErrorStore" */'@v/error-store/error-store.vue')
}

// 礼品采集
const GiftsPurchase = {
  name: 'gifts_purchase',
  path: '/gifts-purchase',
  meta: {
    hideInMenu: true,
    icon: 'gifts_purchase' // 图标
  },
  component: () => import(/* webpackChunkName: "GiftsPurchase" */'@v/goods-purchase/gifts-purchase/gifts-purchase.vue')
}

// 配件采集
const PartsPurchase = {
  name: 'gifts_purchase',
  path: '/gifts-purchase',
  meta: {
    hideInMenu: true,
    icon: 'gifts_purchase' // 图标
  },
  component: () => import(/* webpackChunkName: "PartsPurchase" */'@v/goods-purchase/gifts-purchase/gifts-purchase.vue')
}
// 个人信息
const PersonalInformation = () => import(/* webpackChunkName: "personalInformation" */'@v/personal-information/personal-information.vue')
// 权限设置
const JurisdictionSet = () => import(/* webpackChunkName: "JurisdictionSet" */'@v/settings/jurisdiction-set.vue')
// 用户列表
const UsersList = () => import(/* webpackChunkName: "userList" */'@v/settings/users-list.vue')
// import { arrageObjToRouterTree, arrageArrToObj } from '@/lib/utils'
/**
 *
      name: items.name, // 路由标识
      path: items.path, // 路由名字 （小写可以用-）
      redirect: items.redirect, // 重定向
      meta: {
        id: items.id, -------后台设置
        parentId: items.parentId, -------后台设置
        title: items.title, // 标题 -------后台设置
        hideInBread: items.hideInBread, // 面包屑是否存在 默认显示
        hideInMenu: items.hideInMenu, // 左侧菜单是否显示 默认显示
        notCache: items.cache, // 是否缓存
        icon: items.icon, // 图标
        href: items.href, // 跳转到其它网站 -------后台设置
        keywords: items.keywords, // 关键字用来搜索路由 -------后台设置
        genre: items.genre, // 类型页面还是操作等等 'page' 'button' -------后台设置
        delete: items.delete, // 是否软删除 // 参数后台配 -------后台设置
        notSameWindow: items.notSameWindow, // 是否是同一个窗口 默认是同一个
        hideChildren: items.hideChildren, // 是否展示下级（当没有children的时候有这个参数也展示） 默认展示
        beforeCloseName: items.beforeCloseName // 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
      },
      component: 如果有请使用驼峰命名(首字母大写)没有的话代表是多级目录 // 后台配
 */
export default {
  Container,
  ParentView,
  About, // 关于
  ErrorStore, // 错误日志收集
  PersonalInformation, // 个人信息
  GiftsPurchase, // 礼品采集
  PartsPurchase, // 配件采集
  JurisdictionSet, // 权限设置
  UsersList// 用户列表
}
