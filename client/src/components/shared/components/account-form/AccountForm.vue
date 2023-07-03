<script>
    import { mapActions } from 'vuex'


    export default {
        data() {
            return {
                form: {
                    cartNum: ""
                }
            }
        },
        methods: {
            ...mapActions({
                createAccount: 'accounts/createAccount'
            }),
            createAccountHandler() {
                this.createAccount({number: this.form.cartNum})
                this.form.cartNum = ""
            }
        }
    }
</script>


<template>
    <div class = "account-form">
        <h3>Add new Account</h3>
        <MyForm>
            <MyInput
                v-focus 
                :type = "'text'"
                :placeholder = "'Номер карты...'"
                v-model = "form.cartNum"
            />
            <MyButton @click = "createAccountHandler">Add</MyButton>
        </MyForm>
    </div>
</template>


<style lang="scss" scoped>

    .account-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        h3 {
            margin-bottom: 60px;
            font-size: 24px;
            font-weight: 700;
            color: white;
        }
    }

</style>