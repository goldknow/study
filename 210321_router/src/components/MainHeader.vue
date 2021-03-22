<template>
    <header>
        <nav>
            <v-link 
                v-for="(item, key) in headerData" :key="key" 
                :href="item.href"
                
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
                headerData: [{
                        bgOn: true,
                        bgColor: '#fef1e0',
                        title: 'home',
                        href: "/"
                    },
                    {
                        bgOn: false,
                        bgColor: '#e6fce6',
                        title: 'about',
                        href: "/about"
                    },
                    {
                        bgOn: false,
                        bgColor: '#d6f3f7',
                        title: 'contact',
                        href: "/contact"
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
            max-width: 600px;
            margin: auto;

            a {
                width: 33%;
                line-height: 60px;
                text-align: center;

                &:hover,
                &.active {
                    background-color: #ddd;
                    font-weight: 700;
                }
            }
        }
    }
</style>