<template>
  <div>LobbyComponent</div>
  <div class="loadingui" v-if="loading">
    <LoadingUi />
  </div>
</template>

<script>
import LoadingUi from "../UI/LoadingUI.vue";

export default {
  name: "LobbyComponent",
  components: {
    LoadingUi,
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style lang="css" scoped></style>
