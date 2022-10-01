<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <p>How it works ("about" on initial screen)</p>
    <p>Carousel component (on initial screen)</p>
    <p>
      <router-link to="/dashboard">Dashboard view</router-link>
      (for ALL users)
    </p>
    <p>
      <router-link to="/game">Game view</router-link>
      (test for student, starts with PIN)
    </p>
    <p><router-link to="/create">CreateTest view</router-link></p>
    <p><router-link to="/tests">TestList view</router-link></p>
    <p>
      <router-link to="/reports">Reports view</router-link>
      (on initial screen for AUTHED teacher/leader)
    </p>
    <!-- Давайте пока без смены языка? Не обязательный функционал для MVP -->
    <p>
      <router-link to="/language">Language view</router-link>
      (on initial screen for ALL, NOT must have)
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // _HelloWorld,
  },
};
</script>
