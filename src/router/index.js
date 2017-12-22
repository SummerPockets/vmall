import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/main/Home'
import Kind from '../components/kind/Kind'
import Mine from '../components/main/Mine'
import Shopcart from '../components/main/Shopcart'
import Goods from '../components/goods/Goods.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/kind', name: 'Kind', component: Kind},
    {path: '/shopcart', name: 'Shopcart', component: Shopcart},
    {path: '/mine', name: 'Mine', component: Mine},
    {path: '/goods', name: 'Goods', component: Goods}
  ]
})
