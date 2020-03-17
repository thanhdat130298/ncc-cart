import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'
import cart from '@/components/cart'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product',
      component: product,cart
    },
    {
      path: '/',
      name: 'detail',
      component: detail
    }
  ]
})