<template>
  <div class="sign-up">
    <component
      :is="currentComponent"
      :swap-component="swapComponent"
      @save-role="handleRole"
      @save-data="handleData"
    />
  </div>
</template>

<script>
import SignUpFormComponent from "@/components/Auth/SignUpFormComponent.vue";
import ChooseRoleComponent from "@/components/Auth/ChooseRoleComponent.vue";

export default {
  name: "SignUpView",
  components: {
    "sign-up-form-component": SignUpFormComponent,
    "choose-role-component": ChooseRoleComponent,
  },
  data() {
    return {
      roleChosen: false,
      currentComponent: "choose-role-component",
      userData: {
        name: "",
        password: "",
        email: "",
        role: "",
      },
    };
  },
  methods: {
    swapComponent(component) {
      this.currentComponent = component;
    },
    handleRole(roleData) {
      this.userData.role = roleData.role;
    },
    handleData(formData) {
      this.userData.name = formData.name;
      this.userData.password = formData.password;
      this.userData.email = formData.email;

      console.log(this.userData);
    },
  },
};
</script>

<style scoped>
.sign-up {
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
