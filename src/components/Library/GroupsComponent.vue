<template>
  <div class="profile-nav favourites">
    <p>Groups component</p>
    <ProfileTopMenuUI :swapComponent="swapComponent" />
  </div>
</template>
<script>
import ProfileTopMenuUI from "../UI/ProfileTopMenuUI.vue";
export default {
  name: "GroupsComponent",
  props: ["swapComponent"],
  components: { ProfileTopMenuUI },
};
</script>
