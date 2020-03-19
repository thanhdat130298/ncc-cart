<template>
    <div>
        <button @click="$router.push({path})">BACK</button>
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