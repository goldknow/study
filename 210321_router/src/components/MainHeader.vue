<template>
    <header>
        <nav>
            <router-link v-for="(item, key) in headerData" :key="key" :to="item.link">
                {{item.title}}
            </router-link>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'Header',
        computed: {

        },
        data() {
            return {
                headerData: [{
                        title: 'home',
                        link: "/",
                        bgColor: '#fef1e0'
                    },
                    {
                        title: 'about',
                        link: "/about",
                        bgColor: '#e6fce6'
                    },
                    {
                        title: 'contact',
                        link: "/contact",
                        bgColor: '#d6f3f7'
                    },
                ]
            }
        },
        methods: {

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

    .router-link-exact-active {
        font-weight: 700;
    }
</style>