import Vue from "vue";
import Router from "vue-router";
import home from "@/components/Home";
import detail from "@/components/Detail";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/detail",
      name: detail,
      component: detail
    }
  ]
});
