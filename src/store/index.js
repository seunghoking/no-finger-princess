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
  state: {
    frameworkData: null,
  },
  mutations: {
    getFrameWorkData(state) {
      state.frameworkData = [
        {
          id: 1,
          frameworkName: 'JS',
          photo: 'JavaScript-logo.png',
          questionListCount: 20,
          icon: 'fab fa-js',
        },
        {
          id: 2,
          frameworkName: 'Python',
          photo: 'Python-logo.png',
          questionListCount: 150,
          icon: 'fab fa-python',
        },
        {
          id: 4,
          frameworkName: 'Swift',
          photo: 'Swift-logo.png',
          questionListCount: 2000,
          icon: 'fab fa-swift',
        },
        {
          id: 5,
          frameworkName: 'Vue',
          photo: 'Vue-logo.png',
          questionListCount: 32210,
          icon: 'fab fa-vuejs',
        },
        {
          id: 6,
          frameworkName: 'Android',
          photo: 'Android-logo.png',
          questionListCount: 2130,
          icon: 'fab fa-android',
        },
      ]
    },
  },
  actions: {},
  getters: {},
  // modules,
})

store.$axios = axios

export default store
