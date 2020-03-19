import Vue from "vue";
import Router from "vue-router";
import detail from "./view/detail";
import home from "./view/home";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/view/home",
      name: "home",
      component: home
    },
    {
      path: "/view/detail",
      name: 'detail',
      component: detail
    }
    
  ]
});
