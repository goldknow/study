<template>
	<section>
		<div 
			class="card"
			v-for="(list, i)  in lists" :key="i"
		>
			<div class="img"
				:style="{backgroundImage: `url(${list.imgUrl})`}"
			></div>
			<div class="txt">
				<h2
					@click="$emit('open', list)"
				>{{ list.title }}</h2>
				<h3>{{ list.text }}</h3>
			</div>
		</div>	
	</section>
</template>
<script>
	export default {
		name: 'VueListCard',
		props: {
			lists: {
				type: Array
			}
		},
	}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';
	section {
		display: flex;
	}
	.card {
		width: calc(100% / 3);
		padding: 15px;
		border: 1px solid;
		border-radius: 15px;
		background-color: #fff;
		line-height: 1.3;
		
		& + .card {
			margin-left: 15px;
		}

		.img {
			height: 150px;
			@include bgImg(50% 50%, contain)
		}

		.txt {
			h2 {
				padding-top: 15px;
				font-size: 18px;
				font-weight: 700;
			}

			h3 {
				margin-top: 10px;
				padding-top: 10px;
				border-top: 1px dashed #ddd;
				font-size: 16px;
			}
		}
	}
</style>