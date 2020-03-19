import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import routes from


Vue.config.productionTip = false;
Vue.use({ store });
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
