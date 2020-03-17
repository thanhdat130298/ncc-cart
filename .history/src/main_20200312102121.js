import Vue from "vue";  
import App from "./App.vue";
import store from './store.js';

Vue.config.productionTip = false;

new Vue({
    store,
  render: h => h(App),
  data: {
    premium: false,
    cart: 0
}
}).$mount("#app");
