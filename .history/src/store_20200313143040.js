import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    product: [],
    cart: [],
    post[]
  },
  getters: {
    forSale: state => state.product,
    inCart: state => state.cart
  },
  mutations: {
    updateCart(state, products) {
      let found = state.cart.find(array => {
        return array.idPro == products.idPro;
      });
      if (found) {
        found.qty++;
      } else {
        state.cart.push({
          qty: 1,
          idPro: products.idPro,
          name: products.name,
          price: products.price
        });
      }
      products.proStatic--;
    }
  }
});
