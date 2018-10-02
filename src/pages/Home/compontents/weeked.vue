<template>
  <div class="">
    <div class="title"><p>周末去哪儿--></p></div>
    <div class="content" v-for="item of list " :key="item.id">
      <img class="img" :src="item.imgUrl" alt="">
      <p class="p1">{{item.title}}</p>
      <p class="p2">{{item.desc}}</p>
    </div>
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
    margin .32rem  0
    padding-top .2rem
    padding-left .12rem
  .content
    height 3.6rem
    width 97%
    margin .24rem .12rem
    .img
      height 75%
      width 100%
    .p1
      font-size 18px
      font-weight bold
      margin .14rem
    .p2
      color #B5B5B5
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      margin .14rem
</style>
