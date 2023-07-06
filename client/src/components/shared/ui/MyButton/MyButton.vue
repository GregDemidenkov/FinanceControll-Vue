<script>

    export default {
        name: "MyButton"
    }

</script>


<template>

    <button class = "btn">
        <slot></slot>
    </button>

</template>


<style lang = "scss" scoped>

    .btn {
        padding: 8px 16px;
        background-color: $light-green;
        color: white;
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
    }

</style>