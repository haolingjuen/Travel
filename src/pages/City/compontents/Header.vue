<template>
    <div class="header">
      <router-link to="/"><span class="iconfont iconfont-lift">&#xe600;</span></router-link>
      <span class="title">城市选择</span>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="stylus">
  .header
   overflow hidden
   height .86rem
   width 100%
   color #ffffff
   background-color #00bcd4
   line-height .84rem
   text-align center
   font-size .32rem
   .iconfont
    position absolute
    top 0
    left .2rem
    font-size .4rem
    color #ffffff
</style>
