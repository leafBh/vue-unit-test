import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
// 引入mockjs
require('../mock/index.js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
