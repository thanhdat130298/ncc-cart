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
        Vue.axios({
          method: 'post',
          url: 'https://5e6aec600f70dd001643c0b4.mockapi.io/apiv1/cart',
          data: {
            "id": "9",
            "price": "70",
            "name": "OWN ",
            "idPro": "12",
            "qty": 65,
            "image": "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5d9dd8f1ddac47889d9baa33012a3e97_9366/Ao_phong_Own_the_Run_Mau_cam_EI4811_21_model.jpg",
         
            "proStatic": "4"
          }
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
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
    }
  }
});
