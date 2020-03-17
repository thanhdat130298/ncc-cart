import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(Vuex);
Vue.use(VueAxios, axios);
export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    getProducts: state => state.products,
    inCart: state => state.cart
  },
  mutations: {
    updateCart(state, product) {
      let found = state.cart.find(array => {
        return array.idPro == product.idPro;
      });
      if (found) {
        found.qty++;
      } else {
        state.cart.push({
          qty: 1,
          idPro: product.idPro,
          name: product.name,
          price: product.price
        });
      }
      product.proStatic--;
    },
    SAVE_PRODUCT(state, product) {
      state.products = product;
    },
    PUSH_TO_CART(state, cart) {
      cart = state.cart;
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
    callUpdateCart({ commit }, product) {
      commit("updateCart", product);
    },
    push({ commit }) {
      Vue.axios
        .post("https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/product")
        .then(commit => {
          commit("PUSH_TO_CART", commit.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
      });
    }
  }
});
