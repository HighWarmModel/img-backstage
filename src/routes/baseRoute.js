// 登录
const Login = {
  name: 'login',
  path: '/login',
  meta: {
    hideInMenu: true,
    title: '首页',
    notCache: true
  },
  component: () => import(/* webpackChunkName: "login" */'@v/login/login')
}
// 首页
const Home = {
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
// 401权限不足
const Error401 = {
  path: '*',
  name: 'error_401',
  meta: {
    hideInMenu: true
  },
  component: () => import(/* webpackChunkName: "401" */'@v/error-page/401.vue')
}
// 500服务端报错
const Error500 = {
  path: '/500',
  name: 'error_500',
  meta: {
    hideInMenu: true
  },
  component: () => import(/* webpackChunkName: "500" */'@v/error-page/500.vue')
}
// 404页面找不到
const Error404 = {
  path: '*',
  name: 'error_404',
  meta: {
    hideInMenu: true
  },
  component: () => import(/* webpackChunkName: "404" */'@v/error-page/404.vue')
}
export {
  Login,
  Home,
  Error401,
  Error500,
  Error404
}
