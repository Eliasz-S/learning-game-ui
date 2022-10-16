<template>
  <div>
    <h2>Choose your account type</h2>
    <el-row :gutter="10">
      <el-col :span="12" v-for="(role, idx) in roles" :key="idx">
        <el-button
          @click="swapComponent(nextSignUpStep), handleRole(role)"
          class="square"
        >
          {{ role }}
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElRow, ElCol, ElButton } from "element-plus";

export default {
  name: "ChooseRoleComponent",
  components: {
    ElRow,
    ElCol,
    ElButton,
  },
  data() {
    return {
      roles: ["Teacher", "Student"],
      nextSignUpStep: "sign-up-form-component",
      selectedRole: "",
    };
  },
  methods: {
    handleRole(userRole) {
      const selectedRole = this.roles.find((role) => role === userRole);
      this.selectedRole = selectedRole;
      this.$emit("save-role", {
        role: this.selectedRole,
      });
    },
  },
  props: ["swapComponent"],
};
</script>

<style scoped>
.square {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13.5rem;
  width: 12.5rem;
  margin: 0.5rem;
  cursor: pointer;
}
</style>
