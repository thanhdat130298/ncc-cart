<template>
  <div id="app">
    <h1>List Products</h1>
    <product />
    <review />
  </div>
</template>

<script>
import product from "./components/product.vue";
import Review from "./components/review.vue";

export default {
  name: "App",
  components: {
    product
    ,
    Review
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
