<template>
  <el-header class="auth-header">
    <img
      src="../../public/img/maven-logo.png"
      alt="logo"
      class="auth-logo"
      @click="redirectToHome"
    />
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
  cursor: pointer;
  height: 3rem;
  background: linear-gradient(
    109.6deg,
    rgb(157, 75, 199) 11.2%,
    rgb(119, 81, 204) 83.1%
  );
  border-radius: 10% 10%;
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
