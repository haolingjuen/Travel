<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="areas">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>

        <div class="areas">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item of hot " :key="item.id">
              <div class="button" @click="clickHandle(item.name)">{{item.name}}</div>
            </div>
          </div>
        </div>

        <div class="areas" v-for="(item,key) of  cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item-wrapper border-bottom"v-for="innerItem of item" :key="innerItem.id" @click="clickHandle(innerItem.name)">{{innerItem.name}}</div>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "list",
        mounted(){
          this.scroll=new BScroll(this.$refs.wrapper)
        },
      props:{
        hot: Array,
        cities: Object,
        letter: String
      },methods:{
        clickHandle(city){
           this.$store.dispatch('changeCity',city)
           this.$router.push('./')
        }
      },
      watch:{
          letter(){
           if (this.letter){
             const element =this.$refs[this.letter][0]
             this.scroll.scrollToElement(element)
           }
          }
      }
    }
</script>

<style scoped lang="stylus">
  .border-topbottom
     &:before
      border-color #cccccc
     &:after
      border-color #cccccc
  .border-bottom
     &:after
      border-color #cccccc
 .list
   overflow hidden
   position absolute
   top 1.5rem
   left 0
   right 0
   bottom 0
  .title
   height .44rem
   background-color #EEEEEE
   padding-left .2rem
   color #666
   line-height .44rem
  .button-list
   overflow hidden
   padding .1rem .6rem .1rem .1rem
   .button-wrapper
    float left
    width 33.33%
    .button
     margin .1rem
     padding .1rem
     border solid .02rem #cccccc
     text-align center
  .item-list
   .item-wrapper
    margin-left .2rem
    line-height .76rem
</style>
