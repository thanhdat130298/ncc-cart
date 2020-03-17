import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import VueRouter from 'vue-router';
import VueRouter from 'vue-router';
import router from '/routes';

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use({ store });
const router = new VueRouter({routes});
new Vue({
  store,
  router
  render: h => h(App)
}).$mount("#app");
