<template>
	<div>
		<!--
			Q. props로 데이터 넘길 때 가운데 낀 템플릿은
				같은 이름으로 넘기는건가?	
				:lists ="lists"는 되고
				:lists ="ListData"는 안되는 이유?
		-->
		<!-- 
			keep-alive 
			최초 상태에 캐시 되어 다른 컴포넌트에 다녀오더라도 
			페이지의 새로고침이 발생 하기 전까지 data의 상태가 유지된다.
		-->
		<keep-alive>

			<vue-list-card
				:lists ="lists"
				v-if="type==='card'"
			></vue-list-card>	

			<vue-list-table
				:lists ="lists"
				v-else-if="type==='table'"
			></vue-list-table>

			<vue-list-webzine
				:lists ="lists"
				v-else
			></vue-list-webzine>	
			
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
		data(){
			return{
			}
		}
	}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';

</style>