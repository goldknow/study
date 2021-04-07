<template>
	<div>
		<!--
			keep-alive는 데이타 저장!

			index는 배열의 역할을 하기 때문에 안에 무조건 있어야 한다.
		-->
		<keep-alive>
			<transition name="fade" mode="out-in">
				<vue-list-card
					v-model="$attrs.value"
					@input="$emit('input', $attrs.value)"
					v-if="type==='card'"
					:lists ="lists"
					@open="modalOpen"
				></vue-list-card>	

				<vue-list-table
					v-model="$attrs.value"
					@input="$emit('input', $attrs.value)"
					v-else-if="type==='table'"
					:lists ="lists"
					@open="modalOpen"
					@counter="incrementCounter"
				></vue-list-table>

				<vue-list-webzine
					v-model="$attrs.value"
					@input="$emit('input', $attrs.value)"
					v-else 
					:lists ="lists"
					@open="modalOpen"
				></vue-list-webzine>	
			</transition>
		</keep-alive>
	</div>
</template>

<script>
import VueListCard from './VueListCard.vue'
import VueListTable from './VueListTable.vue'
import VueListWebzine from './VueListWebzine.vue'

export default {
    name: 'VueList',
    components: {
        VueListCard,
        VueListTable,
        VueListWebzine
    },
    props: {
        lists: {
            type: Array
        },
        type: {
            type: String,
            default: 'list'
        }
    },
    methods: {
        incrementCounter(list) {
            this.$emit('counter', list)
        },
        modalOpen(list) {
            this.$emit('open', list)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
