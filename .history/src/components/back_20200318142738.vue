<template>
    <div>
        <button href="#" @click.prevent="
           return this.$router.go(-1);">Back</button>
    </div>
</template>
<script>
export default {
    name: "back"
}
</script>