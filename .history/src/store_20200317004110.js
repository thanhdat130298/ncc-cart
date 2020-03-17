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
    updateCart(state, product) {
      let found = this.state.carts.find(array => {
        // console.log(array.idPro,"cartmu");
        // console.log(product.idPro,"promu");
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
       console.log(this.state.cartss)
      let found = this.state.cartss.find(array => {
        // console.log(array.idPro,"cartac");
        // console.log(product.idPro,"proac");
        return array.idPro == product.idPro;
      });
      if (found) {
        Vue.axios.delete(
          "https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart/" + found.qty,
          {}
        );

        Vue.axios
          .post("https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart", {
            idPro: product.idPro,
            price: product.price,
            name: product.name,
            qty: found.qty
          })
          // .then(result => {
          //   console.log(result)
          // })
          .catch(error => {
            console.log(error);
          });
          console.log("if")
      } else {
        Vue.axios
          .post("https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart", {
            idPro: product.idPro,
            price: product.price,
            name: product.name,
            qty: 1
          })
          // .then(result => {
          //   console.log(result)
          // })
          .catch(error => {
            console.log(error);
          });
          console.log("else")
      }
    },
    callUpdateCart({ commit }, product) {
      commit("updateCart", product);
    }
  }
});
