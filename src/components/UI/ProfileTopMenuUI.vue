<template>
  <div id="profile_topmenu">
    <div class="profileNav">
      <button @click="swapComponent('home-component')" type="submit">
        Home
      </button>
      <button @click="swapComponent('library-component')" type="submit">
        library
      </button>
      <button @click="swapComponent('reports-component')" type="submit">
        Reports
      </button>
      <button @click="swapComponent('groups-component')" type="submit">
        Groups
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTopMenuComponent",
  props: ["swapComponent"],
};
</script>
