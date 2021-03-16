import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA = {
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
      return getters.fullName2 + rootState.counter
    }
  }
}
const store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      {id: 110, name: 'hxc', age: 18},
      {id: 111, name: 'hxc2', age: 21},
      {id: 112, name: 'hxc3', age: 22},
      {id: 113, name: 'hxc4', age: 18}
    ],
    info: {
      name: 'hhxc',
      age: 22,
      height: 1.90
    }
  },
  mutations: {
    // 方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,payload) {
      state.counter += payload.count
    },
    addStudent(state,stu){
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name = 'hxcandkobe'
    }
  },
  actions: {
    // aUpdateInfo(context,payload){
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload);
    //   },1000)
    // }
    aUpdateInfo(context,payload){
      return new Promise(((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          console.log(context);
          resolve('这是res的内容')
        },1000)
      }))

    }
  },
  getters: {
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age >=20)
    },
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
      // return function (age){
      //   return state.students.filter(s => s.age >= age)
      // }
      return age => {return state.students.filter(s => s.age >= age)}
    }
  },
  modules: {
    a: moduleA,
    b: {

    },
    c: {

    }
  }
})
export default store
