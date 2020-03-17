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
    SAVE_PRODUCT(state, proApi) {
      state.products = proApi;
    },
    SAVE_CART(state, cartApi) {
      state.carts = cartApi;
    },
    updateCart(state, product) {

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
    }
  },
  actions: {
    listProduct({ commit }, product) {
      let finder = this.state.carts.find(arr => {       
        console.log("arrIdpro",arr.idPro)
        console.log("arrIdpro",product.idPro)
        
        return product.idPro;
        // return product.idPro;
      });
      console.log(finder);
      
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
          body: 
        })
        // .then(result => {
        //   console.log(result)
        // })
        .catch(error => {
          console.log(error);
        });
    },
    callUpdateCart({ commit }, product) {
      commit("updateCart", product);
    }
  }
});
