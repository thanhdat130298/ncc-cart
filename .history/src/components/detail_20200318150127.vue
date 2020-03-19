<template>
    <div>
        <p>Detail: {{this.$router.params.id}}</p>
        
        <button @click="$router.go(-1)">BACK</button>
    </div>
</template>
<script>
export default {
    name: "detail"
}
</script>
<style scoped>
  div {
    clear: left;
  }
</style>