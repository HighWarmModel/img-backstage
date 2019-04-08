
export default {
  state: {
    errorList: [], // 日错误志列表
    notReadErrorLog: false, // 错误日志是否已读 true 未读
    breadCrumbList: [],
    menuList: [] // 菜单列表
  },
  mutations: {
    // 错误日志列表添加
    APP_UNSHIFTERR_MUTATE (state, error) {
      state.errorList.unshift(error)
    },
    // 设置否无日志是否已读
    APP_SETREADERRORSTATUS_MUTATE (state, status = true) {
      state.notReadErrorLog = status
    },
    // 设置面包屑
    APP_SETBREADCRUMB_MUTATE (state, route) {

    },
    // 设置菜单
    APP_SETMENULIST_MUTATE (state, route) {
      state.menuList = route
    }
  },
  actions: {
    // 添加错误日志
    APP_ADDERRORLOG_ACTION ({ rootState, commit }, info) {
      if (window.location.href.indexOf('error-log') > -1) commit('APP_SETREADERRORSTATUS_MUTATE', false)
      const { user: { userId, userName, userHeadImage } } = rootState
      let data = {
        ...info,
        userId,
        time: new Date(),
        userName,
        userHeadImage
      }
      commit('APP_UNSHIFTERR_MUTATE', data)
      return false
    }
  }
}
