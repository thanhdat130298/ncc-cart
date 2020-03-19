<template>
  <div>
    <button @click="this.$router.go(-1)">BACK</button>
      
      <h1>{{idDetail}}</h1>


  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      idDetail: this.$router.params.id
    };
  }
};
</script>
<style scoped>
div {
  clear: left;
}
</style>
