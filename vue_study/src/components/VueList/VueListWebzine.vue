<template>
	<section>
		<div 
			class="webzine"
			v-for="(list, i) in lists" :key="i"
		>
			<div class="img"
				:style="{backgroundImage: `url(${list.imgUrl})`}"
			></div>
			<div class="txt">
				<h2>{{ list.title }}</h2>
				<h3>{{ list.text }}</h3>
				<h4>{{ list.date }}</h4>
			</div>
		</div>	
	</section>

</template>
<script>
export default {
	name:'VueListWebzine',
	props: {
		lists: {
			type: Array
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';

	$imgWidth:200px;

	.webzine {
		display: flex;
		width: 100%;
		height: 150px;
		padding: 15px;
		border: 1px solid;
		border-radius: 15px;
		background-color: #fff;
		line-height: 1.3;
		position: relative;

		& + .webzine {
			margin-top: 20px;
		}

		.img {
			width: $imgWidth;
			height: 100%;
			@include bgImg(50% 50%, contain)
		}

		.txt {
			width: calc(100% - #{$imgWidth});

			h2 {
				font-size: 18px;
				font-weight: 700;
			}

			h3 {
				padding-top: 10px;
				font-size: 16px;
			}

			h4 {
				position: absolute;
				bottom: 10px;
				right: 10px;
				font-size: 14px;
				color: #666;
			}
		}
	}
</style>