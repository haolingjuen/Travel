<template>
    <div class="container" @click="click">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item ,index) of imgs" :key="index">
            <div >
              <img class="img1" :src="item" >
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

      </div>
    </div>
</template>

<script>
    export default {
        name: "gallary",
      data() {
        return {
           swiperOption:{
            pagination:'.swiper-pagination',
            paginationType:'fraction',
            observeParents:true,
            observer:true,
            loop:true
          }
        }
      },
      props:{
        imgs: Array
      },
      methods:{
          click(){
            this.$emit('close')
          }
      }
    }
</script>

<style scoped lang="stylus">
   .container >>> .swiper-container
     overflow inherit
   .container
    position: absolute
    top:0
    left:0
    right:0
    bottom:0
    z-index :99
    background-color #000
    display flex
    flex-direction column
    justify-content center
    padding-bottom 100%
    .wrapper
     width 100%
     height 0
     .img1
      width 100%
      height 6.8rem
      background-color yellow
     .img2
       width 100%
       height 6.8rem
       background-color green
     .swiper-pagination
      color #ffffff
      bottom -1rem
</style>
