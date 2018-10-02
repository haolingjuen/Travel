<template>
 <div>
   <HomeHeader :city="city"></HomeHeader>
   <HomeSwiper :list="swiperList"></HomeSwiper>
   <HomeList :list="List"></HomeList>
   <HomeRecommend :list="weekedList"></HomeRecommend>
   <HomeWeeked :list="recommendList"></HomeWeeked>
 </div>
</template>

<script>
  import HomeHeader from './compontents/Header'
  import HomeSwiper from './compontents/Swiper'
  import HomeList   from './compontents/List'
  import HomeRecommend from  './compontents/recommend'
  import HomeWeeked from './compontents/weeked'
  import axios from 'axios'
    export default {
        name: "Home",
        components:{
          HomeHeader,
          HomeSwiper,
          HomeList,
          HomeRecommend,
          HomeWeeked
        },
      data(){
        return{
         city:'',
         swiperList:[],
         recommendList:[],
         List:[],
         weekedList:[]
        }
      },
      methods:{
          getHomeInfo(){
            axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
          },
          getHomeInfoSucc(res){
            res =res.data
            if (res.ret && res.data){
              const data = res.data
              this.city=data.city
              this.swiperList=data.swiperList
              this.List=data.iconList
              this.weekedList=data.weekendList
              this.recommendList=data.recommendList
            }
          }
         },
      mounted(){
        this.getHomeInfo()
      }
    }
</script>

<style  lang="stylus" scoped>

</style>
