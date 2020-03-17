import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/product'
import About from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product',
      component: product
    },
    {
      path: '/',
      name: 'About',
      component: About
    }
  ]
})