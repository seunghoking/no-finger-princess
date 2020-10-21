import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '@/router'
import store from '@/store'

import dateFilter from '@/filter/dateFilter.js'

import '@/plugins/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.filter('dateFilter', dateFilter)

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
