<template>
  <div>
    <button @click="this.$router.go(-1)">BACK</button>
      
      <!-- <h1>{{product.name}}</h1> -->
      <h2 v-bind="detail"></h2>

  </div>
</template>
<script>
import store from "@/store.js"
export default {
  name: "detail",
  data() {
    return {
      idDetail: this.$route.params.idd
    };
  },

  computed: {
    detail() {
      let item = this.$store.getters.getProducts
      return console.log(this.idDetail)
    }
  }
};
</script>
<style scoped>
div {
  clear: left;
}
</style>
