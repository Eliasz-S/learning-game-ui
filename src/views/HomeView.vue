<template>
  <div class="home">
    <h1>Kahoot Home Page</h1>
    <div class="profileNav">
      <FavouritesComponent />
      <LibraryComponent />
      <ReportsComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FavouritesComponent from "@/components/FavouritesComponent.vue";
import LibraryComponent from "@/components/LibraryComponent.vue";
import ReportsComponent from "@/components/ReportsComponent.vue";

export default {
  name: "HomeView",
  components: { FavouritesComponent, LibraryComponent, ReportsComponent },
};
</script>

<style>
.profileNav {
  display: flex;
  justify-content: center;
}
.home-nav {
  margin: 0 10px 0 10px;
}
</style>
