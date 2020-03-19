<template>
    <div>
        <a href="#" @click.prevent="this.">Back</a>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>