<template>
    <div>
        ABOUT<a @click="$router.go(-1)">back</a>
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