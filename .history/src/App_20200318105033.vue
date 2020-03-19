<template>
  <div id="app">
    <h1>List Products</h1>
    <!-- <product />
    <cart />
    <review />  -->
    <div>
      <router-link to="/view/home"> Home</router-link>
      <router-link to="/view/detail"> DETAIL</router-link>
    </div>
    <router-view />
  </div>
</template>

 <script>
// import product from "./components/product.vue";
// import Review from "./components/review.vue";
// import Cart from "./components/cart.vue";
 import routes from "./routes";

export default {
  name: "App"
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
