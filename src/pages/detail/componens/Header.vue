<template>
    <div ref="wrapper">

      <div class="banner" @click="handclick">
        <div class="banner-box">
          <img class="banner-img" :src="bannerImg" alt="">
        </div>
        <div class="banner-info">
          <div class="banner-title">{{sightName}}</div>
          <div class="banner-number">
            <div class="iconfont header-abs-back">&#xe6ee; 39</div>
          </div>
        </div>
      </div>

      <detail v-show="showGallary" @close="close" :imgs="bannerImgs"></detail>
    </div>
</template>

<script>
  import detail from '../../../common/gallary/gallary'
  import BScroll from 'better-scroll'
    export default {
        name: "Header",
      mounted(){
        this.scroll  =new BScroll(this.$refs.wrapper)
      },
      components:{
        detail
      },
      props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
      },
      data(){
        return{
          showGallary:false
        }
      },
      methods:{
        handclick() {
          this.showGallary=true
        },
        close(){
          this.showGallary=false
        }
      }

    }
</script>

<style scoped lang="stylus">
 .banner
  overflow hidden
  position relative
  height 0
  padding-bottom 55%
  .banner-img
   width 100%
  .banner-info
   display flex
   position absolute
   left 0
   right 0
   bottom 0
   line-height .6rem
   color #ffffff
   .banner-title
    flex 1
    padding-left .2rem
    font-size .32rem
   .banner-number
    padding 0 .4rem
    height .4rem
    line-height .4rem
    border-radius .2rem
    background :rgba(0,0,0,.6)
    margin-right .2rem
</style>
