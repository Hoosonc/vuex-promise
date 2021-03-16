import {INCREMENT} from "./mutations.type";

export default {
  // 方法
  [INCREMENT](state){
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
}
