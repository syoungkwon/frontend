<template>
  <div>
    <h2>Built-In Directive Test...</h2>
    <h3>v-bind test</h3>
    <div v-bind:style="{color: activeColor, fontSize:fontSize+'px'}">hello</div>
    <a v-bind:href="url">google</a>
    <a :href="url">google2</a>
    <br><br>
    <h3>v-if test</h3>
    <template v-if="loginType === 'username'">
        <label>name</label>
        <input placeholder="이름을 입력하세요">
    </template>
    <template v-else>
        <label>email</label>
        <input placeholder="이메일을 작성해 주세요">
    </template>
    <br><br>
    <button @click="loginTypeChange">change</button>
    <br><br>
    <h3>v-for test</h3>
    <ul>
        <li v-for="(item,index) in items" :key="index">
            {{ index }} - {{ item.message }}
        </li>
    </ul>
    <ul>
        <li v-for="(value, key, index) in object" :key="index">
            {{ index }} - {{ key }} - {{ index }}
        </li>
    </ul>
    <br><br>
    <h3>event</h3>
    <form >
        <input type="submit" v-on:click="submitMethod"/>
        <input type="submit" v-on:click.prevent="submitMethod"/>
    </form>
    <br>
    <input @keyup.enter.space="keyEvent">
    <br>
    <input v-model="name" placeholder="input name">
    <br>
    {{ name }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeColor: "red",
      fontSize: 30,
      url: "http://www.google.com",

      //v-if test
      loginType: "username",

      //v-for test
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        firstName: "John",
        lastName: "Doe",
        age: 30,
      },

      //Two-way binding
      name: "",
    };
  },
  methods: {
    loginTypeChange() {
      if (this.loginType === "username") this.loginType = "email";
      else this.loginType = "username"; //로그인 타입 변경 시 콜되는 함수
    },
    //이벤트 시 콜되는 함수
    submitMethod() {
      console.log("Submit");
    },
    keyEvent() {
      console.log("keyEvent....");
    },
  },
};
</script>
