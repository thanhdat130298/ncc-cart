<template>
  <div>
    <button @click="$router.go(-1)">BACK</button>
      <router-link :to="{name: 'detail'}"></router-link>
      <p>Detail: {{ $router.params. }}</p>
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
