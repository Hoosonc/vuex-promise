import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
Vue.use(Vuex)
const state = {
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
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
    b: {

    },
    c: {

    }
  }
})
export default store
