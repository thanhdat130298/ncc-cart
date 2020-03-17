import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";

import Hello from '@/components/Hello'

Vue.config.productionTip = false;
Vue.use({ store });
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
