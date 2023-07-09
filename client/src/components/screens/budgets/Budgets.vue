<script>
    import Menu from '../../shared/components/menu/Menu.vue'
    // import AccountCart from '../../shared/components/account-cart/AccountCart.vue'
    import BudgetForm from '../../shared/components/budget-form/BudgetForm.vue'

    import { mapActions, mapState } from 'vuex';


    export default {
        components: { Menu, BudgetForm },
        methods: {
            ...mapActions({
                getBudgets: 'budgets/getBudgets'
            })
        },
        mounted() {
            this.getBudgets()
        },
        computed: {
            ...mapState({
                budgets: state => state.budgets.budgets
            }),
        }
    }
</script>


<template>
    <div>
        <Menu :title = "'Budgets'">
            <BudgetForm />
        </Menu>
        <!-- <div class = "list" v-if = "this.accounts.length > 0">
            <AccountCart 
                v-for = "acc in this.accounts"
                :key = "acc.id"
                :info = "acc"
            />
        </div>
        <div v-else class = "message">
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