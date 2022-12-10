<template>
  <el-header class="auth-header">
    <h1 class="auth-logo" @click="redirectToHome">Maven</h1>
  </el-header>
  <div class="auth">
    <router-view />
  </div>
</template>

<script>
import { ElHeader } from "element-plus";
export default {
  name: "AuthView",
  components: {
    ElHeader,
  },
  methods: {
    redirectToHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.auth-logo {
  color: blueviolet;
  font-style: italic;
  cursor: pointer;
}
.auth-logo:hover {
  opacity: 70%;
}
.auth-header {
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
  display: flex;
  align-items: center;
}
.auth {
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
  color: inherit;
  padding: 2rem;
  position: absolute;
  min-width: 23rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
