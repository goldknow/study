<template>
  <div>
    <div class="list" v-for="(todo, i) in todoList" :key="i">
      <button @click="$emit('check', todo)">B</button>
      <p :class="{ 'checked': todo.isChecked }">{{ todo.label }}</p>
      <div>
        <button @click="$emit('delete', todo)">X</button>
        <p>{{ new Date() | moment("MM-DD HH:mm") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",

  props: {
    todoList: {
      type: Array,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  background: #fff;
  padding: 10px;
  align-items: center;
  justify-content: space-between;

  & + .list {
    border-top: 1px solid #ddd;
  }

  > p {
    word-break: break-all;
    max-width: 55%;
  }
}

.checked {
  text-decoration: line-through;
  color: #ddd;
}
</style>