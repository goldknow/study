<template>
	<section class="cont">
		<vue-list></vue-list>
	</section>
</template>
<script>
	import VueList from '@/components/VueList/VueList.vue'

	export default {
		components: {
			VueList
		},
		name: 'Gallery'
	}
</script>
<style lang="scss" scoped>
	.cont {
		display: block;
      height: auto;
      padding: 50px 0;
		background-color: #e1e0fe;
	}
</style>