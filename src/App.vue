<template>
  <router-view />
</template>

<script>
import { http } from "@/utils/axios";
import { mapActions } from "vuex";

export default {
  mounted() {
    http.get("/sanctum/csrf-cookie");
    this.fetchUser();
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
