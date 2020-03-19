<template>
  <div>
    <button @click="$router.go(-1)">BACK</button>
      
      <h1>{{detail.name}}</h1>


  </div>
</template>
<script>
import store from "@/store.js"
export default {
  name: "detail",
  data() {
    return {
      idDetail: $router.params.id
    }
  },
  computed: {
    detail() {
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
