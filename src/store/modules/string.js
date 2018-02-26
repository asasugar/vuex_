
// initial state
const state = {
  string:'abcdefgHIJKlmn'
}

// getters
const getters = {
  // toUpperCase(state){
  //   const str = state.string.toUpperCase();
  //   return str;
  // }
}

// mutations
const mutations = {
  toUpperCase(state){//转化成大写
    state.string = state.string.toUpperCase();
  },
  toLocaleLowerCase(state) {//转化成小写
    state.string=state.string.toLocaleLowerCase();
  }
}

// actions
const actions = {
  toUpperCase ({commit}) {
    commit('toUpperCase')
  },
  toLocaleLowerCase ({commit}) {
    commit('toLocaleLowerCase')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}