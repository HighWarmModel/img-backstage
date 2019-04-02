import { getToken, setToken, removeToken } from '@/lib/utils'

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
      commit('setUserHeadImageMutate')
      commit('setUserIdMutate', 1)
      commit('setUserNameMutate', '锋哥')
      // arrageObjToRouterTree(arrageArrToObj([
      //   {
      //     id: 1,
      //     parentId:
      //   }
      // ]))
    },
    // 登录
    async USER_LOGIN_ACTION ({ commit }, { userName, password }) {
      commit('setTokenMutate', password)
    },
    // 登出去除相关信息
    async USER_LOGOUT_ACTION ({ state, commit }) {
      commit('setTokenMutate', '')
      return true
    }
  }
}
