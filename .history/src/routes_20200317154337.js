import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'
import home from '@/components/home'
import detail from './components/detail.vue'
import  from '@/components/review'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import("./detail.vue")
    },
    {
      path: "/product",
      name: "product",
      component: Product
    }
  ]
})