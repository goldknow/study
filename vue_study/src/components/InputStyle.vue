<template>
	<!-- 
	중국어, 일본어, 한국어 등은 입력이 끝나야지만 입력값이 동기화된다.
	이러한 v-model의 한계점 때문에 뷰 공식 문서에서는 한국어 입력을 다룰 때 
	v-bind:value와 v-on:input을 직접 연결해서 사용하는 것을 권고하고 있다.
	-->
	<div class="input-area">
		<label 
			:for="id" 
			:class="{font0: isHide}"
		>{{id}}</label>
		<input 
			:value="value" 
			@input="updateInput" 
			:type="type" 
			:id="id" 
			:disabled="disabled" 
            :readonly="readonly"
			:placeholder="placeholder">
	</div>
</template>

<script>
export default {
    name: 'InputStyle',
    props: [
        'value', 'type', 'id', 'placeholder', 'isHide', 'disabled', 'readonly'
    ],
    methods: {
        updateInput: function (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
$labelWidth : 110px;

.input-area {
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        width: $labelWidth;
        text-align: left;
        text-transform: uppercase;

        &.font0 {
            font-size: 0;
        }
    }

    input {
        width: calc(100% - #{$labelWidth});
        padding: 15px 10px;
        background-color: #fff;
        border: 1px solid #666;

        &:disabled {
            background-color: #f2f2f2;
            color: #ddd;
            cursor: default;
        }
    }
}
</style>
