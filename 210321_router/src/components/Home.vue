<template>
    <div>
        <main-header></main-header>
        <section class="cont">
            Welcome
        </section>
    </div>
</template>
<script>
    import MainHeader from './MainHeader'
    export default {
        name: 'Welcome',
        components: {
            MainHeader
        },
    }
</script>
<style lang="scss" scoped>
    .cont {
        background-color: #fef1e0;
    }
</style>