import Vue from "vue";
import Router from "vue-router";
import detail from "./components/detail";
import home from "@/components/home";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/detail/:id",
      name: 'detail',
      component: detail
    }
  ]
});
