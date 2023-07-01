<script>

    export default {
        props: {
            data: {
                type: Object,
            },
        }
    }

</script>


<template>

    <router-link :to = "this.data.to">
        <img :src="this.data.img" alt="">
        <p>{{this.data.label}}</p>
    </router-link>
    
</template>


<style lang="scss" scoped>

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 30px 24px;

        img {
            width: 40px;
            height: 40px;
            margin-right: 20px;
        }

        p {
            flex: 70%;
            color: white;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
        }

        &:hover {
            background-color: $dark-blue;
            transition: 0.3s all;
        }
    }

</style>