<template>
  <div>
    <ConnectedUsersComponent users="users" :pin="pin" />
  </div>
</template>

<script>
import ConnectedUsersComponent from "./../ConnectedUsersComponent";

export default {
  name: "LobbyComponent",
  components: {
    ConnectedUsersComponent,
  },
  props: {
    users: Array,
    pin: String,
  },
};
</script>

<style lang="css" scoped></style>
