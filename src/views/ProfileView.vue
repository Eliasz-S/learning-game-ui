<template>
  <div class="profile">
    <h1>Kahoot Profile Page</h1>
    <ProfileTopMenuUI />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileTopMenuUI from "@/components/UI/ProfileTopMenuUI.vue";

export default {
  name: "ProfileView",
  components: { ProfileTopMenuUI },
};
</script>

<style>
.profileNav {
  display: flex;
  justify-content: center;
}
.profile-nav {
  margin: 0 10px 0 10px;
}
</style>
