import Vue from "vue";
import Router from "vue-router";
import home from "./components/home.vue";
import detail from "./components/detail";
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
  }
];
export default routes;
