import Vue from "vue";
import Router from "vue-router";
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
      path: "/about",
      name: "about",
      component: () =>
        import( "./components/about")
    },
    {
      path: "/product",
      name: "product",
      component: () =>
        import( "./components/product")
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () =>
        import( "./components/detail")
    }
  ]
});
