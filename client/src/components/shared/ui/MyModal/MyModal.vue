<script>
    import toggleMixin from '@/lib/mixins/toggleMixin'


    export default {
        name: "MyModal",
        mixins: [toggleMixin]
    }

</script>


<template>

    <div 
        v-if = "show" 
        class = "modal" 
        @click = "hideModal"
        data-testid = "modal"
    >
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
        z-index: 100;
    }

    .modal__content {
        display: flex;
        align-items: center;
        margin: auto;
        padding: 40px;
        background-color: $dark-gray;
        box-shadow: 0px 3px 4px rgba(24, 24, 24, 0.25);
        border: 3px solid white;
        border-radius: 12px;
        min-height: 400px;
        min-width: 40%;
        z-index: 90;
    }

</style>