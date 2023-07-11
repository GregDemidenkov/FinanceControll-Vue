<script>
    import { mapActions, mapState } from 'vuex'


    export default {
        data() {
            return {
                form: {
                    from_date: "",
                    budget_money: "",
                    account_id: ""
                },
                accountsList: [],
                undefinedPeriod: false
            }
        },
        methods: {
            ...mapActions({
                getAccounts: 'accounts/getAccounts',
                createBudget: 'budgets/createBudget'
            }),
            createTransferHandler() {
                this.createBudget(this.form)

                this.form = {
                    from_date: "",
                    budget_money: "",
                    account_id: ""
                }
            }
        },
        mounted() {
            this.getAccounts()
        },
        computed: {
            ...mapState({
                accounts: state => state.accounts.accounts,
            }),
        },
        watch: {
            accounts() {
                this.accounts.forEach(acc => {
                    this.accountsList.push({value: acc._id, name: acc.number})
                })
            },
            undefinedPeriod() {
                delete this.form.to_date
            }
        }
    }
</script>


<template>
    <div class = "budget-form">
        <h3>Add new Budget</h3>
        <MyForm>
            <div class = "dates">
                <MyInput
                    :type = "'date'"
                    :name = "'date'"
                    :label = "'From'"
                    v-model = "form.from_date"
                />
                <div>
                    <MyInput
                        :type = "'date'"
                        :name = "'date'"
                        :label = "'To'"
                        :disabled = "undefinedPeriod"
                        v-model = "form.to_date"
                    />
                    <MyInput
                        class = "to-date"
                        :type = "'checkbox'"
                        :name = "'check'"
                        :label = "'for undefined period'"
                        :value = "undefinedPeriod"
                        v-model = "undefinedPeriod"
                    />
                </div>
            </div>
            <MySelect
                v-model="form.account_id"
                :options="accountsList"
                :disabledOptionName = "'Choose a card'"
            />
            <label class = "goal-label">Goal</label>
            <div class = "money">
                <MyInput
                    class = "money-input"
                    :type = "'text'"
                    :name = "'transferType'"
                    :placeholder = "'0'"
                    v-model = "form.budget_money"
                />
                <p class = "val">₽</p>
            </div>
            <MyButton @click = "createTransferHandler">Add</MyButton>
        </MyForm>
    </div>
</template>


<style lang="scss">

    .budget-form {
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

        .dates {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 400px;
            height: auto;

            .input {
                flex-direction: column;
                
                label {
                    margin-bottom: 10px;
                }
            }

            .to-date {
                position: absolute;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 160px;
                margin-top: 10px;

                label {
                    font-size: 10px;
                    margin: 0;
                }

                input {
                    margin: 0;
                    width: 20px;
                }
            }
        }

        select {
            width: 230px;
            margin: 60px 0 40px;
        }

        .transfer-types {
            display: flex;
            justify-content: space-around;
            width: 300px;
            margin-bottom: 40px;
        }

        .goal-label {
            color: white;
            font-weight: 600;
            margin-bottom: 10px;
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
                height: 38px;
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