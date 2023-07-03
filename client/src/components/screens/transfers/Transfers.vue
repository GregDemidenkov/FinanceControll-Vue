<script>
    import Menu from '../../shared/components/menu/Menu.vue'
    import TransferCart from '../../shared/components/transfer-cart/TransferCart.vue'
    // import AccountForm from '../../shared/components/account-form/AccountForm.vue'

    // import { mapActions, mapState } from 'vuex';


    export default {
        components: { Menu, TransferCart },
        // methods: {
        //     ...mapActions({
        //         getAccounts: 'accounts/getAccounts'
        //     })
        // },
        // mounted() {
        //     this.getAccounts()
        // },
        // computed: {
        //     ...mapState({
        //         accounts: state => state.accounts.accounts
        //     }),
        // }
    }
</script>


<template>
    <div>
        <Menu :title = "'Transfers'">
            <!-- <AccountForm /> -->
        </Menu>
        <div class = "list">
            <TransferCart 
                v-for = "i in 7"
                :num = "i"
            />
        </div>
        <!-- <div v-else class = "message">
            No active accounts :(
        </div> -->
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