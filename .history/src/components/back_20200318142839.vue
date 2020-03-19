<template>
    <div>
    </div>
</template>
<script>
export default {
    name: "back",
    created() {
        this.$router.go(-1);
    }
}
</script>