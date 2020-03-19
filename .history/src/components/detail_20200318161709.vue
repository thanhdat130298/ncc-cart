<template>
  <div>
    <button @click="this.$router.go(-1)">BACK</button>
      
      //<h1>{{product.name}}</h1>


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
      return console.log(store.product)
    }
  }
};
</script>
<style scoped>
div {
  clear: left;
}
</style>
