<script>
    import Menu from '../../shared/components/menu/Menu.vue'
    import BudgetCart from '../../shared/components/budget-cart/BudgetCart.vue'
    import BudgetForm from '../../shared/components/budget-form/BudgetForm.vue'

    import { mapActions, mapState } from 'vuex';


    export default {
        components: { Menu, BudgetForm, BudgetCart },
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
        <div class = "list" v-if = "this.budgets.length > 0">
            <BudgetCart
                v-for = "bud in this.budgets"
                :key = "bud._id"
                :info = "{
                    id: bud._id,
                    from_date: bud.from_date,
                    to_date: bud.to_date,
                    status: bud.status,
                    curr_money: bud.curr_money,
                    budget_money: bud.budget_money,
                    account: {id: bud.account_id, number: bud.account[0].number}
                }"
            />
        </div>
        <div v-else class = "message">
            No active budgets :(
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