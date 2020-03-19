<template>
    <div>
        <a href="#" @click.prevent="back"></a>
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