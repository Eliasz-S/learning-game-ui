<template>
  <div>
    <el-dropdown :hide-on-click="true" trigger="click" size="large">
      <span class="el-dropdown-link">
        <font-awesome-icon icon="fa-solid fa-circle-user" />
        &nbsp;
        {{ userData?.login }}
        &nbsp;
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
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
          <el-dropdown-item divided>
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
  name: "UserMenuComponent",
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
  font-size: 16px !important;
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
</style>
