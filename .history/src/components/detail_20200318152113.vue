<template>
  <div>
    <div v-for="product in arrProduct" :key="product.idPro">
    <p>Detail: {{ this.$router.params.idPro }}</p>
    </div>
      <button @click="$router.go(-1)">BACK</button>

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
