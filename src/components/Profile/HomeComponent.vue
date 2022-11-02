<template>
  <p>Home</p>
  <ProfileTopMenuUI :swapComponent="swapComponent" />
  <template v-if="userName">
    <h2>Hello, {{ userName }}</h2>
    <button @click="logout">Log out</button>
  </template>
</template>

<script>
import ProfileTopMenuUI from "../UI/ProfileTopMenuUI.vue";
import { http } from "@/utils/axios";
import { mapActions } from "vuex";

export default {
  props: ["swapComponent"],
  components: { ProfileTopMenuUI },
  created() {
    http.get("/api/user").then((response) => {
      const userData = response.data;
      this.userName = userData.login;
    });
  },
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    ...mapActions("user", ["logout"]),
  },
};
</script>
