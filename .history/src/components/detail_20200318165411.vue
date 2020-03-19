<template>
  <div>
      <button @click="$router.go(-1)">BACK</button>
      <div class="item">
        <img :src="detail.image" alt="detail.name" />
        <ul>{{result}}
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
  computed: {
    detail() {
      let items = this.$store.getters.getProducts;
      return items.find(
        // item => item.idPro === this.idDetail
      )
    },
    result() {
      let items = this.$store.getters.getProducts;
      return items
    }
  }
};
</script>
<style scoped>
div {
  clear: left;
}
img {
  width: 40%;
  float: left;
}
.item {
  width: 80%;
  margin: 0 auto;
  background-color: #1111;
  height: 300px;
}
ul {
  box-sizing: content-box;
  float: left;
  width: 50%;
  background: rgba(165, 24, 24, 0.067);
  height: 100px;
}
li {
  padding: 10px;
  list-style: none;
}
</style>
