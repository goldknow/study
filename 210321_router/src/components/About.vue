<template>
    <div>
        <main-header></main-header>
        <section class="cont">
            About
        </section>
    </div>
</template>
<script>
    import MainHeader from './MainHeader.vue'
    export default {
        name: 'About',
        components: {
            MainHeader
        },
    }
</script>
<style lang="scss" scoped>
.cont {background-color: #e6fce6;}
</style>