<template>
  <div>
    <LoadingUi v-if="loading" />
    <LobbyUi v-else :users="users" />
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
  props: {
    users: [],
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
