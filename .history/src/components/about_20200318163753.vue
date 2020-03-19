<template>
    <div>
        <p> ABOUT</p>
        <button @click="$router.go(-1)">BACK</button>
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