import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(Vuex);
Vue.use(VueAxios, axios);
export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    idBut: 0
  },
  getters: {
    getProducts: state => state.products,
    inCart: state => state.carts
  },
  mutations: {
    updateCart(state, product) {
      state.idBut = product.idPro;
      console.log(id)
      let found = state.carts.find(array => {
        return array.idPro == product.idPro;
      });
      if (found) {
        found.qty++;
      } else {
        state.carts.push({
          qty: 1,
          idPro: product.idPro,
          name: product.name,
          price: product.price
        });
      }
      product.proStatic--;
    },
    SAVE_PRODUCT(state, proApi) {
      state.products = proApi;
    },
    SAVE_CART(state, cartApi) {
      // if(cartApi.idPro == state.products.idPro)
      console.log(cartApi )
      state.carts = cartApi;
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
    //GET from cart api
    listCart({ commit }) {
      Vue.axios
        .get("https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart")
        .then(result => {
          commit("SAVE_CART", result.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    //post to cart API
    saveCart(state, product) {
      
      Vue.axios
        .post("https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart", {
          idPro: product.idPro,
          price: product.price,
          name: product.name,
          qty: 1
        })
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.log(error);
        });
    },
    callUpdateCart({ commit }, product) {
      commit("updateCart", product);
    }
  }
});
