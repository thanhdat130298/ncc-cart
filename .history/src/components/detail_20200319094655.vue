<template>
  <div>
    <button @click="$router.push({path: '/product'})">BACK</button>
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
      idDetail: this.$route.s.idd
    };
  },
  computed: {
  detail() {
      return this.$store.dispatch("itemProduct", this.idDetail);
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
  height: 300px;
}
ul {
  box-sizing: content-box;
  float: left;
  width: 50%;
  height: 100px;
}
li {
  padding: 10px;
  list-style: none;
}
</style>
