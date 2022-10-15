<template>
  <div class="login">
    <LoginFormComponent />
  </div>
</template>

<script>
import LoginFormComponent from "@/components/Auth/LoginFormComponent.vue";

export default {
  name: "LoginView",
  components: { LoginFormComponent },
};
</script>

<style scoped>
.login {
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
