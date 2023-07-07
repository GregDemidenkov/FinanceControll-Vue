<script>
    import { mapActions } from 'vuex'


    export default {
        props: {
            info: {
                type: Object,
                required: true
            },
            accountLinkStatus: {
                type: Boolean
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
            <router-link 
                v-if = "accountLinkStatus" 
                class = "account-link" 
                :to = "`/accounts/${info._id}`"
            >
                <p><strong>№ </strong>{{ info.number }}</p>
            </router-link>
            <p v-else><strong>№ </strong>{{ info.number }}</p>
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

            .account-link {
                display: inline-block;
                width: 230px;

                &:hover {
                    p {
                        color: $light-green;
                    }
                }
            }

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