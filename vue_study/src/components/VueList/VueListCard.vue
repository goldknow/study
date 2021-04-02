<template>
	<div class="card"
	>
		<div class="img"
			:style="{backgroundImage: `url(${ListItem.imgUrl})`}"
		></div>
		<div class="txt">
			<h2>{{ ListItem.title }}</h2>
			<h3>{{ ListItem.text }}</h3>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'VueListGallery',
		props: [
			'ListItem'
		]
	}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_mixin.scss';

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