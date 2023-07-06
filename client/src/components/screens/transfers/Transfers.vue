<script>
    import Menu from '../../shared/components/menu/Menu.vue'
    import TransferCart from '../../shared/components/transfer-cart/TransferCart.vue'
    import TransferForm from '../../shared/components/transfer-form/TransferForm.vue'

    import { mapActions, mapState } from 'vuex';


    export default {
        components: { Menu, TransferCart, TransferForm },
        methods: {
            ...mapActions({
                getTransfers: 'transfers/getTransfers'
            })
        },
        mounted() {
            this.getTransfers()
        },
        computed: {
            ...mapState({
                transfers: state => state.transfers.transfers
            }),
        }
    }
</script>


<template>
    <div>
        <Menu :title = "'Transfers'">
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