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
    },
    SAVE_PRODUCT(state, product) {
      state.product = product;
    },
    POST_TO_CART(state,products) {
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
    pushToCart({ commit }) {
      Vue.axios
        .post("https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/product")
        .then(post => {
          commit("POST_TO_CART", {
            {"key":"idPro","value":"125"},{"key":"name","value":"OWN "},{"key":"price","value":"70"},{"key":"image","value":"https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5d9dd8f1ddac47889d9baa33012a3e97_9366/Ao_phong_Own_the_Run_Mau_cam_EI4811_21_model.jpg"},{"key":"meterial","value":"51% polyester"},{"key":"fabric","value":"9% recycled polyester"},{"key":"real","value":"real"},{"key":"proStatic","value":"4"}]
          });
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    callUpdateCart({ commit }, products) {
      commit("updateCart", products);
    }
  }
});
