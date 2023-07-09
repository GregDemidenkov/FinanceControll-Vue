<script>
    import { mapActions, mapState } from 'vuex'


    export default {
        props: {
            type: {
                type: String,
                default: "all"
            },
            account: {
                type: Object
            },
            budget_id: {
                type: String
            }
        },
        data() {
            return {
                money: ""
            }
        },
        methods: {
            ...mapActions({
                updateBudget: 'budgets/updateBudget'
            }),
            updateBudgetHandler() {
                this.updateBudget({
                    id: this.budget_id,
                    account_id: this.account.id,
                    money: Number(this.money)
                })

                this.money = ""
            }
        }
    }
</script>


<template>
    <div class = "transfer-form">
        <h3>Top Up</h3>
        <MyForm>
            <h2><strong>Account № </strong>{{ account.number }}</h2>
            <div class = "money">
                <MyInput
                    v-focus
                    class = "money-input"
                    :type = "'text'"
                    :name = "'transferType'"
                    :placeholder = "'0'"
                    v-model = "money"
                />
                <p>₽</p>
            </div>
            <MyButton @click = "updateBudgetHandler">Add</MyButton>
        </MyForm>
    </div>
</template>


<style lang="scss" scoped>

    .transfer-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        h3 {
            margin-bottom: 60px;
            font-size: 24px;
            font-weight: 700;
            color: white;
            text-transform: uppercase;
        }

        h2 {
            font-size: 22px;
            color: white;
            margin-bottom: 40px;

            strong {
                color: $light-green;
                font-weight: 700;
            }
        }

        select {
            width: 230px;
            margin-bottom: 40px;
        }

        .transfer-types {
            display: flex;
            justify-content: space-around;
            width: 300px;
            margin-bottom: 40px;
        }

        .money {
            display: flex;
            align-items: center;
            .money-input {
                width: 200px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            .money-input:focus + p {
                border: 1px solid $light-green;
                color: $light-green;
            }

            p {
                border: 1px solid white;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                font-size: 29px;
                color: white;
                padding: 0 10px;
            }
        }
    }

</style>