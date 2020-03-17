import Vue from "vue";
import Router from "vue-router";
import home from "./components/home.vue";
import detail from "./components/detail.vue";
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
    component: () => import("@/component/detail.vue")
  }
];
export default routes;
