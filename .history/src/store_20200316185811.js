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
    updateCart(product) {

      let found = this.state.carts.find(array => {
        return array.idPro == product.idPro;
      });
      if (found) {
        console.log(found,233232)
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
    saveCart( product) {
      let found = this.state.cartss.find(array => {
        return array.idPro == product.idPro;
      });
      if (found) {
        this.state.cartss.qty++;
        Vue.axios
        .post("https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart", {
          idPro: product.idPro,
          price: product.price,
          name: product.name,
          qty : this.state.cartss.qty
        })
        // .then(result => {
        //   console.log(result)
        // })
        .catch(error => {
          console.log(error);
        });
      } 
      //console.log(find.qty)
      else {
        console.log(product,122121)
        this.state.cartss.push({
          qty: 1,
          idPro: product.idPro,
          name: product.name,
          price: product.price
        });
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
      }
        
      
      
      
    },
    callUpdateCart({ commit }, product) {
      commit("updateCart", product);
    }
  }
});
