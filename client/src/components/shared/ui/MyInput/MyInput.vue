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
                type: [Object, Boolean]
            },
            placeholder: {
                type: String,
                default: ""
            },
            modelValue: {
                type: [String, Number, Object, Boolean]
            },
            label: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            updateInput(event) {
                if (this.type == "radio") {
                    this.$emit('update:modelValue', this.value)
                } else if (this.type == "checkbox") {
                    this.$emit('update:modelValue', !this.value)
                } else {
                    this.$emit('update:modelValue', event.target.value)
                }
            }
        }
    }
</script>


<template>
    <div v-if = "label" class = "input">
        <label :for = "name">{{ label }}</label>
        <input
            :id = "name" 
            :type = "type"
            :name = "name"
            :placeholder = "placeholder"
            :value = "modelValue"
            @input = "updateInput"
            :disabled = "disabled"
        >
    </div>
    <input
        v-else
        :type = "type"
        :name = "name"
        :placeholder = "placeholder"
        :value = "modelValue"
        @input = "updateInput"
        :disabled = "disabled"
        data-testid = "input"
    >
</template>


<style lang="scss" scoped>

    .input {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    label {
        color: white;
        margin-right: 10px;
        font-weight: 600;
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

        &[type='date'] {
            background-color: white;
            border: 2px solid white;
            color: black;

            &:focus {
                border: 2px solid $light-green;
            }
        }
    }

</style>