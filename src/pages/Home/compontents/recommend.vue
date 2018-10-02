<template>
    <div class="recommend">
      <div class="title"><p>热销推荐--></p></div>
      <router-link tag="div" to="/Datail" class="content" v-for="item of list " :key="item.id">
        <img class="img" :src="item.imgUrl" alt="">
        <p class="p1">{{item.title}}</p>
        <p class="p2">{{item.desc}}</p>
        <input type="button" class="p3" value="查看详情"/>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "recommend",
      props:{
          list: Array
      }
    }
</script>

<style scoped lang="stylus">
  .title
   height .5rem
   width 100%
   background-color : #EEEEEE
   padding-left .12rem
   padding-top .24rem
  .content
    height 1.6rem
    width 100%
    margin .32rem .16rem
    .img
     height 100%
     width 2.2rem
     float left
     margin-right .2rem
    .p1
      font-size 18px
      font-weight bold
      margin-bottom .24rem
    .p2
      color #B5B5B5
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .p3
      width 2rem
      height .5rem
      background-color #ff9300
      float left
      color white
      font-size 14px
      text-align center
      padding  0 auto
      line-height .5rem
      margin-top .2rem
      border-radius .16rem
</style>
