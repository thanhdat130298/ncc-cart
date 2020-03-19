<template>
  <div>
    <button @click="$router.go(-1)">BACK</button>
      
      <h1>{{produ.name}}</h1>
    </div>

  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      idDetail: $router.params.id
    }
  },
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
