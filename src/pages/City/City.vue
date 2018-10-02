<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :cities="cities" :hot="hotcityes" :letter="letter"></CityList>
    <CitBetter :cities="cities" @change="change"></CitBetter>
  </div>
</template>

<script>
   import axios      from 'axios'
   import CityHeader from './compontents/Header'
   import CitySearch from './compontents/search'
   import CityList   from './compontents/list'
   import CitBetter  from './compontents/Better'
     export default {
        name: "City",
      components:{
        CityHeader,
        CitySearch,
        CityList,
        CitBetter
      },
       data(){
         return{
           cities:{},
           hotcityes:[],
           letter:''
         }
       },
       mounted(){
          this.getCityInfo()

       },
       methods:{
         getCityInfo(){
           axios.get('/static/mock/city.json').then(this.success)
         },
           success(res){
             res=res.data
            if (res.ret&&res.data) {
               const data=res.data
               this.cities=data.cities
               this.hotcityes=data.hotCities
             }
           },
         change(letter){
           this.letter=letter
         }
       }
    }
</script>

<style scoped>

</style>
