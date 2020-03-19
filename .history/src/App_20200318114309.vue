<template>
  <div id="app">
    <h1>List Products</h1>
    <div class="menu">
      <router-link to="/home" class="home nav"> HOME</router-link>
      <router-link to="/about" class="about nav"> ABOUT</router-link>
      <router-link to="/product" class="product nav"> PRODUCT</router-link>
    </div>
    <router-view />
    <cart />
  </div>
</template>

 <script>
import Cart from "./components/cart.vue";

export default {
  name: "App",
  components: {
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
<style  scoped>
  .nav {
    background-color: cornflowerblue;
    margin: 5px;  
    display: block ;
    width: 100px;
    float: left;
    text-decoration: none;
    padding: 10px;
    color: white;
    font-weight: bold;
  }
  .nav:focus {
    color: cornflowerblue;
    border: 1px solid cornflowerblue;
    background-color: white;
  }
  .menu {
    width: 30%;
    margin: 0 auto;
  }
</style>
