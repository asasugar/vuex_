const state = {
  array:[1,2,3,4,5,6,7,8,9]
}

// getters可以认为是store的计算属性[有缓存]
const getters = {
  // filter(state){
  //   const arr=state.array.filter((item)=>{
  //     return item>5;
  //   });
  //   return arr;
  // }
}

// mutations与事件注册类似，更改state[同步]
const mutations = {
  greaterThan5 (state) {
    state.array=state.array.filter((item)=>{
      return item>5;
    });
  },
  greaterThan7 (state) {
    state.array=state.array.filter((item)=>{
      return item>7;
    });
  }
}

// actions提交的是 mutation，而不是直接变更状态[异步]
const actions = {
  greaterThan5 ({commit}) {
    commit('greaterThan5')
  },
  greaterThan7 ({commit}) {
    commit('greaterThan7')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}