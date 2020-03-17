import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

export default new Vuex.Store({
  state: {
    product: [
      {
        idPro: 0,
        name: "T-shirt",
        image: require("./assets/img/tshirt.png"),
        proStatic: 4,
        price: 10,
        meterial: "10% cotton",
        fabric: "20% polyme",
        real: "100%"
      },
      {
        idPro: 1,
        name: "Short",
        proStatic: 5,
        image: require("./assets/img/short.png"),
        meterial: "10% cotton",
        fabric: "20% polyme",
        price: 20,
        real: "100%"
      },
      {
        idPro: 2,
        name: "Hat",
        proStatic: 5,
        image: require("./assets/img/hat.png"),
        meterial: "10% cotton",
        fabric: "20% polyme",
        price: 30,
        real: "100%"
      },
      {
        idPro: 3,
        name: "Bag",
        proStatic: 100,
        image: require("./assets/img/bag.png"),
        meterial: "10% cotton",
        fabric: "20% polyme",
        price: 40,
        real: "100%"
      }
    ],
    cart: []
  },
  getters: {
        forSale: state =>state.product,
        inCart: state => state.cart
    },
  mutations: {
        updateCart(state, products) {
            var id = products.idPro;
            console.log(id)
            let found = state.cart.find(array => {return array.id == products.idPro})
            if(found) {
                console.log('trung');
                found.qty ++;
                found.total = found.qty * found.price;
            } else {
                console.log('ko trung');
                state.cart.push({
                    qty: 1,
                    idPro: state.cart[id].idPro,
                    name: state.cart.name,
                    price: state.cart.price
                })
            }
            
            console.log(products.name);
        }
    //   TEST: (state, disable) => {
    //       state.product
    //   }
  }
  
});
