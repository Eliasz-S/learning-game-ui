<template>
  <div>
    <LoadingUi v-if="loading" />
    <ConnectedUsersComponent v-else :users="users" :pin="pin" />
  </div>
</template>

<script>
import LoadingUi from "../UI/LoadingUI.vue";
import ConnectedUsersComponent from "./../ConnectedUsersComponent";

export default {
  name: "LobbyComponent",
  components: {
    LoadingUi,
    ConnectedUsersComponent,
  },
  props: {
    users: Array,
    pin: String,
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
