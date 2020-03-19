<template>
  <div id="app">
    <h1>List Products</h1>
    <product />
    <cart />
    <review /> 
    <abc />
  </div>
</template>

<script>
import product from "./components/view/product.vue";
import Review from "./components/view/review.vue";
import Cart from "./components/view/cart.vue";
import abc from "./components/view/abc.vue";

export default {
  name: "App",
  components: {
    product,
    Review,
    Cart,
    abc
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
