<script>
    import { mapActions } from 'vuex'


    export default {
        props: {
            info: {
                type: Object,
                required: true
            },
            accountLinkStatus: {
                type: Boolean
            },
            type: {
                type: String,
                default: "all"
            }
        },
        data() {
            return {
                updateVisible: {
                    type: Boolean,
                    default: false
                }
            }
        },
        methods: {
            ...mapActions({
                deleteTransfer: 'transfers/deleteTransfer',
                updateTransfer: 'transfers/updateTransfer'
            }),
            setUpdateVisible() {
                this.updateVisible = !this.updateVisible
            },
            updateTransferHadler() {
                this.updateTransfer([
                    {id: this.info.id, money: this.info.money},
                    this.type,
                    this.info.account.id
                ])
                this.setUpdateVisible()
            }
        }
    }
</script>


<template>
    <div class = "cart">
        <img v-if = "info.transfer_type === 'income'" src="@/assets/img/up.svg" alt="">
        <img v-else src="@/assets/img/down.svg" alt="">
        <div class="info">
            <router-link 
                v-if = "accountLinkStatus"
                class = "account-link" 
                :to = "`/accounts/${info.account.id}`"
            >
                <p><strong>Account № </strong>{{ info.account.number }}</p>
            </router-link>
            <p><strong>Class: </strong>{{ info.class_type }}</p>
            <p v-if = "updateVisible"><strong>Money: </strong>{{ info.money }} ₽</p>
            <div v-else class = "update-money-input">
                <label>Money:</label>
                <MyInput 
                    v-focus 
                    :type = "'text'"
                    :placeholder = "info.money"
                    v-model = "info.money"
                />
                <p>₽</p>
            </div>
        </div>
        <div v-if = "updateVisible" class = "btns">
            <MyButton 
                class = "blue-btn"
                @click = "setUpdateVisible"
            >
                Update
            </MyButton>
            <MyButton
                @click = "deleteTransfer(info.id)"
            >
                Cancel
            </MyButton>
        </div>
        <div v-else class = "btns">
            <MyButton
                @click = "updateTransferHadler"
            >
                Save
            </MyButton>
            <MyButton
                class = "blue-btn"
                @click = "setUpdateVisible"
            >
                Cancel
            </MyButton>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .cart {
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

            .account-link {
                display: inline-block;
                width: 314px;

                &:hover {
                    p {
                        color: $light-green;
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
            display: flex;

            button {
                width: 96px;
            }

            button:first-child {
                margin-right: 12px !important;
            }
        }

        button {
            display: none;
        }

        .blue-btn {
            background-color: $dark-blue;
        }

        &:hover {
            border: 2px solid $light-green;

            button {
                display: block;
            }
        }

        .update-money-input {
            display: flex;
            width: fit-content;

            label {
                color: $light-green;
                font-size: 18px;
                font-weight: 700;
                margin-right: 8px;
            }

            input {
                width: 100px;
                border: none;
                border-bottom: 1px solid white;
                border-radius: 0;
                font-size: 18px;
                color: white;
                padding: 0;
                margin-right: 8px;
            }

        }
    }

</style>