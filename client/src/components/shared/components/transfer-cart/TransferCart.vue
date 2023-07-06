<script>
    export default {
        props: {
            info: {
                type: Object,
                required: true
            }
        }
    }
</script>


<template>
    <div class = "cart">
        <img v-if = "this.info.transfer_type === 'income'" src="@/assets/img/up.svg" alt="">
        <img v-else src="@/assets/img/down.svg" alt="">
        <div class="info">
            <p><strong>Account № </strong>{{ this.info.account }}</p>
            <p><strong>Class: </strong>{{ this.info.class_type }}</p>
            <p><strong>Money: </strong>{{ this.info.money }} ₽</p>
        </div>
        <MyButton>Cancel</MyButton>
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
            p {
                color: white;
                font-size: 18px;

                strong {
                    color: $light-green;
                    font-weight: 700;
                }
            }
        }

        button {
            display: none;
        }

        &:hover {
            border: 2px solid $light-green;

            button {
                display: block;
            }
        }
    }

</style>