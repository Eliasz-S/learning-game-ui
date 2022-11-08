<template>
  <component
    :is="currentComponent"
    :swap-component="swapComponent"
    @save-role="handleRole"
    @save-data="handleData"
  />
</template>

<script>
import SignUpFormComponent from "@/components/Auth/SignUpFormComponent.vue";
import ChooseRoleComponent from "@/components/Auth/ChooseRoleComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SignUpView",
  components: {
    "sign-up-form-component": SignUpFormComponent,
    "choose-role-component": ChooseRoleComponent,
  },
  data() {
    return {
      currentComponent: "choose-role-component",
      userData: {
        role: "",
        login: "",
        password: "",
        checkPassword: "",
        password_confirmation: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapGetters("user", ["error"]),
  },
  methods: {
    ...mapActions("user", ["registerUser"]),
    swapComponent(component) {
      this.currentComponent = component;
    },
    handleRole(roleData) {
      this.userData.role = roleData.role;
    },
    handleData(formData) {
      this.userData.login = formData.login;
      this.userData.password = formData.password;
      this.userData.password_confirmation = formData.checkPassword;
      this.userData.email = formData.email;

      this.registerUser(this.userData);
    },
  },
};
</script>
