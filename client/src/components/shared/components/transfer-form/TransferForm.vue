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
            }
        },
        data() {
            return {
                form: {
                    cartNum: "",
                    transfer_type: {id: "", name: ""},
                    class_type: "",
                    money: ""
                },
                accountsList: [],
                transferTypesList: [],
                classTypesList: []
            }
        },
        methods: {
            ...mapActions({
                getAccounts: 'accounts/getAccounts',
                getTransferTypes: 'transferTypes/getTransferTypes',
                getClassTypes: 'classTypes/getClassTypes',
                createTransfer: 'transfers/createTransfer'
            }),
            createTransferHandler() {
                this.createTransfer([{
                    account_id: this.form.cartNum || this.account.id,
                    type_id: this.form.transfer_type.value,
                    class_id: this.form.class_type,
                    money: this.form.transfer_type.name == "consumption" 
                        ? -Number(this.form.money) 
                        : Number(this.form.money)
                }, this.type])

                this.form = {
                    cartNum: "",
                    transfer_type: {id: "", name: ""},
                    class_type: "",
                    money: ""
                }
            }
        },
        mounted() {
            if (this.type == "all") {
                this.getAccounts()
            }
            this.getTransferTypes()
            this.getClassTypes()
        },
        computed: {
            ...mapState({
                accounts: state => state.accounts.accounts,
                transferTypes: state => state.transferTypes.transferTypes,
                classTypes: state => state.classTypes.classTypes,
            }),
        },
        watch: {
            accounts() {
                this.accounts.forEach(acc => {
                    this.accountsList.push({value: acc._id, name: acc.number})
                })
            },
            transferTypes() {
                this.transferTypes.forEach(tT => {
                    this.transferTypesList.push({value: tT._id, name: tT.type})
                })
            },
            'form.transfer_type': function() {
                this.classTypesList = []

                this.classTypes.forEach(cT => {
                    if(cT.transfer_type[0].type == this.form.transfer_type.name) {
                        this.classTypesList.push({value: cT._id, name: cT.class_type})
                    }
                })
            }
        }
    }
</script>


<template>
    <div class = "transfer-form">
        <h3>Add new Transfer</h3>
        <MyForm>
            <MySelect
                v-if = "type == 'all'"
                v-model="form.cartNum"
                :options="accountsList"
                :disabledOptionName = "'Choose a card'"
            />
            <h2 v-else ><strong>Account № </strong>{{ account.number }}</h2>
            <div class = "transfer-types">
                <MyInput
                    v-for = "tT in transferTypesList"
                    :key = "tT.value"
                    :type = "'radio'"
                    :name = "'transferType'"
                    :label = "tT.name"
                    :value = "tT"
                    v-model = "form.transfer_type"
                />
            </div>
            <MySelect 
                v-model="form.class_type"
                :options="classTypesList"
                :disabledOptionName = "'Choose a class'"
            />
            <div class = "money">
                <MyInput
                    class = "money-input"
                    :type = "'text'"
                    :name = "'transferType'"
                    :placeholder = "'0'"
                    v-model = "form.money"
                />
                <p>₽</p>
            </div>
            <MyButton @click = "createTransferHandler">Add</MyButton>
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