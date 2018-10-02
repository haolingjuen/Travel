<template>
    <div>
      <div class="back" v-show="showAbs">
        <router-link to="/" tag="div"><span class="iconfont iconfont-back">&#xe600;</span></router-link>
      </div>
      <div class="header" v-show="!showAbs" :style="style">
        <router-link to="/" tag="div"><span class="iconfont iconfont-lift">&#xe600;</span></router-link>
        <span class="title">景点详情</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Link",
      data(){
          return{
            showAbs:true,
            style:{
              opacity:0
            }
          }
      },
      methods: {
        handleScroll () {
          const top = document.documentElement.scrollTop
          if (top > 60) {
            let opacity = top / 140
            opacity = opacity > 1 ? 1 : opacity
            this.style = { opacity }
            this.showAbs = false
          } else {
            this.showAbs = true
          }
        }
      },
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
      },
      unmounted () {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style scoped lang="stylus">
  .back
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height .8rem
    border-radius 50%
    color #ffffff
    background rgba(0,0,0,0.8)
    font-size .4rem
    text-align center
    .iconfont-back
     line-height .8rem
     color #ffffff
     font-size .4rem
  .header
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    width 100%
    color #ffffff
    background-color #00bcd4
    line-height .84rem
    text-align center
    font-size .32rem
    .iconfont-lift
      position absolute
      top 0
      left .2rem
      font-size .4rem
      color #ffffff
</style>
