import { getToken, setToken, removeToken, setRouterInLocalstorage, getRouterInLocalstorage } from '@/lib/utils'
import { login, getUserInfo } from '@/api'

export default {
  state: {
    token: getToken(), // token 登录会话
    userId: '', // 用户id
    userName: '', // 用户名字
    userHeadImage: '', // 用户头像
    access: getRouterInLocalstorage()
  },
  getters: {
  },
  mutations: {
    // 设置有权限的路由
    USER_SETACCESS_MUTATE (state, access) {
      state.access = access
      setRouterInLocalstorage(access)
    },
    // 设置用户头像
    USER_SETUSERHEADIMAGE_MUTATE (state, headImgPath) {
      state.userHeadImage = headImgPath
    },
    // 设置用户id
    USER_SETUSERID_MUTATE (state, userId) {
      state.userId = userId
    },
    // 设置用户名字
    USER_SETUSERNAME_MUTATE (state, userName) {
      state.userName = userName
    },
    // 设置token
    USER_SETTOKEN_MUTATE (state, token) {
      state.token = token
      if (token) {
        setToken(token)
      } else {
        removeToken()
      }
    }
  },
  actions: {
    async USER_GETUSERINFO_ACTION ({ commit, state }) {
      let res = await getUserInfo()
      if (res.code === 1) {
        commit('USER_SETUSERHEADIMAGE_MUTATE', res.data.avator)
        commit('USER_SETUSERID_MUTATE', res.data.user_id)
        commit('USER_SETUSERNAME_MUTATE', res.data.name)
        commit('USER_SETACCESS_MUTATE', res.data.access)
      }
      return res
    },
    // 登录
    async USER_LOGIN_ACTION ({ commit, dispatch }, { userName, password }) {
      let res = await login({ account: userName, password })
      if (res.code === 1) {
        let res1 = await dispatch('USER_GETUSERINFO_ACTION')
        if (res1.code === 1) {
          commit('USER_SETTOKEN_MUTATE', res.data.token)
        }
        return res1
      }
      return res
    },
    // 登出去除相关信息
    async USER_LOGOUT_ACTION ({ state, commit }) {
      commit('setTokenMutate', '')
      return true
    }
  }
}
