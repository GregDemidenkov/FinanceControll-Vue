<script>
    import toggleMixin from '@/lib/mixins/toggleMixin';


    export default {
        name: "MyModal",
        mixins: [toggleMixin]
    }

</script>


<template>

    <div class = "modal" v-if = "show" @click = "hideModal">
        <div class = "modal__content" @click.stop>
            <slot ></slot>
        </div>
    </div>

</template>


<style lang = "scss" scoped>

    .modal {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        display: flex;
        background: rgba(0, 0, 0, 0.568);
    }

    .modal__content {
        display: flex;
        align-items: center;
        margin: auto;
        background-color: $dark-blue;
        border-radius: 12px;
        min-height: 400px;
        min-width: 40%;
    }

</style>