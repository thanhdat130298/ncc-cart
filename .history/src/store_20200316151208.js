import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(Vuex);
Vue.use(VueAxios, axios);
export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  getters: {
    getProducts: state => state.products,
    inCart: state => state.carts
  },
  mutations: {
    increaseQty(state, product) {
      let found = state.carts.find(array => {
        return array.idPro == product.idPro;
      });
      
      console.log(found)
      if (found) {
        found.qty++;
      } 
    },
    postToCart(state, product)  {
      let found = state.carts.find(array => {
        return array.idPro != product.idPro;
      });
      if (found) {
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
      state.carts = cartApi;
    }
  },
  actions: {
    //get from product api
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
