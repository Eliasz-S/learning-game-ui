<template>
  <div class="profile">
    <h1>Kahoot Profile Page</h1>
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
  name: "ProfileView",
  components: { FavouritesComponent, LibraryComponent, ReportsComponent },
};
</script>

<style>
.profileNav {
  display: flex;
  justify-content: center;
}
.profile-nav {
  margin: 0 10px 0 10px;
}
</style>
