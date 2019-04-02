import Cookies from 'js-cookie'
import config from '@/config'
const { cookieTokenName, cookieExpires, title, routerStorage, tabNavStorage } = config
/**
 * 设置token
 * @param {string} token 登录信息的token
 */
function setToken (token) {
  Cookies.set(cookieTokenName, token, { expires: cookieExpires || 1 })
}
/**
 * 获取token
 * @returns {string|boolean} 返回token或false
 */
function getToken () {
  const token = Cookies.get(cookieTokenName)
  if (token) return token
  return false
}
/**
 * 移除token
 */
function removeToken () {
  Cookies.remove(cookieTokenName)
}
/**
 * 动态设置页面title
 * @param {string|void} pageTitle 页面title
 */
function setTitle (pageTitle) {
  window.document.title = pageTitle ? `${title} - ${pageTitle}` : title
}
/**
 * 储存路由到本地存储
 * @param {Array<JSON>} routes 标签列表
 */
function setRouterInLocalstorage (routes) {
  localStorage[routerStorage] = JSON.stringify(routes)
}
/**
 * 从本地存储获取路由
 * @return {Array<JSON>}
 */
function getRouterInLocalstorage () {
  const routes = localStorage[routerStorage]
  return routes ? JSON.parse(routes) : []
}
/**
 * 储存标签列表到本地存储
 * @param {Array<JSON>} list 标签列表
 */
function setTagNavListInLocalstorage (list) {
  localStorage[tabNavStorage] = JSON.stringify(list)
}
/**
 * 从本地存储获取标签列表
 * @return {Array<JSON>}
 */
function getTagNavListInLocalstorage () {
  const list = localStorage[tabNavStorage]
  return list ? JSON.parse(list) : []
}
/**
 * 整理数组parentId为键名键值为该值下的数组
 * @param {Array<JSON>} arr 数组
 * @return {JSON} {0:[], 3:[]}
 */
function arrageArrToObj (arr) {
  let obj = {}
  arr.forEach((items) => {
    let parentId = items.parentId
    if (obj[parentId]) {
      obj[parentId].push(items)
    } else {
      obj[parentId] = [items]
    }
  })
  return obj
}
/**
 * 判断是否有属性children
 * @param {JSON} item  对象
 * @return {boolean}
 */
function hasChildren (item) {
  return item.children && item.children.length > 0
}
/**
 * 把arrageArrToObj整理的对象变成tree形
 * @param {JSON} obj arrageArrToObj整理的对象
 * @param {number} parentId 父级id
 * @param {number} times 当前对象层级
 * @param {JSON} routers 所有路由
 * @return {Array<JSON>} [{name,path,redirect,meta}]
 */
function arrageObjToRouterTree (obj, parentId, times = 0, routers) {
  let arr = obj[parentId]
  let parentArr = []
  arr.forEach(items => {
    let id = items.id
    let routerObj = {
      name: items.name, // 路由标识
      path: items.path, // 路由名字
      redirect: items.redirect, // 重定向
      meta: {
        id: items.id,
        parentId: items.parentId,
        title: items.title, // 标题
        showInBread: items.hideInBread, // 面包屑是否存在
        showInMenu: items.hideInMenu, // 左侧菜单是否显示
        cache: items.cache, // 是否缓存
        icon: items.icon, // 图标
        href: items.href, // 跳转到其它网站
        keywords: items.keywords, // 关键字用来搜索路由
        genre: items.genre, // 类型页面还是操作等等 page button tab
        tag: items.tag, // 是否软删除
        jurisdiction: items.Jurisdiction, // 权限
        showChildren: items.showChildren, // 是否展示下级（当没有children的时候有这个参数也展示）
        beforeCloseName: items.beforeCloseName // 关闭之前是否提示
      }
    }
    if (items.genre === 'page') {
      if (obj[id]) {
        if (times + 1 === 1) {
          routerObj.component = () => import('@c/container')
        } else if (times + 1 > 1) {
          routerObj.component = () => import('@c/parent-view')
        }
        routerObj.children = arrageObjToRouterTree(obj, id, times + 1)
      } else if (items.component) {
        routerObj.component = routers[items.component]
      }
      parentArr.push(routerObj)
    }
  })
  return parentArr
}
/**
 * 把arrageObjToRouterTree整理好的数组变成menu
 * @param {Array<JSON>} list arrageObjToRouterTree整理好的数组
 * @return {Array<JSON>} [{icon, href, name, meta}]
 */
function arrageRouterToMenu (list) {
  let result = []
  list.forEach(items => {
    if (items.meta && items.meta.showInBread) {
      let obj = {
        icon: items.meta.icon || '',
        href: items.meta.href,
        name: items.name,
        meta: items.meta
      }
      if (hasChildren(items) || (items.meta && items.meta.showChildren)) {
        obj.children = arrageRouterToMenu(items.children || [])
      }
      result.push(obj)
    }
  })
  return result
}
export {
  setToken, // 设置token
  getToken, // 获取token
  arrageArrToObj, // 以parentid为键名转json
  arrageObjToRouterTree, // 把arrageArrToObj整理的对象变成tree形
  arrageRouterToMenu, // 把arrageObjToRouterTree整理好的数组变成menu
  removeToken, // 移除token
  setTitle, // 设置title
  setTagNavListInLocalstorage, // 储存标签列表到本地存储
  getTagNavListInLocalstorage, // 从本地存储获取标签列表
  setRouterInLocalstorage, // 储存路由到本地存储
  getRouterInLocalstorage // 从本地存储获取路由
}
