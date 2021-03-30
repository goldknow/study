<template>
    <div class="text-area">
        <textarea 
            :maxlength="maxlength"
            :placeholder="placeholder" 
            :style="{resize:resize}" 
            :value="value" 
            @input="updateInput"
        ></textarea>
        <!-- <p>0/30자</p> -->
    </div>
</template>

<script>
export default {
    name: 'TextareaStyle',
    props: [
        'value', 'placeholder', 'resize', 'maxlength'
    ],
    methods: {
        updateInput: function (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.text-area {
    position: relative;

    textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #666;
    }

    p {
        position: absolute;
        bottom: 3px;
        right: 7px;
        font-size: 13px;
    }
}
</style>
