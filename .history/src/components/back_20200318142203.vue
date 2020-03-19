<template>
    <div>
        <buton href="#" @click.prevent="back">Back</a>
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