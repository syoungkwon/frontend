<template>
  <div class="base-box" :class="{ 'is-active': isActive, 'has-error': hasError }">
    상태 알림창
  </div>

  <div :class="[themeClass, sizeClass]">
    테마와 사이즈가 적용된 버튼
  </div>

  <div :class="isLoggedIn ? 'logout-btn' : 'login-btn'">
    {{ isLoggedIn ? '로그아웃' : '로그인' }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,     // 'is-active' 클래스 추가됨
      hasError: false,    // 'has-error' 클래스 추가 안 됨
      themeClass: 'dark', // 'dark' 클래스 추가
      sizeClass: 'large', // 'large' 클래스 추가
      isLoggedIn: true
    }
  }
}
</script>