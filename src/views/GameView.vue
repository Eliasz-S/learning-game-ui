<template>
  <div class="authNav">
    <router-link to="/sign-up" class="auth-nav sign-up-link">
      Sign Up
    </router-link>
    <router-link to="/login" class="auth-nav login-link">Login</router-link>
  </div>
  <div class="game">
    <h1>Game Page</h1>
  </div>
</template>
<style>
.authNav {
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 0 10px;
}
.auth-nav {
  margin: 0 10px 0 10px;
}
</style>
