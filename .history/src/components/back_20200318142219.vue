<template>
    <div>
        <button href="#" @click.prevent="back(">Back</button>
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