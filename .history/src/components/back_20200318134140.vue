<template>
    <div>
        Detail
        <router-link to="back">BACK</router-link>
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