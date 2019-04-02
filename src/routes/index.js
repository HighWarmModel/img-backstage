import Vue from 'vue'
import Router from 'vue-router'
// import iView from 'iview'
import routes from './routers'
// import config from '@/config'
// import store from '@/store'
// import { setTitle } from '@/lib/utils'
// const { initialPageName, notLoginPageName } = config

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start()
//   const token = store.user.token
//   if (!token && !notLoginPageName.includes(to.name)) {
//     // 未登录，跳转的是需要登录页面
//     next({
//       name: initialPageName // 跳转到登录页
//     })
//   } else {
//     next()
//   }
// })
// router.afterEach(route => {
//   setTitle(route.meta.title)
//   iView.LoadingBar.finish()
//   window.scrollTo(0, 0)
// })
export default router
