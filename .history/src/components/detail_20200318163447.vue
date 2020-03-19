<template>
  <div>
    <button @click="this.$router.go(-1)">BACK</button>
      <div class="item">
        <img :src="detail.image" alt="detail.name" />
        <p>{{detail.name}}</p>
      </div>

  </div>
</template>
<script>
// import store from "@/store.js"
export default {
  name: "detail",
  data() {
    return {
      idDetail: this.$route.params.idd
    };
  },

  computed: {
    detail() {
      let items = this.$store.getters.getProducts;
      return items.find(
        item => item.idPro === this.idDetail
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
