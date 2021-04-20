<template>
  <!--
    1. 클래스 바인딩이 왜 안되지?
    2. BoardList 배열 확인 어떻게하지? 배열 안에 넣어져 있는걸 확인해야 총 갯수랑 그런거 연결할텐데
-->

  <section class="cont">
    <h3>TODO LIST</h3>
    <div class="inner">
      <input type="text" v-model="todoInput" @keyup.enter="addNewTodo" />

      <board-list
        :todoList="activeTodoList"
        :isChecked="isChecked"
        @check="checkTodo"
        @delete="toggleTodo"
      ></board-list>
    </div>
  </section>
</template>
<script>
import BoardList from "@/components/Board/";
export default {
  name: "Todo",
  components: {
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
  // 클래스의 getter 함수 같이 동작한다.
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
        isChecked: false,
      });
      this.todoInput = ""; //이벤트 후 리셋
      //console.log(todoList);
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