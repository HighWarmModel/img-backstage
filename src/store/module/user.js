import { getToken, setToken, removeToken, setRouterInLocalstorage } from '@/lib/utils'
import {login, getUserInfo} from '@/api'

export default {
  state: {
    token: getToken(), // token 登录会话
    userId: '', // 用户id
    userName: '', // 用户名字
    userHeadImage: '' // 用户头像
  },
  getters: {},
  mutations: {
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
      commit('USER_SETUSERHEADIMAGE_MUTATE', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554206642289&di=86cbc869399b175c4bf50dc067acf5f1&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FY0b2B9MCCaqZBGTEhdix78AECPqwFsEiezuc0kwhYeDxL1536463553265.jpeg')
      commit('USER_SETUSERID_MUTATE', 1)
      commit('USER_SETUSERNAME_MUTATE', '锋哥')
      setRouterInLocalstorage()
    },
    // 登录
    async USER_LOGIN_ACTION ({ commit, dispatch }, { userName, password }) {
      commit('setTokenMutate', 123456)
      await 
    },
    // 登出去除相关信息
    async USER_LOGOUT_ACTION ({ state, commit }) {
      commit('setTokenMutate', '')
      return true
    }
  }
}
