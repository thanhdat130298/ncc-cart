<template>
  <div>
    <div class="container">
      <div class="clear"></div>
      <button @click="$router.push({path: '/'})">BACK</button>
      <div v-for="product in arrProduct" :key="product.idPro">
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
            <router-link
              :to="{ name: 'detail', params: { idd: product.idPro } }"
              class="butDetail"
            >
              DETAIL</router-link
            >
            <button
              v-on:click="updateCart(product)"
              :disabled="!check(product)"
              :class="{ disable: !check(product) }"
              class="butCart"
            >
              ADD
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
    arrProduct() {
      return this.$store.getters.getProducts;
    }
  },
  created() {
    // console.log("123")
    this.$store.dispatch("listProduct");
  },
  methods: {
    updateCart(product) {
      let pro =   this.$store.dispatch("listProduct");
      // console.log("aa", product)
      this.$store.dispatch("callUpdateCart", product);
      this.$store.dispatch("saveCart", product);
    },
    check(product) {
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
.static {
  display: block;
}
.total {
  clear: left;
  color: white;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background-color: chocolate;
}
h1 {
  padding: 0;
  margin: 0;
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
  display: block;
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
  height: 500px;
  border: 1px solid black;
  float: left;
  margin-left: 1%;
  margin-top: 10px;
  width: 24%;
  box-sizing: border-box;
}
.color-box {
  width: 40px;
  margin-left: 30%;
  height: 40px;
}
.butDetail {
  background-color: cornflowerblue;
  text-decoration: none;
  color: white;
  margin-right: 5px;
  font-size: 15px;
  height: 30px;
  box-sizing: border-box;
  width: 60px;
  border: 1px solid cornflowerblue;
  
  padding: 6.3px;
}
.butCart {
  margin-right: 5px;
  background-color: cornflowerblue;
  border: 1px solid cornflowerblue;
  color: white;
  border: none;
  outline: none;
  font-size: 15px;
  height: 32px;
  width: 60px;
}
.butDetail:hover,
.butCart:hover {
  border: 1px solid cornflowerblue;
  background-color: white;
  color: cornflowerblue;
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
