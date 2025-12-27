<template>
  <div>
    <h1>🛒 마이 쇼핑 리스트</h1>

    <div :style="{ backgroundColor: bgColor, padding: '10px' }">
      <h3 :class="{ 'text-bold': isUrgent }">오늘 살 물건들</h3>
      <a :href="shopUrl" target="_blank">쇼핑몰 바로가기</a>
    </div>

    <hr />

    <div>
      <input 
        v-model="newItem" 
        @keyup.enter="addItem" 
        placeholder="살 물건을 입력하세요"
      >
      <button @click="addItem">추가</button>
    </div>

    <br />

    <p v-if="items.length === 0">목록이 비어있습니다. 물건을 추가해주세요!</p>
    
    <ul v-else>
      <li v-for="(item, index) in items" :key="item.id">
        {{ index + 1 }}. {{ item.name }} 
        <button @click="removeItem(index)">삭제</button>
      </li>
    </ul>

    <hr />

    <button @click="showTip = !showTip">팁 보기/숨기기</button>
    <p v-show="showTip" style="color: blue;">
      Tip: Enter 키를 누르면 바로 추가됩니다!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-bind용
      bgColor: '#f9f9f9',
      isUrgent: true,
      shopUrl: 'https://www.google.com',
      
      // v-model용
      newItem: '',
      
      // v-for용 (고유 ID를 포함한 객체 배열 권장)
      items: [
        { id: 1, name: '사과' },
        { id: 2, name: '우유' }
      ],
      
      // v-show용
      showTip: false
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== '') {
        this.items.push({
          id: Date.now(), // 고유한 키값을 위해 현재 시간 사용
          name: this.newItem
        });
        this.newItem = ''; // 입력창 비우기
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<style>
.text-bold { font-weight: bold; color: red; }
</style>