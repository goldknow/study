<template>
    <header>
        <nav>
            <router-link 
                v-for="(item, key) in headerData" :key="key" 
                :to="item.link"
            >
                {{item.title}}
            </router-link>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {
                headerData: [
                    {
                        title: 'home',
                        link: "./"
                    },
                    {
                        title: 'about',
                        link: "./about"
                    },
                    {
                        title: 'contact',
                        link: "./contact"
                    },
                    {
                        title: 'gallery',
                        link: "./gallery"
                    },
                    {
                        title: 'todo',
                        link: "./todo"
                    },
                ]
            }
        },
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