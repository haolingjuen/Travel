<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconfont-lift">&#xe600;</div>
    </div>
    <div class="header-content"> <span class="iconfont">&#xe622;</span> 请输入您要查询的城市/景点/美食</div>
    <router-link to="City">
      <div class="header-right">{{this.$store.state.city}}
        <span class="iconfont iconfont-right">&#xe60c;
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="stylus">
 @import "~styles/varibles.styl"
  .header
    height : .84rem
    background-color #00bcd4
    display flex
    color :#ffffff
    margin-bottom .88rem
    width 100%
    position fixed
    top 0
    left 0
    z-index 99
  .header-left
    margin-top .28rem
    height: .64rem
    flex :left
  .iconfont-lift
    font-size : .4rem
    margin-left : .2rem
  .header-content
    flex :1
    height: .64rem
    line-height :.64rem
    margin-left :.2rem
    margin-top : .1rem
    background :#ffffff
    border-radius :.12rem
    color: #cccccc
    padding-left :0.1rem
  .header-right
    margin-top .28rem
    text-align center
    flex: right
    min-width : 1.24rem
    padding 0 .1rem
    color: #ffffff
  .iconfont-right
    font-size : .3rem
    margin-left : -.1rem
</style>
