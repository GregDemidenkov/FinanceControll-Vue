<script>
    export default {
        name: "MyInput",
        props: {
            type: {
                type: String,
                default: "text"
            },
            name: {
                type: String
            },
            value: {
                type: Object
            },
            placeholder: {
                type: String,
                default: ""
            },
            modelValue: {
                type: [String, Number, Object]
            },
            label: {
                type: String
            }
        },
        methods: {
            updateInput(event) {
                if (this.type == "radio") {
                    this.$emit('update:modelValue', this.value)
                    console.log(this.value)
                } else {
                    this.$emit('update:modelValue', event.target.value)
                }
            }
        }
    }
</script>


<template>
    <div v-if = "label" class = "input">
        <label>{{ label }}</label>
        <input 
            :type = "type"
            :name = "name"
            :placeholder = "placeholder"
            :value = "modelValue"
            @input = "updateInput"
        >
    </div>
    <input
        v-else
        :type = "type"
        :name = "name"
        :placeholder = "placeholder"
        :value = "modelValue"
        @input = "updateInput"
    >
</template>


<style lang="scss" scoped>

    .input {
        width: auto;
        display: flex;
        justify-content: center;
    }

    label {
        color: white;
        margin-right: 10px;
    }

    input {
        width: 100%;
        max-width: 500px;
        padding: 10px;
        background-color: inherit;
        border: 1px solid white;
        border-radius: 4px;
        outline: none;
        color: white;
        margin: 0 auto;

        &:focus {
            border: 1px solid $light-green;
        }
    }

</style>