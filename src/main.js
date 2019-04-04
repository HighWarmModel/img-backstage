import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import './assets/css/common.styl'
import './assets/font/iconfont.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
