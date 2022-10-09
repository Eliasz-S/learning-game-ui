<template>
  <div class="profile-nav reports">
    <p>Reports component</p>
    <ProfileTopMenuUI :swapComponent="swapComponent" />
  </div>
</template>

<script>
import ProfileTopMenuUI from "../UI/ProfileTopMenuUI.vue";
export default {
  name: "ReportsComponent",
  props: ["swapComponent"],
  components: { ProfileTopMenuUI },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
