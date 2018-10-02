import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import City from '@/pages/City/City'
import Datail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    } ,{
      path: '/City',
      name: 'City',
      component: City
    }
    ,{
      path: '/Datail',
      name: 'Datail',
      component: Datail
    }
  ]
})
