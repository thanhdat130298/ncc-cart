import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import detail from "@/components/detail";
import product from "@/components/product";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/about",
      name: 'detail',
      component: detail
    },
    {
      path: "/product",
      name: 'product',
      component: product
    }
  ]
});
