<script>
    import { mapActions } from 'vuex'


    export default {
        props: {
            info: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions({
                deleteTransfer: 'transfers/deleteTransfer'
            }),
        },
        mounted() {
            console.log(this.info)
        }
    }
</script>


<template>
    <div class = "cart">
        <img v-if = "info.transfer_type === 'income'" src="@/assets/img/up.svg" alt="">
        <img v-else src="@/assets/img/down.svg" alt="">
        <div class="info">
            <p><strong>Account № </strong>{{ info.account }}</p>
            <p><strong>Class: </strong>{{ info.class_type }}</p>
            <p><strong>Money: </strong>{{ info.money }} ₽</p>
        </div>
        <MyButton @click = "deleteTransfer(info.id)">Cancel</MyButton>
    </div>
</template>


<style lang="scss" scoped>

    .cart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 16px 40px;
        border: 2px solid $dark-blue;
        border-radius: 8px;

        img {
            width: 60px;
            margin-right: 40px;
        }

        .info {
            flex: 80%;
            p {
                color: white;
                font-size: 18px;

                strong {
                    color: $light-green;
                    font-weight: 700;
                }
            }
        }

        button {
            display: none;
        }

        &:hover {
            border: 2px solid $light-green;

            button {
                display: block;
            }
        }
    }

</style>