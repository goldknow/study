<template>
	<div 
		class="modal-wrap" 
	>
		<div class="modal">
			<button class="modal-close"
				@click="close"
			></button>
			<div class="modal-cont">
				<div class="modal-head"><slot name="title"></slot></div>
				<div class="modal-body">
					<slot name="date"></slot>
					<slot name="text"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'VueModal',
		props: {
			lists:{
				type: Array
			}
		},
		methods: {
			close(){
				this.$emit('close')
			}
		},
	}
</script>
<style lang="scss" scoped>
	@import '@/assets/styles/_mixin.scss';

	.pop-bg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 30;
		background: rgba(0, 0, 0, 0.2);
	}

	.modal-wrap {
		//display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		border: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		z-index: 30;
	}

	.modal {
		width: 100%;
		max-width: 400px;
		text-align: center;
		border-radius: 30px;
		background-color: #fff;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;

		.modal-cont {
			padding: 40px 30px;
		}

		.modal-head {
			font-size: 24px;
			padding-bottom: 40px;
		}

		.modal-body {
			padding-bottom: 30px;
			line-height: 1.5;
			letter-spacing: -0.4px;
			overflow: hidden;
		}
	}

	.modal-close {
		position: absolute;
		top: 10px;
		right: 10px;
		padding: 0;
		width: 40px;
		height: 40px;
		@include bgImg(50% 50%, 20px);
		background-image: url(~@/assets/images/modal-close.png);
	}
</style>