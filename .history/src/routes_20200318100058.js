import Vue from "vue";
import Router from "vue-router";
import detail from "./view/detail";
import home from "./view/home.vue";
import detail from
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
    },
    {
      path: "/detail",
      name: 'detail',
      component: detail
    }
  ]
});
