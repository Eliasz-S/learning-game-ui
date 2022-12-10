<template>
  <div class="profile-top-menu">
    <div class="profile-logo" @click="redirectToHomePage">
      <h1>Maven</h1>
    </div>
    <div class="profile-nav">
      <router-link to="/profile/home" class="top-nav-link">
        <font-awesome-icon icon="fa-solid fa-house-chimney" />
        &nbsp; Home
      </router-link>
      <router-link to="/profile/library" class="top-nav-link">
        <font-awesome-icon icon="fa-solid fa-list" />
        &nbsp; Library
      </router-link>
      <router-link to="/profile/reports" class="top-nav-link">
        <font-awesome-icon icon="fa-solid fa-chart-column" />
        &nbsp; Reports
      </router-link>
      <router-link to="/profile/groups" class="top-nav-link">
        <font-awesome-icon icon="fa-solid fa-users-line" />
        &nbsp; Groups
      </router-link>
    </div>
    <div class="nav-right">
      <el-button type="success" size="large" @click="redirectToCreator">
        Create
      </el-button>
      <div class="user-menu">
        <UserMenuComponent />
      </div>
    </div>
  </div>
</template>

<script>
import UserMenuComponent from "@/components/Profile/UserMenuComponent.vue";
import { ElButton } from "element-plus";

export default {
  name: "ProfileTopMenuComponent",
  components: {
    UserMenuComponent,
    ElButton,
  },
  methods: {
    redirectToCreator() {
      this.$router.push("/test-creator");
    },
    redirectToHomePage() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.profile-top-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
}
.profile-nav {
  display: flex;
  justify-content: center;
}
.nav-right {
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;
}
.profile-logo {
  display: flex;
  align-items: center;
  position: absolute;
  left: 1rem;
  cursor: pointer;
}
.profile-logo:hover {
  color: blueviolet;
}
.user-menu {
  margin: 2.5rem;
}
.top-nav-link {
  text-decoration: none;
  margin: 1rem;
}

.top-nav-link:visited {
  color: inherit;
}

.top-nav-link:hover {
  color: blueviolet;
}

.router-link-active {
  color: red;
}
</style>
