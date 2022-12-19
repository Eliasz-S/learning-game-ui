<template>
  <div class="profile-settings">
    <el-main>
      <el-row justify="start">
        <h2>Settings</h2>
      </el-row>
    </el-main>
    <UserDataErrorComponent />
    <el-container>
      <el-main class="settings-personal">
        <ChangeUserDataComponent />
      </el-main>
      <el-main class="settings-personal">
        <ChangePasswordComponent />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ChangeUserDataComponent from "@/components/Profile/ChangeUserDataComponent.vue";
import ChangePasswordComponent from "@/components/Profile/ChangePasswordComponent.vue";
import UserDataErrorComponent from "@/components/Errors/UserDataErrorComponent.vue";
import { ElContainer, ElMain, ElRow } from "element-plus";

export default {
  name: "ProfileSettingsComponent",
  components: {
    ElContainer,
    ElMain,
    ElRow,
    ChangeUserDataComponent,
    ChangePasswordComponent,
    UserDataErrorComponent,
  },
};
</script>

<style scoped>
.settings-personal {
  width: 45%;
  margin: 1rem;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px rgb(204, 204, 204);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
}
</style>
