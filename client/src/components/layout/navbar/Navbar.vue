<script>

    import NavEl from './nav-el/NavEl.vue';
    import config from './config'


    export default {
        components: { NavEl },
        data() {
            return {
                navEl: config,
                show: true
            }
        },
        methods: {
            showHandler() {
                this.show = !this.show
                console.log(this.show)
            }
        }
    }

</script>


<template>
    
    <nav 
        :class = "{
            'hide': !this.show
        }"
    >
        <div class = "menu">
            <div class = "show" @click = "showHandler">
                <!-- <img
                    v-if = "this.show"
                    src="@/assets/img/close.svg"
                    alt=""
                > -->
                <img
                    
                    src="@/assets/img/open.svg"
                    alt=""
                >
            </div>
        </div>
        <div class = "logo">
            <p>F</p>
            <img src="/public/favicon.ico" alt="">
            <p>C</p>
        </div>
        <div class = "nav-content">
            <NavEl
                v-for = "el in navEl"
                :key = "el.img"
                :data = "el"
                :hide = "this.show"
            />
        </div>
    </nav>

</template>


<style lang="scss" scoped>

    nav {
        height: 100vh;
        width: 14%;
        background-color: $dark-gray;
        padding: 12px 0;
        border-right: 1px solid rgb(24, 24, 24);
        transition: 1s all;

        .menu {
            display: flex;
            padding: 0 12px;
            margin-bottom: 40px;

            .show {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                border: 2px solid white;
                border-radius: 2px;
                margin-left: auto;
                margin-right: auto;
                transition: 1s all;
                cursor: pointer;
            }
        }

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

    .hide {
        width: 6%;

        .menu {
            .show {
                margin-left: auto;
                margin-right: auto;
                transition: 1s all;
            }
        }

        .logo {
            p {
                opacity: 0;
                transition: 0.5s;
            }
        }
    }

</style>