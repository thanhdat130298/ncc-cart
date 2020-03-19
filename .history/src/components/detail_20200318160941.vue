<template>
  <div>
    <button @click="this.$router.go(-1)">BACK</button>
      
      <h1>{{this.$route.params.idd}}</h1>


  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
    };
  }
};
</script>
<style scoped>
div {
  clear: left;
}
</style>
