<template>
  <div>
    <div class="container">
      <p class="cart">Your Cart Have [{{ mainCart}}] Product</p>
      <div v-for="carts in cart" v-bind:key="carts.name" class="cartdetail">
        <div>Product Name: {{ carts.name }}</div>
        <div>Choosed: {{ carts.quantity }}</div>
        <div>Product Price: {{ carts.price }}</div>
      </div>
      
      <div class="clear"></div>
      <div class="total">Total: {{ total }}</div>
      <div v-for="products in product" :key="products.idPro">
        <div class="pro1">
          <img :src="products.image" alt="image" />
          <div>{{ products.name }}</div>
          <div class="static">
            <p
              v-if="products.proStatic >= 10"
              style="background-image: linear-gradient(to right, white, green, white);color: white;"
            >
              Selling
            </p>
            <p
              v-else-if="products.proStatic < 10 && products.proStatic > 0"
              style="background-image: linear-gradient(to right, white, red, white);color: white;"
            >
              Limit
            </p>
            <p
              v-else
              style="background-image: linear-gradient(to right, white, #808080, white);color: white;"
            >
              Empty
            </p>
            <ul>
              <li>{{ products.meterial }}</li>
              <li>{{ products.fabric }}</li>
              <li>{{ products.real }}</li>
            </ul>
            <button
              v-on:click="updateCart(products)"
              :disabled="!check(products)"
              :class="{ disable: !check(products) }"
            >
              CART
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      checkStatic: 0,
      idBut: 0,
      temp: 0,
      product: [
        {
          idPro: 0,
          name: "T-shirt",
          image: require("../assets/img/tshirt.png"),
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
          image: require("../assets/img/short.png"),
          meterial: "10% cotton",
          fabric: "20% polyme",
          price: 20,
          real: "100%"
        },
        {
          idPro: 2,
          name: "Hat",
          proStatic: 0,
          image: require("../assets/img/hat.png"),
          meterial: "10% cotton",
          fabric: "20% polyme",
          price: 30,
          real: "100%" 
        },
        {
          idPro: 3,
          name: "Bag",
          proStatic: 0,
          image: require("../assets/img/bag.png"),
          meterial: "10% cotton",
          fabric: "20% polyme",
          price: 40,
          real: "100%" 
        }
      ],
      cart: [],
      idPro: 0,
      qtyCart: 0,
      nameInCart: null,
      quantity: 1
    };
  },
  methods: {
    check(products) {
      var id = products.idPro;
      if (this.product[id].proStatic > 0) {
        return true;
      }
      return false;
    },
    updateCart(products) {
      this.idBut = products.idPro;
      
      var found = this.cart.find(array => {
        return products.idPro == array.idPro;
      });
      if (found) {
        products.quantity++;
      } else {
        this.cart.push({
          quantity: 1,
          idPro: this.product[this.idPro]
        });
      }
      this.product[this.idBut].proStatic--;
    }
  },
  computed: {
    total() {
      var sum = 0;
      for (let i = 0; i < this.cart.length; i++) {
        sum += this.cart[i].price * this.cart[i].quantity;
      }
      return sum;
    },
    mainCart() {
      var x = 0;
      for (let i = 0; i < this.cart.length; i++) {
        x += this.cart[i].quantity;
      }
      return x;
    }
  }
};
</script>
<style scoped>
.disable {
  background-color: black;
}
.total {
  clear: left;
  color: white;
  background-color: chocolate;
}
* {
  margin: 0;
  padding: 0;
}
h3 {
  margin: 40px 0 0;
}
.clear {
  clear: left;
}
form {
  width: 70%;
  margin: 0 auto;
  padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0;
}
h2 {
  margin: 0;
  padding: 0;
}
p {
  margin: 5px;
}
.dis {
  background-color: yellow;
}
a {
  color: #42b983;
}
img {
  height: 300px;
  width: 90%;
}
.container {
  margin: 0 auto;
}
.cartdetail {
  width: 30%;

  float: left;
}
.pro1 {
  border: 1px solid black;
  float: left;
  margin-left: 1%;
  margin-top: 5%;
  width: 24%;
  box-sizing: border-box;
}
.color-box {
  width: 50px;
  margin-left: 30%;
  height: 50px;
}
button {
  background-color: brown;
  color: white;
  outline: none;
  height: 40px;
  width: 70px;
}
.cart {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid green;
}
</style>
