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
    cartss: []
  },
  getters: {
    getProducts: state => state.products,
    inCart: state => state.carts
  },
  mutations: {
    SAVE_PRODUCT(state, proApi) {
      state.products = proApi;
    },
    SAVE_CART(state, cartApi) {
      state.carts = cartApi;
    },
    save(state, cart) {
      state.cartss = cart;
      console.log(state.cartss)
    },
    updateCart(state, product) {
      let found = this.state.carts.find(array => {
        return array.idPro == product.idPro;
      });
      if (found) {
        found.qty++;
      } else {
        this.state.carts.push({
          qty: 1,
          idPro: product.idPro,
          name: product.name,
          price: product.price
        });
      }
      console.log(this.state.carts.length)
   
    }
  },
  actions: {
    //get product from API
    listProduct({ commit }) {
      Vue.axios
        .get("http://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/product")
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
        .get("http://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart")
        .then(result => {
          commit("SAVE_CART", result.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    callUpdateCart({ commit }, product) {
      commit("updateCart", product);
    },
    submitCart({ commit }, cart) {
      Vue.axios
      .post("http://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart",{ 
        cart:cart
      })
      .then(result => {
        commit("save", result.data);
      })
      .catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  }
});
