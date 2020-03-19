<template>
    <div>
        <h1>{{abc}}</h1>
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