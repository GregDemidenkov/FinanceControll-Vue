<script>
    import { mapActions, mapState } from 'vuex'

    import Menu from '../../shared/components/menu/Menu.vue'
    import AccountCart from '../../shared/components/account-cart/AccountCart.vue'
    import AccountForm from '../../shared/components/account-form/AccountForm.vue'


    export default {
        components: { Menu, AccountCart, AccountForm },
        methods: {
            ...mapActions({
                getAccounts: 'accounts/getAccounts'
            })
        },
        mounted() {
            this.getAccounts()
        },
        computed: {
            ...mapState({
                accounts: state => state.accounts.accounts
            }),
        }
    }
</script>


<template>
    <div>
        <Menu :title = "'Accounts'">
            <AccountForm />
        </Menu>
        <div class = "list" v-if = "this.accounts.length > 0">
            <AccountCart 
                v-for = "acc in this.accounts"
                :key = "acc.id"
                :info = "acc"
                :accountLinkStatus = "true"
            />
        </div>
        <div v-else class = "message">
            No active accounts :(
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .list {
        display: flex;
        flex-direction: column;
        padding-top: 60px;

        div {
            margin-bottom: 20px;
        }
    }

    .message {
        margin-top: 60px;
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        color: $light-green;
    }

</style>