<template>
	<select 
		class="select-area"
		:name="name" 
		:id="id" 
		:value="value" 
		@change="updateInput"
	>
		<option
			v-for="(option, i) in options" :key="i" 
			:value="option.value"
			:disabled="disabled" 
		>{{option.text}}</option>
	</select>
</template>
<script>
	export default {
		name: 'SelectStyle',
		props: [
			'value', 'name', 'id', 'options', 'disabled'
		],
		methods: {
			updateInput: function (e) {
				this.$emit('input', e.target.value)
			}
		}
	}
</script>
<style lang="scss" scoped>
	select {
		width: 100%;
		padding: 15px 10px;
		background-color: #fff;
		border: 1px solid #666;

		option {
			padding: 10px;
		}
	}
</style>