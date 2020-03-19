<template>
    <div>
        <button @click="$router.go(-1)">BACK</button>
        <p> ABOUT</p>
    </div>
</template>
<script>
export default {
  name: "about",
}
</script>
<style scoped>
  div {
    clear: left;
  }
</style>