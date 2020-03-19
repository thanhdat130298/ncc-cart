<template>
  <div>
    <div class="fixed">
      <div class="cart">Cart = {{ Counter }} <button class="x" v-on:click="none">X</button></div>
      <div v-for="cart in inCart" v-bind:key="cart.idPro" class="cartdetail" v-html="display">
        <div>Product Name: {{ cart.name }}</div>
        <div>Product id: {{ cart.idPro }}</div>
        <div>Choosed: {{ cart.qty }}</div>
        <div>Product Price: {{ cart.price }}$</div>
      </div>
      <div class="total">Total: {{ totalPrice }}$</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    display: "display: 'none'"
  },
  computed: {
    none() {
      return "display"
    }
    inCart() {
      return this.$store.getters.inCart;
    },
    totalPrice() {
      let sum = 0;
      for (let i = 0; i < this.$store.state.carts.length; i++) {
        sum +=
          this.$store.state.carts[i].price * this.$store.state.carts[i].qty;
        //console.log(this.$store.state.carts)
      }
      return sum;
    },
    Counter() {
      let count = 0;
      for (let i = 0; i < this.$store.state.carts.length; i++) {
        count = count + this.$store.state.carts[i].qty;
      }
      return count;
    }
  },
  created() {
    this.$store.dispatch("listCart");
  }
};
</script>
<style scoped>
.disable {
  background-color: black;
}
.x {
  position: absolute;
  width: 50px;
  top: 0;
  right: 0;
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
  box-shadow: 5px 10px 10px 5px #888888;
  opacity: 0.9;
  border: 1px solid red;
  position: fixed;
  top: 0;
  right: 0;
  margin-bottom: 100px;
  border-radius: 5px;
  width: 300px;
  background-color: cornsilk;
}
.cartdetail {
  display: none;
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
