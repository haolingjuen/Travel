<template>
    <div class="list">
      <swiper :options="swiperOption">
        <swiper-slide  v-for="(page, index) of pages" :key="index">
            <div  v-for="item of page" :key="item.id">
              <div class="list-box">
                  <img :src="item.imgUrl" class="list-img">
                  <p class="list-content" >{{item.desc}}</p>
              </div>
         </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
    export default {
      props:{
        list: Array
      },
      data(){
        return{
          swiperOption:{
            autoplay:false
          }
        }
      },
      computed:{
          pages(){
           const pages =[]
            this.list.forEach((item,index) =>{
              const page = Math.floor(index/8)
              if (!pages[page]){
                pages[page] =[]
              }
              pages[page].push(item)
            })
             return pages
          }
      }
    }
</script>

<style scoped lang="stylus">
 .list{
   height: 0
   padding-bottom: 50%
   margin-top: .4rem
   .list-box{
     width 25%
     float left
     margin-bottom .4rem
     .list-img{
       display block
       width 60%
       margin 0 auto
       margin-bottom .16rem
    }
     .list-content{
     text-align center
     }
   }
 }

</style>
