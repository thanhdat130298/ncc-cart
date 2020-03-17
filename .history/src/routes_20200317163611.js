import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home.vue";
import detail from "@/components/detail.vue";
import product from "@/components/product.vue";
Vue.use(Router);

const routes= [
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
    component: product
  }
]
export default routes({
});
