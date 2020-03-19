<template>
    <div>
        <p>Detail

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