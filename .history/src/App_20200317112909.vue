<template>
  <div id="app">
    <h1>List Products</h1>
    <router-link :to="{ name: 'prodct' }">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>

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
