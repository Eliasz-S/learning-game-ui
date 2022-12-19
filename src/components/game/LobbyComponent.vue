<template>
  <div>
    <ConnectedUsersComponent :nickname="nickname" :pin="pin" />
  </div>
</template>

<script>
import ConnectedUsersComponent from "./../ConnectedUsersComponentForUser.vue";

export default {
  name: "LobbyComponent",
  components: {
    ConnectedUsersComponent,
  },
  props: {
    nickname: {
      type: String,
      required: true,
    },
    pin: String,
  },
};
</script>

<style lang="css" scoped></style>
