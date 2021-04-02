<template>
	<div class="wrap">

		<!--
			버튼 누를때마다 보이게..

		-->

		<div>
			<button>CARD</button>
			<button>TABLE</button>
			<button>WEBZINE</button>
		</div>

		<div class="card-area"
		>
			<vue-list-card
				v-for="(list, i)  in ListData" :key="i"
				:ListItem ="list"
			></vue-list-card>			
		</div>

		<div class="table-list">
			<vue-list-table
				:lists ="ListData"
			></vue-list-table>
		</div>

		<div class="webzine-list">
			<vue-list-webzine
				v-for="(list, i)  in ListData" :key="i"
				:ListItem ="list"
			></vue-list-webzine>
		</div>

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
		data(){
			return {
				ListData : [
					{
						title:'제목1',
						text: '좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요',
						imgUrl:require('@/assets/images/img01.png'),
						date: '2021-04-02'
					},
					{
						title:'제목2',
						text: '내용2',
						imgUrl:require('@/assets/images/img02.png'),
						date: '2021-04-02'
					},
					{
						title:'제목3',
						text: '내용3',
						imgUrl:require('@/assets/images/img03.png'),
						date: '2021-04-02'
					},
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';
	.wrap {
		max-width: 800px;
		margin: auto;
	}

	.card-area {
		display: flex;
	}

	.table-list {

	}
</style>