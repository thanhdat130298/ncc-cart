<template>
  <div>
    <button @click="this.router.go(-1)">BACK</button>
    <div v-for="product in arrProduct" :key="product.idPro">
      <router-link :to="name: "></router-link>
      <p>Detail: {{ $router.params.idPro }}</p>
    </div>

  </div>
</template>
<script>
export default {
  name: "detail",
  computed: {
    arrProduct() {
      return this.$store.getters.getProducts;
    }
  }
};
</script>
<style scoped>
div {
  clear: left;
}
</style>
