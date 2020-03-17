import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home.vue";
import detail from "@/components/detail.vue";
import route
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/ ",
      name: "home",
      component: home
    },
    {
      path: "/detail",
      name: detail,
      component: () => import("./detail.vue")
    },
    {
      path: "/product",
      name: "product",
      component: Product
    }
  ]
});
