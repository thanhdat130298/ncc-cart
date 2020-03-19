import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import routes from "./routes"


Vue.config.productionTip = false;
Vue.use({ store });
new Vue({
  store,
  routes,
  render: h => h(App)
}).$mount("#app");
