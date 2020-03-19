<template>
    <div>
        Detail
        <a @click="$router.go(-1)">back</a>
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