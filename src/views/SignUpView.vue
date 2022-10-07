<template>
  <div class="sign-up">
    <SignUpFormComponent />
  </div>
</template>

<script>
import SignUpFormComponent from "@/components/SignUpFormComponent.vue";

export default {
  name: "SignUpView",
  components: { SignUpFormComponent },
};
</script>

<style scoped>
.sign-up {
  position: absolute;
  width: 320px;
  left: 40%;
  top: 40%;
}
</style>
