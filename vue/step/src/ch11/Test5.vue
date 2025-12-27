<template>
  <div class="todo-app">
    <h1>📝 오늘의 할 일</h1>

    <div class="input-group">
      <input 
        v-model="newTask" 
        @keyup.enter="addTask" 
        placeholder="할 일을 입력하고 엔터를 누르세요" 
      />
      <button @click="addTask">추가</button>
    </div>

    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
        <div class="content">
          <input type="checkbox" v-model="todo.completed" />
          <span :class="{ 'done': todo.completed }">{{ todo.text }}</span>
        </div>
        <button @click="removeTask(index)" class="del-btn">삭제</button>
      </li>
    </ul>

    <p v-if="todos.length === 0" class="empty-msg">모든 할 일을 마쳤습니다! 🎉</p>
    <p v-else class="status">남은 할 일: {{ remainingTasks }}개</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      todos: [
        { id: 1, text: 'Vue.js 공부하기', completed: false },
        { id: 2, text: '운동 가기', completed: true }
      ]
    };
  },
  // 데이터가 변할 때 자동으로 계산되는 값 (남은 할 일 개수 체크용)
  computed: {
    remainingTasks() {
      return this.todos.filter(t => !t.completed).length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') return;
      this.todos.push({
        id: Date.now(),
        text: this.newTask,
        completed: false
      });
      this.newTask = ''; // 입력창 비우기
    },
    removeTask(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.todo-app { max-width: 400px; margin: 50px auto; font-family: sans-serif; }
.input-group { display: flex; gap: 5px; margin-bottom: 20px; }
.input-group input { flex: 1; padding: 10px; }

.todo-item { 
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px; border-bottom: 1px solid #eee;
}
.content { display: flex; gap: 10px; align-items: center; }

/* 완료된 항목에 취소선 긋기 (가장 중요한 부분!) */
.done { text-decoration: line-through; color: #bbb; }

.del-btn { background: #ffeded; color: #ff5c5c; border: none; padding: 5px 8px; cursor: pointer; }
.status { font-size: 0.9rem; color: #666; margin-top: 20px; }
</style>