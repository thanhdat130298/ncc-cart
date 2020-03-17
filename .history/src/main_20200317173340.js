import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
}) from './routes'


Vue.config.productionTip = false;
new Vue({
  store,router,
  render: h => h(App)
}).$mount("#app");
