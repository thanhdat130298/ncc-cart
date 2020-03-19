import Vue from "vue";
import Router from "vue-router";
import detail from "./component/view/detail";
import home from "./component/home.vue";
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
