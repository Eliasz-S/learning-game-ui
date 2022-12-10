<template>
  <div class="profile">
    <ProfileTopMenuUI />
    <router-view />
  </div>
</template>

<script>
import ProfileTopMenuUI from "@/components/UI/ProfileTopMenuUI.vue";

export default {
  name: "ProfileView",
  components: {
    ProfileTopMenuUI,
  },
};
</script>
<style scoped>
button#view1 {
  position: absolute;
  background-color: yellow;
  left: 50%;
  top: 50%;
  color: #000;
  cursor: pointer;
  font-size: 2rem;
  height: 10rem;
  width: 20rem;
  transform: translate(-50%, -50%);
}
button#view2 {
  position: absolute;
  background-color: green;
  left: 50%;
  top: 50%;
  color: #000;
  cursor: pointer;
  font-size: 2rem;
  height: 10rem;
  width: 20rem;
  transform: translate(-50%, -50%);
}
.profile {
  background: #211b2a;
  color: #fff;
}
</style>
