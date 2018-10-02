export default {
  mutations:{
    change (state,city){
      state.city=city
      try {
        localStorage.city=city

      }catch (e) {

      }
    }

  }
}
