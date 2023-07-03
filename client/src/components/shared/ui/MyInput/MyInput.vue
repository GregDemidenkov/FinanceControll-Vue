<script>
    export default {
        name: "MyInput",
        props: {
            type: {
                type: String,
                default: "text"
            },
            placeholder: {
                type: String,
                default: ""
            },
            modelValue: {
                type: [String, Number]
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>


<template>
    <input 
        :type="type"
        :placeholder="placeholder"
        :value = "modelValue"
        @input = "updateInput"
    >
</template>


<style lang="scss" scoped>

    input {
        width: 100%;
        max-width: 500px;
        padding: 10px;
        background-color: inherit;
        border: 1px solid white;
        border-radius: 4px;
        outline: none;
        color: white;

        &:focus {
            border: 1px solid $light-green;
        }
    }

</style>