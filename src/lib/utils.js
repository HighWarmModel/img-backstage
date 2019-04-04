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
 * 把类似驼峰的MyUserInfo 转换成 my-user-info 和 my_user_info
 * @param {string} name 传入的名字
 * @return {JSON} 全部转成小写并且在原先大写字母前加-和_（除了首字母）
 */
function componentNameConversion (name) {
  const firstLetter = name.slice(0, 1).toLocaleLowerCase()
  const word = name.slice(1)
  return {
    '-': firstLetter + word.replace(/[A-Z]+/g, letter => `-${letter.toLocaleLowerCase()}`),
    '_': firstLetter + word.replace(/[A-Z]+/g, letter => `_${letter.toLocaleLowerCase()}`)
  }
}
/**
 * 把arrageArrToObj整理的对象变成tree形
 * @param {JSON} obj arrageArrToObj整理的对象
 * @param {number} parentId 父级id
 * @param {number} times 当前对象层级
 * @param {JSON} routers 前台所有路由
 * @return {Array<JSON>} [{name,path,redirect,meta}]
 */
function arrageObjToRouterTree ({ obj, parentId, routers, times = 0, way, pathRoute = {} }) {
  let arr = obj[parentId]
  let parentArr = []
  arr.forEach(items => {
    if (items.genre === 'page') {
      const _routeObj = routers[items.component] ? routers[items.component] : {
        name: componentNameConversion(items.component)['_'],
        path: componentNameConversion(items.component)['-'],
        redirect: null,
        meta: {}
      }
      const meta = _routeObj.meta
      let id = items.id
      let routerObj = {
        name: _routeObj.name,
        path: _routeObj.path,
        redirect: _routeObj.redirect,
        meta: {
          ...meta,
          id: items.id,
          parentId: items.parentId,
          href: items.href, // 跳转到其它网站
          keywords: items.keywords, // 关键字用来搜索路由
          genre: items.genre, // 类型页面还是操作等等 page button tab
          delete: items.delete, // 是否软删除
          jurisdiction: items.Jurisdiction // 权限
        }
      }
      if (obj[id]) {
        if (times + 1 === 1) {
          routerObj.path = '/' + _routeObj.path // 祖级路由要加/
          routerObj.component = () => import('@c/container')
        } else if (times + 1 > 1) {
          routerObj.component = () => import('@c/parent-view')
        }
        routerObj.meta.way = way ? `${way}/${routerObj.path}` : routerObj.path
        routerObj.children = arrageObjToRouterTree({ obj, parentId: id, routers, times: times + 1, way: routerObj.meta.way, pathRoute })
      } else if (items.component) {
        pathRoute[routerObj.name] = routerObj
        routerObj.meta.way = way ? `${way}/${routerObj.path}` : routerObj.path
        routerObj.component = routers[items.component].component
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
