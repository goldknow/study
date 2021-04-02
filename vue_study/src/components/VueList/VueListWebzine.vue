<template>
	<div class="webzine">
		<div class="img"
			:style="{backgroundImage: `url(${ListItem.imgUrl})`}"
		></div>
		<div class="txt">
			<h2>{{ ListItem.title }}</h2>
			<h3>{{ ListItem.text }}</h3>
			<h4>{{ ListItem.date }}</h4>
		</div>
	</div>
</template>
<script>
export default {
	name:'VueListWebzine',
	props: [
		'ListItem'
	]
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