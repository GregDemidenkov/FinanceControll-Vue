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
                deleteAccount: 'accounts/deleteAccount'
            }),
        }
    }
</script>


<template>
    <div class = "cart">
        <img src="@/assets/img/accounts.svg" alt="">
        <div class="info">
            <p><strong>№ </strong>{{ info.number }}</p>
            <p><strong>Money: </strong>{{ info.money }} ₽</p>
            <p><strong>Created at </strong>{{ info.created_at.slice(0, 10) }}</p>
        </div>
        <MyButton @click = "deleteAccount(info._id)">Delete</MyButton>
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