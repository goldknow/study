<template>
<header>
    <nav>
        <v-link v-for="(item, key) in headerData" :key="key" :href="item.href">
            {{item.title}}
        </v-link>
    </nav>
</header>
</template>

<script>
import VLink from '@/components/VLink'
export default {
    name: 'Header',
    components: {
        VLink
    },
    data() {
        return {
            headerData: [
                {
                    title: 'home',
                    href: "./"
                },
                {
                    title: 'about',
                    href: "./about"
                },
                {
                    title: 'contact',
                    href: "./contact"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
