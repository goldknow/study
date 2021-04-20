<template>

  <section class="cont">
    <h3>TODO LIST</h3>
    <div class="inner">
        
      <board-list
        
      ></board-list>

      <input type="text" v-model="todoInput" @keyup.enter="addNewTodo" />

      <todo-item
        :todoList="activeTodoList"
        :isChecked="isChecked"
        @check="checkTodo"
        @delete="toggleTodo"
      ></todo-item>
    </div>
  </section>
</template>
<script>
import TodoItem from "@/components/Board/TodoItem.vue";
import BoardList from "@/components/Board/";
export default {
  name: "Todo",
  components: {
    TodoItem,
    BoardList,
  },
  data() {
    return {
      isChecked: false,
      todoInput: "",
      todoList: [],
    };
  },

  // json 객체로 만든다(html안에서 내부 변수처럼 사용)
  computed: {
    //삭제 버튼 클릭시 on/off
    activeTodoList() {
      // filter()는 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출해, callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성합니다.
      return this.todoList.filter((todo) => todo.state === "active");
    },
  },
  methods: {
    //todo 추가
    addNewTodo() {
      this.todoList.push({
        label: this.todoInput, //input 값
        state: "active", //상태
        isChecked: false, //체크여부
      });
      this.todoInput = ""; //이벤트 후 리셋
    },
    //삭제 버튼 클릭 시 상태값 변경
    toggleTodo(todo) {
      todo.state = todo.state === "active" ? "done" : "active";
    },
    //체크 클릭 시 클래스 추가
    checkTodo(todo) {
      todo.isChecked = !todo.isChecked;
      console.log(todo);
    },
  },
};
</script>
<style lang="scss" scoped>
.cont {
  display: block;
  padding: 50px 0;
  text-align: center;
  background-color: #e0f5fe;
}

h3 {
  padding-bottom: 20px;
}

input {
  background-color: #fff;
}
</style>

<!-- 
https://www.youtube.com/watch?v=GEH0KcjUhiQ

https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-todomvc?from-embed
 -->