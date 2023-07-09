<script>
    import { mapActions } from 'vuex'

    import TopUpForm from '../topUp-form/TopUpForm.vue'


    export default {
        components: { TopUpForm },
        props: {
            info: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                topUpVisible: false
            }
        },
        methods: {
            ...mapActions({
                deleteBudget: 'budgets/deleteBudget'
            }),
            showModal() {
                this.topUpVisible = true
            },
        }
    }
</script>


<template>
    <div class = "cart">
        <img src="@/assets/img/budgets.svg" alt="">
        <div class="info">
            <div class = "date">
                <p><strong>From: </strong>{{ info.from_date?.slice(0, 10) }}</p>
                <p><strong>To: </strong>{{ info.to_date ? info.to_date?.slice(0, 10) : 'XXXX-XX-XX' }}</p>
            </div>
            <p><strong>Account № </strong>{{ info.account.number }}</p>
            <div class = "budget">
                <p><strong>Budget Progress</strong></p>
                <div class = "full-budget">
                    <p>0 ₽</p>
                    <div class = "full-progress">
                        <div :style = "{width: `${info.curr_money / info.budget_money * 100}%`}" class = "curr-progress"></div>
                    </div>
                    <p>{{ info.budget_money }} ₽</p>
                </div>
                <p>{{ info.curr_money }} ₽</p>
            </div>
        </div>
        <div class = "btns">
            <MyButton class = "blue-btn" @click = "showModal">Top Up</MyButton>
            <MyButton @click = "deleteBudget(info.id)">Delete</MyButton>
        </div>
    </div>
    <MyModal
        v-model:show = "topUpVisible"
    >
        <TopUpForm 
            :type = "'budget'"
            :account = "{id: info.account.id, number: info.account.number}"
            :budget_id = "info.id"
        />
    </MyModal>
</template>


<style lang="scss" scoped>

    .cart {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 16px 40px;
        border: 2px solid $dark-blue;
        border-radius: 8px;

        img {
            width: 60px;
            margin-right: 40px;
        }

        .info {
            flex: 80%;

            .date {
                display: flex;
                margin-bottom: 20px;

                p:first-child {
                    margin-right: 40px;
                }
            }

            .budget {
                width: 60%;
                margin-top: 20px;

                p {
                    margin: 10px 0;
                    text-align: center;
                }

                .full-budget {
                    display: flex;
                    align-items: center;

                    p {
                        margin: 0 10px;
                        text-align: center;
                    }
                    .full-progress {
                        flex: auto;
                        height: 20px;
                        border: 2px solid white;
                        border-radius: 12px;

                        .curr-progress {
                            height: 100%;
                            background-color: $light-green;
                            border-radius: 12px;
                        }
                    }
                }
            }

            p {
                color: white;
                font-size: 18px;

                strong {
                    color: $light-green;
                    font-weight: 700;
                }
            }
        }

        .btns {
            position: absolute;
            right: 40px;
            display: none;

            button:first-child {
                margin-right: 16px;
            }

            .blue-btn {
                background-color: $dark-blue;
            }
        }

        &:hover {
            border: 2px solid $light-green;

            .btns {
                display: block;
            }
        }
    }

</style>