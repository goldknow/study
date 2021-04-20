<template>
  <div>
    <div class="list" 
        v-for="(todo, i) in todoList" :key="i"  
         :class="{ checked: todo.isChecked }"
    >
      <button 
        @click="$emit('check', todo)"
        class="btn-chk"
      >DO</button>
      <p class="label">{{ todo.label }}</p>
      <div>
        <button @click="$emit('delete', todo)">X</button>
        <p>{{ new Date() | moment("D. ddd") }}</p>
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
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px;

  & + .list {
    border-top: 1px solid #ddd;
  }

  > p {
    word-break: break-all;
    max-width: 55%;
  }

  > div p {
    color: #ccc;
    font-size: 12px;
    font-weight: 300;
    padding-top: 10px;
  }
}

.checked {
    .label {
        text-decoration: line-through;
        color: #ddd;        
    }

    .btn-chk {
        color: #ddd;
    }
}
</style>