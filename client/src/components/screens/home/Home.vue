<script>
    import routes from '@/app/router/routes.js'


    export default {
        data() {
            return {
                link: routes.accounts
            }
        }
    }
</script>


<template>
    <div class = "home">
        <h1>Finance Controll <span>Vue</span></h1>
        <router-link class = "btn-home" :to = "link">Get started</router-link>
    </div>
</template>


<style lang="scss" scoped>

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        h1 {
            text-transform: uppercase;
            font-size: 64px;
            font-weight: 700;
            color: white;

            span {
                color: $light-green;
            }
        }
    }

    .btn-home {
        margin-top: 40px;
        padding: 8px 16px;
        background-color: $light-green;
        color: white;
        font-size: 26px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
    }

</style>