<template>
    <div>
    </div>
</template>
<script>
export default {
    name: "back",
    mounted() {
        this.$router.go(-1);
    }
}
</script>