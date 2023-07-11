<script>
    export default {
        name: 'MySelect',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            },
            disabledOptionName: {
                type: String
            }
        },
        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>


<template>
    <select 
        :value="modelValue"
        @change="changeOption"
        data-testid = "select"
    >
      <option disabled value = "">{{ disabledOptionName }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
</template>

  
<style scoped>

    select {
        padding: 10px;
        border: none;
        border-radius: 4px;
        outline: none;
        border-right: 10px solid transparent
    }

</style>