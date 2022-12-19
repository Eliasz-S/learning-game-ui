<template>
  <el-row justify="start" class="settings-header">
    <el-col :span="4.5">
      <h4>Change your password</h4>
    </el-col>
  </el-row>
  <el-form
    :model="password"
    ref="formRef"
    label-position="top"
    label-width="small"
  >
    <el-row :gutter="20">
      <el-col :span="10">
        <el-form-item label="Current password" prop="current_password">
          <el-input
            v-model="password.current_password"
            type="password"
            show-password
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10">
        <el-form-item label="New password" prop="password">
          <el-input v-model="password.password" type="password" show-password />
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item label="Repeat new password" prop="password_confirmation">
          <el-input
            v-model="password.password_confirmation"
            type="password"
            show-password
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-form-item>
          <el-button
            type="success"
            @click="handleChangePassword"
            style="width: 100%"
          >
            Save
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import {
  ElRow,
  ElForm,
  ElFormItem,
  ElInput,
  ElCol,
  ElButton,
} from "element-plus";
import { mapActions } from "vuex";

export default {
  name: "ChangePasswordComponent",
  components: {
    ElRow,
    ElForm,
    ElFormItem,
    ElInput,
    ElCol,
    ElButton,
  },
  data() {
    return {
      password: {
        current_password: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["updatePassword"]),
    handleChangePassword() {
      this.updatePassword(this.password);
      this.$refs.formRef.resetFields();
      this.setError(null);
    },
  },
};
</script>

<style scoped>
.settings-header {
  align-items: center;
  padding: 0.5rem 0rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(242, 242, 242);
}
</style>
