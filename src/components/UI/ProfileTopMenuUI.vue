<template>
  <div class="profile-top-menu">
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
    <div class="mobile-nav">
      <el-dropdown :hide-on-click="true" trigger="click" size="large">
        <span class="el-dropdown-link">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-button
                class="link"
                native-type="submit"
                @click="$router.push('/profile/reports')"
                link
              >
                <font-awesome-icon icon="fa-solid fa-chart-column" />
                &nbsp; &nbsp; Reports
              </el-button>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-button
                class="link"
                native-type="submit"
                @click="$router.push('/profile/groups')"
                link
              >
                <font-awesome-icon icon="fa-solid fa-users-line" />
                &nbsp; &nbsp; Groups
              </el-button>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-button
                class="link"
                native-type="submit"
                @click="$router.push('/profile/settings')"
                link
              >
                <font-awesome-icon icon="fa-solid fa-user" />
                &nbsp; &nbsp; Profile settings
              </el-button>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-form @click.prevent="signOut">
                <el-button class="link" native-type="submit" link>
                  <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                  &nbsp; Log out
                </el-button>
              </el-form>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
import {
  ElButton,
  ElForm,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from "element-plus";

export default {
  name: "ProfileTopMenuComponent",
  components: {
    UserMenuComponent,
    ElButton,
    ElForm,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
  },
  methods: {
    redirectToCreator() {
      this.$router.push("/test-creator");
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
  width: 80%;
  margin: 10px auto;
  justify-content: space-between !important;
}
@media screen and (max-width: 890px) {
  .create_btn {
    display: none !important;
  }
}
@media screen and (min-width: 780px) {
  .mobile-nav {
    display: none !important;
  }
}
@media screen and (max-width: 779px) {
  .profile-nav,
  .nav-right {
    display: none !important;
  }
  .right_fl {
    font-size: 12px;
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
}
.profile-nav,
.mobile-nav {
  display: flex;
  justify-content: center;
}
.nav-right {
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;
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
