import Vue from 'vue'
import Vuex from 'vuex'
import array from './modules/array'
import string from './modules/string'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    array,
    string
  }
})