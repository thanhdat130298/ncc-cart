<template>
  <div>
    <div class="container">
      <div class="clear"></div>
      <div v-for="product in forSale" :key="product.idPro">
        <div class="product">
          <img :src="product.image" alt="image" />
          <div>{{ product.name }}</div>
          <div class="static">
            <p
              v-if="product.proStatic >= 10"
              style="background-image: linear-gradient(to right, white, green, white);color: white;"
            >
              Selling
            </p>
            <p
              v-else-if="product.proStatic < 10 && product.proStatic > 0"
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
              <li>Meterial: {{ product.meterial }}</li>
              <li>Fabric: {{ product.fabric }}</li>
              <li>Real: {{ product.real }}</li>
              <li>Price: {{ product.price }}</li>
            </ul>
            <button
              v-on:click="updateCart(product)"
              :disabled="!check(product)"
              :class="{ disable: !check(product) }"
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
  computed: {
    forSale() {
      return this.$store.getters.forSale;
    },
    inCart() {
      return this.$store.getters.inCart;
    }
  },
  mounted() {
    this.$store.dispatch("listProduct");
  },
  methods: {
    updateCart(product) {
      this.$store.dispatch("callUpdateCart", product);
    },
    check(products) {
      if (product.proStatic > 0) {
        return true;
      }
      return false;
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
  line-height: 50px;
  font-size: 20px;
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
.fixed > div {
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
.product {
  border: 1px solid black;
  float: left;
  margin-left: 1%;
  margin-top: 5%;
  width: 24%;
  box-sizing: border-box;
}
.color-box {
  width: 40px;
  margin-left: 30%;
  height: 40px;
}
button {
  background-color: brown;
  color: white;
  outline: none;
  height: 40px;
  width: 70px;
}
.cart {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: burlywood;
  color: white;
  font-weight: bold;
  width: 100%;
  margin: 0;
  border: 1px solid green;
}
</style>
