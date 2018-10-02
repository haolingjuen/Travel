<template>
    <div class="better">
      <ul>
        <li class="item" v-for="item of letters" :key="item" :ref="item"
            @click="clickHandle"
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend"
        >{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Better",
        props:{
          cities:Object
        },
      data(){
        return{
          touchstate:false,
          startY:0,
          timer:null
        }
      },
      updated(){
          this.startY=this.$refs['A'][0].offsetTop
      },
      computed:{
        letters(){
          const letters=[]
          for (let i in  this.cities){
              letters.push(i)
          }
           return letters
        }
      },
      methods:{
        clickHandle(e){
          this.$emit('change',e.target.innerText)
        },
        touchstart(){
          this.touchstate=true
        },
        touchmove(){
           if (this.touchstate){
              if (this.timer){
                clearTimeout(this.timer)
              }
              this.timer=setTimeout(()=>{
                const touchY=e.touches[0].clientY - 79
                const index=Math.floor((touchY - this.startY)/20)
                if (index >= 0 && index < this.letters.length) {
                  this.$emit('change', this.letters[index])
                }
              },16)
           }
        },
        touchend(){
          this.touchstate=false
        }
      }
    }
</script>

<style scoped lang="stylus">
 .better
  display flex
  flex-direction column
  justify-content center
  position absolute
  right 0
  top 2.98rem
  width .4rem
  .item
   text-align center
   line-height .44rem
   color #00bcd4
</style>
