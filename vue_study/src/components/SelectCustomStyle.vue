<template>
    <div class="select-area" 
        :tabindex="tabindex" 
        @blur="open = false"
    >
        <div class="selected" 
            :class="{open:open}" 
            @click="open = !open"
        >
            {{ selectedCustom }}
        </div>
        <div class="items" 
            :class="{selectHide: !open}"
        >
            <div 
                v-for="(list, i) of lists" :key="i" 
                @click="
                    selectedCustom = list;
                    open = false;
                    $emit('input', list);
                ">
                {{list}}
            </div>
        </div>
    </div>

<!--
    참고) https://hackernoon.com/how-to-make-a-custom-select-component-in-vuejs-8kt32pj
-->
</template>

<script>
    export default {
        //name:'SelectStyle',
        props: {
            lists: {
                type: Array,
                required: true
            },
            default: {
                type: String,
                required: false,
                default: null
            },
            tabindex: {
                type: Number,
                required: false,
                default: 0
            }
        },
        data() {
            return {
                selectedCustom: this.default 
                    ? this.default : this.lists.length > 0 
                    ? this.lists[0] : null,
                open: false,
            }
        },
        mounted() {
            this.$emit('input', this.selectedCustom)
        },
    }
</script>

<style lang="scss" scoped>
    .select-area {
        position: relative;

        .selected {
            padding: 15px 10px;
            background-color: #fff;
            border: 1px solid #666;
            cursor: pointer;
        }

        .items {
            position: absolute;
            top: 47px;
            left: 0;
            z-index: 1;
            width: 100%;
            border: 1px solid #666;

            >div {
                padding: 15px 10px;
                background-color: #fff;
                cursor: pointer;

                &:hover {
                    background-color: #ddd;
                }

                &.disabled {
                    background-color: #f2f2f2;
                    color: #ddd;
                    cursor: default;
                }
            }
        }

        .selectHide {
            display: none;
        }
    }
</style>