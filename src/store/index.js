import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

let defaultCity ='武汉'
try {
  if (localStorage.city){
    defaultCity=localStorage.city
  }
}catch (e) {

}

export default new Vuex.Store({
  state:{
    city:defaultCity
  },
  actions:{
    changeCity (ctx,city){
      ctx.commit('change',city)
    }
  },
  mutations:{
    change (state,city){
      state.city=city
      try {
        localStorage.city=city

      }catch (e) {

      }
    }

  }
})
