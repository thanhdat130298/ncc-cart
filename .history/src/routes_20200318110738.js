import Vue from "vue";
import Router from "vue-router";
import home from "./component/home";
import detail from "./component/detail";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/detail",
      name: 'detail',
      component: detail
    }
  ]
});
