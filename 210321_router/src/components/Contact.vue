<template>
    <div>
        <main-header></main-header>
        <section class="cont">
            Contact
        </section>
    </div>
</template>
<script>
    import MainHeader from '@/components/MainHeader.vue'
    export default {
        name: 'Contact',
        components: {
            MainHeader
        },
    }
</script>
<style lang="scss" scoped>
.cont {background-color: #d6f3f7;}
</style>