<template>
  <p>Home</p>
  <ProfileTopMenuUI :swapComponent="swapComponent" />
  <template v-if="userData">
    <h2>Hello, {{ userData.login }}</h2>
    <form @submit.prevent="signOut">
      <button type="submit">Log out</button>
    </form>
  </template>
</template>

<script>
import ProfileTopMenuUI from "@/components/UI/ProfileTopMenuUI.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["swapComponent"],
  components: { ProfileTopMenuUI },
  computed: {
    ...mapGetters("user", ["userData"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
    signOut() {
      this.logout();
      this.$router.push("login");
    },
  },
};
</script>
