<template>
	<div>
		<main-header></main-header>
		<slot />
		<main-footer></main-footer>
	</div>
</template>
<script>
	import MainHeader from '@/layouts/MainHeader'
	import MainFooter from '@/layouts/MainFooter'
	export default {
		name: 'mainLayout',
		components: {
			MainHeader,
			MainFooter
		},
	}
</script>
<style lang="">

</style>