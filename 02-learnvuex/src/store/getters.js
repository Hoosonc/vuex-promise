export default {
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
    return age => {
      // 这里age就是方法传过来的参数
      console.log(age);
      return state.students.filter(s => s.age >= age)}
  }
}
