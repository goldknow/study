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
				<h2
					@click="[$emit('open', list), $emit('input', list)]"
				>{{ list.title }}</h2>
				<h3 class="ellip3">{{ list.text }}</h3>
				<h4>{{ list.date }}</h4>
			</div>
		</div>	
	</section>
</template>

<script>
export default {
    name: 'VueListWebzine',
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

    &+.webzine {
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
            cursor: pointer;
        }

        h3 {
            padding-top: 10px;
            font-size: 16px;
        }

        h4 {
            position: absolute;
            bottom: 6px;
            right: 17px;
            font-size: 13px;
            font-weight: 300;
            color: #666;
        }
    }
}
</style>
