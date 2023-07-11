<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                modalVisible: false
            }
        },
        methods: {
            showModal() {
                this.modalVisible = true
            },
        }
    }
</script>


<template>
    <div class = "menu">
        <h2>{{ this.title }}</h2>
        <MyButton 
            class = "menu-btn"
            @click = "showModal"
            data-testid = "menu-btn"
        >
            Add
        </MyButton>
    </div>
    <MyModal
        v-model:show = "modalVisible"
    >
        <slot></slot>
    </MyModal>
</template>


<style lang="scss" scoped>

    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid $light-green;

        h2 {
            font-size: 36px;
            font-weight: 700;
            color: white;
        }
    }

    .menu-btn {
        font-size: 20px;
        font-weight: 600;
    }


</style>