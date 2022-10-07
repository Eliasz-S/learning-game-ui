<template>
  <div class="login">
    <LoginFormComponent />
  </div>
</template>

<script>
import LoginFormComponent from "@/components/LoginFormComponent.vue";

export default {
  name: "LoginView",
  components: { LoginFormComponent },
};
</script>

<style scoped>
.login {
  position: absolute;
  width: 320px;
  left: 40%;
  top: 40%;
}
</style>
