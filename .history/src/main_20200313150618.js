import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
Vue.use
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
