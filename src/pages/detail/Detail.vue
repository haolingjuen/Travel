<template>
    <div>
      <Header
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
      ></Header>
      <Link></Link>
      <List :list="list"></List>
      <kong></kong>
    </div>
</template>

<script>
  import Header from './componens/Header'
  import Link from './componens/Link'
  import List from './componens/List'
  import axios from 'axios'
  import kong from './componens/kong'
    export default {
        name: "Detail",
      components:{
        Header,
        Link,
        List,
        kong
      },
      data () {
        return {
          sightName: '',
          bannerImg: '',
          gallaryImgs: [],
          list: []
        }
      },
      methods: {
        getDetailInfo () {
          axios.get('/static/mock/detail.json', {
            params: {
              id: this.$route.params.id
            }
          }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
          }
        }
      },
      mounted () {
        this.getDetailInfo()
      }
    }
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
