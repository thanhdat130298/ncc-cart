<template>
  <div>
    <button @click="this.$router.go(-1)">BACK</button>
      
      <h1>this.$router.params</h1>


  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      idDetail: this.$router.params.idd
    };
  }
};
</script>
<style scoped>
div {
  clear: left;
}
</style>
