<template>
    <a :href="href" :class="{active: isActive}" @click="go">
        <slot></slot>
    </a>
</template>
<script>
    import router from '../router'
    export default {
        props: {
            href: {
                type: String,
                required: true
            }
        },
        computed: {
            isActive() {
                return this.href === this.$root.currentRoute
            }
        },
        methods: {
            go(e) {
                e.preventDefault()
                this.$root.currentRoute = this.href
                window.history.pushState(
                    null,
                    router[this.href],
                    this.href
                )
            }
        },
    }
</script>