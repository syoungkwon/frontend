<template>
  <div class="container">
    <h1>📇 프로필 카드 관리자</h1>

    <div class="input-form">
      <input
        v-model="newUserName"
        @keyup.enter="addCard"
        placeholder="이름 입력"
      />
      <select v-model="newUserRole">
        <option value="admin">관리자</option>
        <option value="user">일반 유저</option>
      </select>
      <button @click="addCard">카드 추가</button>
      <button v-if="userList.length > 0" class="clear-btn" @click="clearAll">
        전체 삭제
      </button>
    </div>

    <hr />

    <div v-if="userList.length > 0" class="card-list">
      <div
        v-for="(user, index) in userList"
        :key="user.id"
        class="card"
        :class="{
          'border-gold': user.role === 'admin',
          'is-favorite': user.isFavorite, // 1-2. 좋아요 상태일 때 배경색 클래스
        }"
      >
        <div class="card-body">
          <h3 :class="user.role === 'admin' ? 'text-admin' : 'text-user'">
            {{ user.name }}
          </h3>
          <p>등급: {{ user.role === "admin" ? "👑 관리자" : "👤 일반" }}</p>
        </div>

        <div class="btn-group">
          <button class="fav-btn" @click="user.isFavorite = !user.isFavorite">
            {{ user.isFavorite ? "❤️" : "❔" }}
          </button>
          <button class="del-btn" @click="removeCard(index)">삭제</button>
        </div>
      </div>
    </div>

    <p v-else class="empty-msg">등록된 프로필이 없습니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUserName: "",
      newUserRole: "user", // 기본값
      userList: [
        { id: 1, name: "홍길동", role: "admin", isFavorite: false },
        { id: 2, name: "김철수", role: "user", isFavorite: false },
      ],
    };
  },
  methods: {
    addCard() {
      if (this.newUserName.trim() === "") return alert("이름을 입력하세요!");

      this.userList.push({
        id: Date.now(),
        name: this.newUserName,
        role: this.newUserRole,
        isFavorite: false, // 1-3. 새 카드 추가 시 기본값은 false
      });

      this.newUserName = ""; // 입력창 초기화
    },
    removeCard(index) {
      this.userList.splice(index, 1);
    },
    clearAll() {
      // 2. 전체 삭제 로직
      if (confirm("정말 모든 목록을 삭제하시겠습니까?")) {
        this.userList = []; // 배열을 빈 배열로 교체하여 전체 삭제
      }
    },
  },
};
</script>

<style scoped>
/* 실무에서는 이런 식으로 클래스 위주로 작업합니다 */
.container {
  padding: 20px;
  max-width: 500px;
  margin: auto;
}
.input-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.card {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  transition: 0.3s;
}
/* 1-4. 좋아요 전용 스타일 */
.is-favorite {
  background-color: #fff0f3;
  border-color: #ffb3c1;
}

/* 관리자 카드에만 붙는 특별한 테두리 클래스 */
.border-gold {
  border: 2px solid gold;
  background-color: #fffdf0;
}

.text-admin {
  color: #d32f2f;
  font-weight: bold;
}
.text-user {
  color: #333;
}

.del-btn {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}
.empty-msg {
  color: #888;
  text-align: center;
}
</style>
