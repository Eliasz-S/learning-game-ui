<template>
  <p>Home</p>
  <ProfileTopMenuUI :swapComponent="swapComponent" />
</template>

<script>
import ProfileTopMenuUI from "../UI/ProfileTopMenuUI.vue";
export default {
  props: ["swapComponent"],
  components: { ProfileTopMenuUI },
};
</script>
