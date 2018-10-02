<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id" >
        <img :src="item.imgUrl"   class="img">
      </swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:{
       list: Array
    },
    data() {
      return {
        swiperOption:{
          pagination:'.swiper-pagination',
          autoplay:2000,
          loop:true
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff
   .wrapper
     overflow hidden
     width 100%
     height 0
     padding-bottom 3rem
     background: #eee
     margin-bottom :.04rem
     margin-top : .88rem
   .wrapper .img
    width:100%
    height : 3rem
</style>
