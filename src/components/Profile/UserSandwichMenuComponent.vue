<template>
  <div>
    <el-dropdown
      :hide-on-click="true"
      trigger="click"
      size="large"
      class="mobile-dropdown"
    >
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
            <el-form @submit.prevent="signOut">
              <el-button class="link" native-type="submit" link>
                <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                &nbsp; Log out
              </el-button>
            </el-form>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {
  ElButton,
  ElForm,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from "element-plus";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserSandwichMenuComponent",
  components: {
    ElButton,
    ElForm,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
  },
  computed: {
    ...mapGetters("user", ["userData"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
    signOut() {
      this.logout();
    },
  },
};
</script>

<style scoped>
.el-dropdown-link {
  font-size: 20px;
  cursor: pointer;
  color: #fff !important;
  display: flex;
  align-items: center;
  color: initial;
}
.link {
  text-decoration: none;
  color: inherit;
  font: initial;
}
.link:hover {
  color: inherit;
}
.mobile-dropdown {
  cursor: pointer;
}
</style>
