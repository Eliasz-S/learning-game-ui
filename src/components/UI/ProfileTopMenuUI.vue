<template>
  <div class="profile-top-menu">
    <div class="profile-nav">
      <div class="profile-logo" @click="redirectToHomePage">
        <img
          class="logo-img"
          src="../../../public/img/maven-logo.png"
          alt="logo"
        />
      </div>
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
    <div class="mobile-nav">
      <div class="right_fl">
        <router-link to="/profile/home" class="top-nav-link">
          <font-awesome-icon icon="fa-solid fa-house-chimney" />
          &nbsp; Home
        </router-link>
        <router-link to="/profile/library" class="top-nav-link">
          <font-awesome-icon icon="fa-solid fa-list" />
          &nbsp; Library
        </router-link>
      </div>
      <UserSandwichMenuComponent />
    </div>
    <div class="nav-right">
      <el-button class="create_btn" size="large" @click="redirectToCreator">
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
import UserSandwichMenuComponent from "@/components/Profile/UserSandwichMenuComponent.vue";
import { ElButton } from "element-plus";

export default {
  name: "ProfileTopMenuComponent",
  components: {
    UserMenuComponent,
    UserSandwichMenuComponent,
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
.el-button.is-link {
  font-size: 12px !important;
  font-weight: 600;
  color: #222 !important;
  text-transform: uppercase;
  font-family: sans-serif;
}
.right_fl {
  display: flex;
}
.el-dropdown {
  color: #fff;
  font-size: 30px;
  line-height: 50px;
}
.mobile-nav {
  width: 100%;
  justify-content: space-between !important;
}
@media screen and (max-width: 970px) {
  .create_btn {
    display: none !important;
  }
}
@media screen and (min-width: 841px) {
  .mobile-nav {
    display: none !important;
  }
}
@media screen and (max-width: 840px) {
  .profile-nav,
  .nav-right {
    display: none !important;
  }
  .right_fl {
    font-size: 14px;
  }
  .el-dropdown {
    font-size: 24px !important;
  }
  .profile-top-menu {
    padding: 0 20px !important;
  }
}
.create_btn {
  background: #13cb1a;
  font-family: "Paytone One";
  color: #fff;
  font-size: 14px;
  border: none;
  transition: 0.3s ease;
  text-transform: uppercase;
}
.create_btn:hover {
  color: var(--el-button-hover-text-color);
  border-color: var(--el-button-hover-border-color);
  background-color: var(--el-button-hover-bg-color);
  outline: 0;
}
.profile-top-menu {
  display: flex;
  align-items: center;
  background: linear-gradient(
    109.6deg,
    rgb(157, 75, 199) 11.2%,
    rgb(119, 81, 204) 83.1%
  );
  color: #fff !important;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 40px;
  height: 3.5rem;
}
.profile-nav,
.mobile-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  cursor: pointer;
  margin-right: 4rem;
  height: inherit;
}
.logo-img {
  height: 3rem;
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
  transition: 0.3s ease;
}

.top-nav-link:visited {
  color: inherit;
}

.top-nav-link:hover {
  color: rgb(32, 32, 32);
}

.router-link-active {
  color: rgb(255, 255, 255);
}
</style>
