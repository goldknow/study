<template>
    <header>
        <nav>
            <v-link v-for="(item, key) in headerData" :key="key"
                :href="item.href"
                :style="{backgroundColor:item.bgColor}"
            >
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
                        href: "/",
                        bgColor: '#fef1e0'
                    },
                    {
                        title: 'about',
                        href: "/about",
                        bgColor: '#e6fce6'
                    },
                    {
                        title: 'contact',
                        href: "/contact",
                        bgColor: '#d6f3f7'
                    },
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    header {
        nav {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            max-width: 800px;
            margin: auto;

            a {
                width: calc(100% / 3);
                line-height: 60px;
                text-align: center;
                text-transform: uppercase;

                &:hover,
                &.active {
                    font-weight: 700;
                }
            }
        }
    }
</style>