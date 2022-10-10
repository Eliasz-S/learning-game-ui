<template>
  <div class="sign-up">
    <template v-if="!roleChosen">
      <h2>Choose your account type</h2>
      <ChooseRoleComponent :handle-login="handleLogin" />
    </template>
    <template v-if="roleChosen">
      <SignUpFormComponent />
    </template>
  </div>
</template>

<script>
import SignUpFormComponent from "@/components/SignUpFormComponent.vue";
import ChooseRoleComponent from "@/components/ChooseRoleComponent.vue";

export default {
  name: "SignUpView",
  components: { SignUpFormComponent, ChooseRoleComponent },
  data() {
    return {
      roleChosen: false,
    };
  },
  methods: {
    handleLogin() {
      this.roleChosen = !this.roleChosen;
    },
  },
};
</script>

<style scoped>
.sign-up {
  position: absolute;
  width: 320px;
  left: 40%;
  top: 30%;
}
</style>
