<script>
    import { mapActions, mapState } from 'vuex'

    import Menu from '../../shared/components/menu/Menu.vue'
    import TransferCart from '../../shared/components/transfer-cart/TransferCart.vue'
    import TransferForm from '../../shared/components/transfer-form/TransferForm.vue'


    export default {
        components: { Menu, TransferCart, TransferForm },
        methods: {
            ...mapActions({
                getTransfersByAccountId: 'transfers/getTransfersByAccountId',
                getAccountById: 'accounts/getAccountById'
            })
        },
        mounted() {
            this.getTransfersByAccountId({account_id: this.$route.params.id})
        },
        computed: {
            ...mapState({
                transfers: state => state.transfers.transfers,
                accountPageInfo: state => state.accounts.accountPageInfo,
            })
        },
        watch: {
            transfers() {
                this.getAccountById(this.$route.params.id)
            }
        }
    }
</script>


<template>
    <div>
        <Menu :title = "`Account № ${this.accountPageInfo.number}`">
            <TransferForm 
                :type = "'account'"
                :account = "{id: accountPageInfo._id, number: accountPageInfo.number}"
            />
        </Menu>
        <div v-if = "accountPageInfo" class = "account-info">
            <p><strong>Money: </strong>{{accountPageInfo.money}} ₽</p>
            <p><strong>Created at: </strong>{{accountPageInfo.created_at?.slice(0, 10)}}</p>
        </div>
        <div v-if = "this.transfers.length > 0" class = "list">
            <TransferCart 
                v-for = "t in this.transfers"
                :key = "t.id"
                :info = "{
                    id: t._id,
                    account: {id: t.account[0]._id, number: t.account[0].number},
                    transfer_type: t.transfer_type[0].type,
                    class_type: t.class_type[0].class_type,
                    money: t.money
                }"
                :accountLinkStatus = "false"
                :type = "'account'"
            />
        </div>
        <div v-else class = "message">
            No active transfers :(
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .account-info {
        margin-top: 60px;

        p {
            font-size: 24px;
            color: white;
            font-weight: 600;

            strong {
                font-weight: 900;
                color: $light-green;
            }
        }
    }

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