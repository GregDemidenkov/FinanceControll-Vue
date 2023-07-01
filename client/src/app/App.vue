<script>
import Navbar from '@/components/layout/navbar/Navbar.vue';


export default {
    components: {
        Navbar
    }
}

</script>


<template>

    <div class = "app">
        <Navbar />
        <div class = "container">
            <router-view></router-view>
        </div>
    </div>

</template>


<style lang = "scss" scoped>

    .app {
        display: flex;
    }

    .container {
        max-width: 1600px;
        width: 100%;
        margin: 0 auto;
        padding: 20px 16px;
    }

</style>
