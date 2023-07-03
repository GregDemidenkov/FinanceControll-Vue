<script>
    export default {
        name: "MyForm",
    }
</script>


<template>
    <form @submit.prevent>
        <slot></slot>
    </form>
</template>


<style lang="scss">

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        input {
            margin-top: 20px;
        }

        button {
            margin-top: 40px;
        }
    }

</style>