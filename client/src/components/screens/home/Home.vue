<script>
    export default {
        
    }
</script>


<template>
    <div class = "home">
        <h1>Finance Controll <span>Vue</span></h1>
        <MyButton class = "btn-home">Get started</MyButton>
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
        font-size: 26px;
        font-weight: 600;
        margin-top: 20px;
    }

</style>