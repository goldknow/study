<template>
  <div>
    <todo-item
      :todoList="todoList"
      :isChecked="isChecked"
      @check="checkTodo"
      @delete="toggleTodo"
    ></todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "BoardList",
  components: { TodoItem },
  props: {
    todoList: {
      type: Array,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    checkTodo(todo) {
      this.$emit("check", todo);
    },
    toggleTodo(todo) {
      this.$emit("delete", todo);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>