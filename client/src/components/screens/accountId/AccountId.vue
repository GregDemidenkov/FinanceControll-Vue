<script>
    import { mapActions, mapState } from 'vuex'

    import Menu from '../../shared/components/menu/Menu.vue'
    import TransferCart from '../../shared/components/transfer-cart/TransferCart.vue'
    import TransferForm from '../../shared/components/transfer-form/TransferForm.vue'


    export default {
        components: { Menu, TransferCart, TransferForm },
        data() {
            return {
                account: {
                    type: Object,
                    default: {}
                }
            }
        },
        methods: {
            ...mapActions({
                getTransfersByAccountId: 'transfers/getTransfersByAccountId'
            })
        },
        mounted() {
            this.getTransfersByAccountId(this.$route.params.id)
        },
        computed: {
            ...mapState({
                transfers: state => state.transfers.transfers
            }),
        },
        watch: {
            transfers() {
                console.log(this.transfers[0].account[0].number)
            }
        }
    }
</script>


<template>
    <div>
        <Menu v-if = "this.transfers.length > 0" :title = "`Account № ${this.transfers[0].account[0].number}`">
            <TransferForm />
        </Menu>
        <div v-if = "this.transfers.length > 0" class = "list">
            <TransferCart 
                v-for = "t in this.transfers"
                :key = "t.id"
                :info = "{
                    id: t._id,
                    account: t.account[0].number,
                    transfer_type: t.transfer_type[0].type,
                    class_type: t.class_type[0].class_type,
                    money: t.money
                }"
                :accountLinkStatus = "false"
            />
        </div>
        <div v-else class = "message">
            No active transfers :(
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