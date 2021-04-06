<template>
	<section class="cont">
		<!--
			1. 리스트 컴포넌트에 들어갈 Model 을 설계해야 합니다.
			2. Model 은 갤러리형, 리스트형, 웹진형에 모두 대응할 수 있어야 합니다.
			3. 갤러리형, 리스트형, 웹진형의 전환 버튼을 구현하여 실시간으로 변경될 수 있어야 합니다.
		-->

		<!--
			!!
			transition
			keep-alive 
			modal
		-->

		<div class="wrap">
			<div class="btn-area">
				<button 
					@click="changeType('card')"
				>CARD</button>
				<button 
					@click="changeType('table')"
				>TABLE</button>
				<button 
					@click="changeType('webzine')"
				>WEBZINE</button>
			</div>

			<vue-list
				:type="type"
				:lists="ListData"
				@open="modalOpen"
				@counter="incrementCounter"
			></vue-list> 

			<transition name="modal" mode="out-in">
				<vue-modal
					v-if="isShow"
					@close="modalClose"
				>
					<!-- 클릭한 list의 데이터를 모달에 넣기 -->
					<!-- <h3 :slot="title">{{lists.title}}</h3> -->
				</vue-modal>	
			</transition>

		</div>
	</section>
</template>
<script>
	import VueList from '@/components/VueList/'
	import VueModal from '../components/VueModal.vue'

	export default {
		name: 'Gallery',
		components: {
			VueList,
			VueModal
		},
		data(){
			return {
				isShow:false,
				currentView:'VueList',
				type:'card',
				ListData : [
					{
						title:'제목1',
						text: '좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요 좋아요 맘에 들어요',
						imgUrl:require('@/assets/images/img01.png'),
						date: '2021-04-02',
						count:0
					},
					{
						title:'제목2',
						text: '내용2 내용2 내용2 내용2 내용2 내용2',
						imgUrl:require('@/assets/images/img02.png'),
						date: '2021-04-02',
						count:0
					},
					{
						title:'제목3',
						text: '내용3',
						imgUrl:require('@/assets/images/img03.png'),
						date: '2021-04-02',
						count:0
					},
				]
			}
		},
		methods: {
			changeType(type){
				this.type = type
				//console.log(this.type)
			},			
			incrementCounter(list){
				list.count ++
			},
			modalClose(){
				this.isShow = false
			},
			modalOpen(){
				this.isShow = true
			}
		}
	}
</script>
<style lang="scss" scoped>
	.cont {
		display: block;
      padding: 50px 0;
		background-color: #e1e0fe;
	}

	.wrap {
		max-width: 800px;
		margin: auto;

		.btn-area {
			padding-bottom: 20px;
			button {
				padding: 7px 15px;
				background-color: #9e9e9e;
				border-radius: 7px;
				color: #fff;
			}
			button+button {
				margin-left: 15px;
			}
		}
	}

	.card-area {
		display: flex;
	}

	.modal-enter-active,
	.modal-leave-active {
		transition: opacity .3s;
	}

	.modal-enter,
	.modal-leave-to {
		opacity: 0;
	}
</style>