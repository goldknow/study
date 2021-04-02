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
			:disabled="value.includes(option.value)"
		>{{option.text}}</option>

	</select>
</template>
<script>
	export default {
		name: 'SelectStyle',
		props: {
			value: {
				typs: String
			}, 
			name: {
				typs: String
			}, 
			id: {
				typs: String
			}, 
			options: {
				typs: String
			}
		},
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