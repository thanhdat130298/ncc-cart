<template>
  <div>
    <div class="container">
      <div class="fixed">
      <p class="cart"> Cart = {{ mainCart }} </p>
        <div v-for="carts in cart" v-bind:key="carts.idPro" class="cartdetail">
          <div>Product Name: {{ carts.name }}</div>
          <div>Choosed: {{ carts.qty }}</div>
          <div>Product Price: {{ carts.price }}$</div>
        </div>
      <div class="total">Total: {{ total }}$</div>
      </div>

      <div class="clear"></div>
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
          proStatic: 5,
          image: require("../assets/img/hat.png"),
          meterial: "10% cotton",
          fabric: "20% polyme",
          price: 30,
          real: "100%"
        },
        {
          idPro: 3,
          name: "Bag",
          proStatic: 100,
          image: require("../assets/img/bag.png"),
          meterial: "10% cotton",
          fabric: "20% polyme",
          price: 40,
          real: "100%"
        }
      ],
      cart: []
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
        return products.idPro === array.idPro;
      });
      if (found) {
        found.qty++;
      } else {
        this.cart.push({
          qty: 1,
          idPro: this.product[this.idBut].idPro,
          image: this.product[this.idBut].image,
          price: this.product[this.idBut].price,
          name: this.product[this.idBut].name
        });
      }
      this.product[this.idBut].proStatic--;
    }
  },
  computed: {
    total() {
      var sum = 0;
      for (let i = 0; i < this.cart.length; i++) {
        sum += this.cart[i].price * this.cart[i].qty;
      }
      return sum;
    },
    mainCart() {
      var x = 0;
      for (let i = 0; i < this.cart.length; i++) {
        x += this.cart[i].qty;
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
  height: 50px; 
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
}
.fixed>div {
  width: 100%;
}
.fixed {
  border: 1px solid red;
  position: fixed;
  top: 0;
  right: 0;
  margin-bottom: 100px;
  width: 300px;
  background-color: cornsilk;
}
.cartdetail {
  width: 40%;
  border-bottom: 1px solid black;

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
  background-color: burlywood;
  color: white;
  font-weight: bold;
  width: 100%;
  margin: 0;
  border: 1px solid green;
}
</style>
