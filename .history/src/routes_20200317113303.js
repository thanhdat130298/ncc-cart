import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: './components/',
      name: 'product',
      component: product
    },
    {
      path: '/',
      name: 'detail',
      component: detail
    }
  ]
})