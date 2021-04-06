<template>
	<div>
		<keep-alive>
			<transition name="fade" mode="out-in">
				<vue-list-card
					:lists ="lists"
					v-if="type==='card'"
				></vue-list-card>	

				<vue-list-table
					:lists ="lists"
					v-else-if="type==='table'"
					@click="incrementCounter"
				></vue-list-table>

				<vue-list-webzine
					:lists ="lists"
					v-else
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
				this.$emit('click', list)
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