import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import about from "@/components/about";
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
      component: () => import(/* webpackChunkName: detail */ "./components/product")
    },
    {
      path: "/product",
      name: 'product',
      component: () => import(/* webpackChunkName: detail */ "./components/product")
    },
    {
      path: "/back",
      name: 'back',
      component: () => import(/* webpackChunkName: detail */ "./components/back")
    }
  ]
});
