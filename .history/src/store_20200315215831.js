import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(Vuex);
Vue.use(VueAxios, axios);
export default new Vuex.Store({
  state: {
    product: [],
    cart: []
  },
  getters: {
    forSale: state => state.product,
    inCart: state => state.cart
  },
  mutations: {
    updateCart(state, state.product) {
      let found = state.cart.find(array => {
        return array.idPro == state.pro.idPro;
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
    },
    SAVE_PRODUCT(state, product) {
      state.product = product;
      //state.product: in state
      //product: in API
    }
  },
  actions: {
    listProduct({ commit }) {
      Vue.axios
        .get("https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/product")
        .then(result => {
          commit("SAVE_PRODUCT", result.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    cartUpdate({ commit }) {
      commit('updateCart');
    }
  }
});
