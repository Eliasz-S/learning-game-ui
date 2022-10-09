<template>
  <div class="profile">
    <h1>Test view</h1>
    <component :is="currentComponent" :swap-component="swapComponent" />
  </div>
</template>

<script>
import GroupsComponentVue from "@/components/Library/GroupsComponent.vue";
import HomeComponentVue from "@/components/Library/HomeComponent.vue";
import LibraryComponentVue from "@/components/Library/LibraryComponent.vue";
import ReportsComponentVue from "@/components/Library/ReportsComponent.vue";
import ProfileTopMenuUI from "../components/UI/ProfileTopMenuUI.vue";

export default {
  name: "TestView",
  data: function () {
    return {
      currentComponent: "home-component",
    };
  },
  components: {
    "library-component": LibraryComponentVue,
    "home-component": HomeComponentVue,
    "reports-component": ReportsComponentVue,
    "groups-component": GroupsComponentVue,
    ProfileTopMenuUI,
  },
  methods: {
    swapComponent: function (component) {
      this.currentComponent = component;
    },
  },
};
</script>
<style scoped>
button#view1 {
  position: absolute;
  background-color: yellow;
  left: 50%;
  top: 50%;
  color: #000;
  cursor: pointer;
  font-size: 2rem;
  height: 10rem;
  width: 20rem;
  transform: translate(-50%, -50%);
}
button#view2 {
  position: absolute;
  background-color: green;
  left: 50%;
  top: 50%;
  color: #000;
  cursor: pointer;
  font-size: 2rem;
  height: 10rem;
  width: 20rem;
  transform: translate(-50%, -50%);
}
</style>
