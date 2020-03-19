<template>
  <div>
    <div v-for="product in arrProduct" :key="product.idPro">
      <button @click="$router.go(-1)">BACK</button>
    </div>
    <p>Detail: {{ this.$router.params.idPro }}</p>

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
