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
    items:[]
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
    itemss(state, api) {
      state.items = api; 
    }
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
      product.proStatic --;
    }
  },
  actions: {
    //get product from API
    listProduct({ commit }) {
      Vue.axios
        .get("http://localhost:3000/product/get")
        .then(result => {
          commit("SAVE_PRODUCT", result.data);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    itemProduct({commit}) {
      Vue.axios
        .get
    }


    //GET from cart api
    listCart({ commit }) {
      Vue.axios
        .get("http://localhost:3000/cart")
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
          .post("http://localhost:3000/cart/create", {
            idPro: product.idPro,
            price: product.price,
            name: product.name,
            qty: 1
          })
          .catch(error => {
            console.log(error)
          console.log("else");
          });
      
    },
    callUpdateCart({ commit }, product) {
      commit("updateCart", product);
    }
  }
});
