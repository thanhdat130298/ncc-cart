<template>
  <div>
      <button @click="$router.go(-1)">BACK</button>
      <div class="item">
        <img :src="detail.image" alt="detail.name" />
        <ul>
              <li>Meterial: {{ detail.name }}</li>
              <li>Meterial: {{ detail.meterial }}</li>
              <li>Fabric: {{ detail.fabric }}</li>
              <li>Real: {{ detail.real }}</li>
              <li>Price: {{ detail.price }}</li>
            </ul>
      </div>

  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      idDetail: this.$route.params.idd
    };
  },
  mounted() {
    return this.$route.go("detail")
  }

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
li {
  list-style: none;
}
</style>
