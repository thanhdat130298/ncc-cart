<template>
    <div>
    </div>
</template>
<script>
export default {
    name: "back",
    created() {
        return this.$router.go(-1);
    }
}
</script>