export default async function ({ app, store, route, redirect }) {
  return await app.$axios.$post('/service/v1/auth/checkLogin')
  .then(res => {
    console.log('checkLogin', res);
    // if(Object.keys(res).length !== 0){
    //   store.commit('AUTHORIZE', res)
    // }else{
    //   store.commit('UNAUTHORIZE');
    //   if(app.context.route.name==='account') {
    //     return redirect('/')
    //   }
    // }
  }).catch(err => console.log(err))
}