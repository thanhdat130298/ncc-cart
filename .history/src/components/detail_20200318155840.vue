<template>
  <div>
    <button @click="this.$router.go(-1)">BACK</button>
      
      <h1>{{detail.name}}</h1>


  </div>
</template>
<script>
import store from "@/store.js"
export default {
  name: "detail",
  data() {
    return {
      idDetail: this.$router.params.id
    };
  },
  computed: {
    detail() {
      console.log(idDetail)
      return store.product.find(
        product => product.idPro === this.idDetail
      )
    }
  }
};
</script>
<style scoped>
div {
  clear: left;
}
</style>
