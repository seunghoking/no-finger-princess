import Vue from 'vue'
import VueRouter from 'vue-router'
import GAuth from 'vue-google-oauth2'
import App from './App.vue'
import routes from '@/router'
import store from '@/store'

import dateFilter from '@/filter/dateFilter.js'

import '@/plugins/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(GAuth, {
  clientId:
    '962795842983-fj2bhqfqh0jaj8k816hh2b322t8p5r3h.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
})

Vue.filter('dateFilter', dateFilter)

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  store,
  linkActiveClass: 'active',
  render: h => h(App),
}).$mount('#app')
