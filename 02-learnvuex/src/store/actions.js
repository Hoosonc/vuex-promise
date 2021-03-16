export default {
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
}
