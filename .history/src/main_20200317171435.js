import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import router from "./router";

Vue.config.productionTip = false;
new Vue({
  store,
  routes,
  render: h => h(App)
}).$mount("#app");
