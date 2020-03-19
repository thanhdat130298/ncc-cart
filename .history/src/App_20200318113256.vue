<template>
  <div id="app">
    <h1>List Products</h1>
    <div>
      <router-link to="/home"> Home</router-link>
      <router-link to="/detail"> DETAIL</router-link>
      <router-link to="/product"> pro</router-link>
    </div>
    <router-view />
    <cart />
    <review /> 
  </div>
</template>

 <script>
import Review from "./components/review.vue";
import Cart from "./components/cart.vue";

export default {
  name: "App",
  components: {
  Review,
  Cart
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
