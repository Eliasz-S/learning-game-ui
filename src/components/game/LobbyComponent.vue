<template>
  <div>LobbyComponent</div>
  <div class="loading" v-if="loading">Loading...</div>
</template>

<script>
export default {
  name: "LobbyComponent",
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
