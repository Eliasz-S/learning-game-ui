<template>
  <div>
    <ConnectedUsersComponent :users="users" :pin="pin" @next="$emit('next')" />
  </div>
</template>

<script>
import ConnectedUsersComponent from "./../ConnectedUsersComponent.vue";

export default {
  name: "LobbyGathering",
  components: {
    ConnectedUsersComponent,
  },
  props: {
    users: Array,
    pin: {
      type: Number,
      required: true,
    },
    lobbyId: {
      type: Number,
      required: true,
    },
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
