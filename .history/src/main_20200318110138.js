import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import router from "./routes"


Vue.config.productionTip = false;
Vue.use({ store });
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
