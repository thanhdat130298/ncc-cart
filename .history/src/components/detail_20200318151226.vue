<template>
  <div>
    <button @click="$router.go(-1)">BACK</button>
    <p>Detail: {{ this.$router.params.id }}</p>

  </div>
</template>
<script>
export default {
  name: "detail"
};
</script>
<style scoped>
div {
  clear: left;
}
</style>
