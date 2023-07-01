<script>

    import NavEl from './nav-el/NavEl.vue';
    import config from './config'


    export default {
        components: { NavEl },
        data() {
            return {
                navEl: config
            }
        }
    }

</script>


<template>
    
    <nav>
        <div class = "logo">
            F<img src="/public/favicon.ico" alt="">C
        </div>
        <div class = "nav-content">
            <NavEl
                v-for = "el in navEl"
                :key = "el.img"
                :data = "el"
            />
        </div>
    </nav>

</template>


<style lang="scss" scoped>

    nav {
        height: 100vh;
        width: 14%;
        background-color: $dark-gray;
        padding: 20px 0;
        border-right: 1px solid rgb(24, 24, 24);

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid $gray;
            padding-bottom: 40px;

            color: $light-green;
            font-size: 42px;
            font-weight: 700;

            img {
                margin: 0 4px;
            }
        }

        .nav-content {
            margin: 60px 0 0;
        }
    }

</style>