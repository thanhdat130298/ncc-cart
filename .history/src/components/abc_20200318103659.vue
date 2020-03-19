<template>
    <div>
        <div>{{abc}}</div>
    </div>
</template>
<script>
export default {
    name: "abc",
    computed: {
        abc() {
            return "123";
        }
    }
}
</script>