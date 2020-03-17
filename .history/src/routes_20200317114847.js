import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'
import cart from '@/components/cart'
import detail from '@/components/detail'
import review from '@/components/review'
import review from '@/components/review'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product',
      component: product,cart,review
    },
    {
      path: '/',
      name: 'detail',
      component: detail
    }
  ]
})