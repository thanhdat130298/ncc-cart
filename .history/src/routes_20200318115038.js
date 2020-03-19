import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import about from "@/components/about";
import product from "@/components/product";
import detail from "@/components/detail";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/about",
      name: 'about',
      component: about
    },
    {
      path: "/product",
      name: 'product',
      component: product
    },
    {
      path: "/product",
      name: 'product',
      component: product
    }
  ]
});
