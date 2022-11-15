<template>
  <div>
    <LoadingUi v-if="loading" />
    <LobbyUi v-else />
  </div>
</template>

<script>
import LoadingUi from "../UI/LoadingUI.vue";
import LobbyUi from "../UI/LobbyUI.vue";

export default {
  name: "LobbyComponent",
  components: {
    LoadingUi,
    LobbyUi,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => (this.loading = false), 1000);
  },
};
</script>

<style lang="css" scoped></style>
