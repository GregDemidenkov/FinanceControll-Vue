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
        <img src="@/assets/img/accounts.svg" alt="">
        <div class="info">
            <p><strong>№ </strong>{{ info.number }}</p>
            <p><strong>Money: </strong>{{ info.money }} ₽</p>
            <p><strong>Created at </strong>{{ info.created_at.slice(0, 10) }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .cart {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 0;
        border: 2px solid $dark-blue;
        border-radius: 8px;

        img {
            width: 60px;
            margin: 0 40px;
        }

        .info {
            p {
                color: white;
                font-size: 18px;

                strong {
                    color: $light-green;
                    font-weight: 700;
                }
            }
        }
    }

</style>