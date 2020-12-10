import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// Modules
// ───────────────────────────────────

// let moduleList = ['log']

// let modules = {}

// moduleList.forEach(val => {
//   const path = require(`./modules/${val}`)
//   modules[val] = path.default
// })

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  // modules,
})

store.$axios = axios

export default store
