<template>
    <div>
      <div class="search">
        <input class="input" v-model="keyword" type="text" placeholder="请输入您要查找的内容"/>
      </div>
      <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li v-for="item of list" class="search-item">{{item.name}}</li>
          <li class="search-item" v-show="!list.length">没有匹配到数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
   import Bscroll from 'better-scroll'
    export default {
        name: "search",
      props:{
        cities:Object
      },
      watch:{
        keyword(){
          if (this.timer){
             clearTimeout(itme.timer)
           }
           this.timer=setTimeout(()=>{
             const result =[]
             for (let i in this.cities){
               this.cities[i].forEach((value)=>{
                  if (value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                     result.push(value)
                  }
               })
               this.list=result
             }
           },100)
        }
      },
      mounted(){
          this.scroll=new  Bscroll(this.$refs.search)
      },
      data(){
          return{
            keyword:'',
            list:[],
            timer:null
          }
      }
    }
</script>

<style scoped lang="stylus">
  .search
   width 100%
   height .62rem
   background-color #00bcd4
   position relative
   .input
    width 96%
    height .52rem
    position absolute
    left 2%
    text-align center
    line-height .62rem
    border-radius .08rem
    color #666
  .search-content
   overflow hidden
   position absolute
   top 1.48rem
   right 0
   left 0
   bottom 0
   background-color #EEEEEE
   z-index 100
   .search-item
    line-height .62rem
    padding-left .2rem
    background-color #ffffff
    border-bottom .02rem solid #eee
    color #666
</style>
