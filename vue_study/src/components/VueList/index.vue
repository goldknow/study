<template>
	<div>
		<keep-alive>
			<transition name="fade" mode="out-in">
				<vue-list-card
					v-if="type==='card'"
					:lists ="lists"
					@open="modalOpen"
				></vue-list-card>	

				<vue-list-table
					v-else-if="type==='table'"
					:lists ="lists"
					@open="modalOpen"
					@counter="incrementCounter"
				></vue-list-table>

				<vue-list-webzine
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
				type:String,
				default:'list'
			}
		},
		methods: {
			incrementCounter(list) {
				this.$emit('counter', list)
			},
			modalOpen(list){
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