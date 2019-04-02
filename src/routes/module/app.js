
/** ******************************** 组件 ******************/
// const Container = () => import(/* webpackChunkName: "container */'@c/Container')
// const ParentView = () => import(/* webpackChunkName: "parent-view" */'@c/parent-view')
/** ******************************** 页面 ******************/
// 关于
const About = () => import(/* webpackChunkName: "About" */'@v/about/about.vue')
// 错误日志收集
const ErrorStore = () => import(/* webpackChunkName: "ErrorStore" */'@v/error-store/error-store.vue')
// 礼品采集
const GiftsPurchase = () => import(/* webpackChunkName: "GiftsPurchase" */'@v/goods-purchase/gifts-purchase/gifts-purchase.vue')
// 配件采集
const PartsPurchase = () => import(/* webpackChunkName: "PartsPurchase" */'@v/goods-purchase/gifts-purchase/gifts-purchase.vue')
// 个人信息
const personalInformation = () => import(/* webpackChunkName: "personalInformation" */'@v/personal-information/personal-information.vue')
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
        id: items.id,
        parentId: items.parentId,
        title: items.title, // 标题
        showInBread: items.hideInBread, // 面包屑是否存在 默认显示
        showInMenu: items.hideInMenu, // 左侧菜单是否显示 默认显示
        cache: items.cache, // 是否缓存
        icon: items.icon, // 图标
        href: items.href, // 跳转到其它网站
        keywords: items.keywords, // 关键字用来搜索路由
        genre: items.genre, // 类型页面还是操作等等 'page' 'button'
        delete: items.delete, // 是否软删除 // 参数后台配
        sameWindow: items.sameWindow, // 是否是同一个窗口
        showChildren: items.showChildren, // 是否展示下级（当没有children的时候有这个参数也展示）
        beforeCloseName: items.beforeCloseName // 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
      },
      component: 如果有请使用驼峰命名(首字母大写)没有的话代表是多级目录 // 后台配
 */
export default {
  About, // 关于
  ErrorStore, // 错误日志收集
  personalInformation, // 个人信息
  GiftsPurchase, // 礼品采集
  PartsPurchase, // 配件采集
  JurisdictionSet, // 权限设置
  UsersList// 用户列表
}
