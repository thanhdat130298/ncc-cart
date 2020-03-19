<template>
    <div>
        <button href="#" @click.prevent="back">Back</button>
    </div>
</template>
<script>
export default {
    com: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>