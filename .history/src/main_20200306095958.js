import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  data: {
    premium: false,
    cart: 0
},
methods: {
    updateCart() {
        this.cart += 1
    }
}
}).$mount("#app");
