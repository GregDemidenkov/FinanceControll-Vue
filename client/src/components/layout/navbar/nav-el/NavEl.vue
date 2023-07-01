<script>

    export default {
        props: {
            data: {
                type: Object,
            },
            hide: {
                type: Boolean
            }
        }
    }

</script>


<template>

    <router-link 
        :to = "this.data.to"
        class = "el"
        :class = "{
            'hideEl': !this.hide
        }"
    >
        <img :src="this.data.img" alt="">
        <p>{{this.data.label}}</p>
    </router-link>
    
</template>


<style lang="scss" scoped>

    .el {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 30px 24px;

        img {
            width: 40px;
            height: 40px;
        }

        p {
            flex: 70%;
            margin-left: 10px;
            color: white;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;

            animation: showText;
            animation-duration: 1s;
        }

        &:hover {
            background-color: $dark-blue;
            transition: 0.3s all;
        }
    }

    .hideEl {
        justify-content: center;

        p {
            display: none;

            animation: hideText;
            animation-duration: 1s;
        }
    }

    @keyframes showText {
        from {
            opacity: 0;
        }

        50% {
            opacity: 0;
        }

        to {
            display: none;
            opacity: 1;
        }
    }

</style>