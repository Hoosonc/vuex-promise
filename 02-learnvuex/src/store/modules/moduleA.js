export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state,payload){
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      // context可以拿到store所有对象
      setTimeout(() => {
        console.log(context);
        context.commit('updateName','wangwu')
      },1000)
    }
  },
  getters: {
    fullName(state){
      return state.name + '11111'
    },
    fullName2(state,getters){
      return getters.fullName + '2222'
    },
    fullName3(state,getters,rootState){
      console.log(state);
      console.log(getters);
      console.log(rootState);
      // rootState可以去根index.js中的内容
      return getters.fullName2 + rootState.counter
    }
  }
}
