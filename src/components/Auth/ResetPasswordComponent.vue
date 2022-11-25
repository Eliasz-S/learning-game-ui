<template>
  <el-form :model="form" label-position="top" label-width="small">
    <el-form-item>
      <el-col>
        <h2>Password reset form</h2>
      </el-col>
    </el-form-item>
    <el-form-item label="Email" prop="login">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="New password" prop="password">
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
    <el-form-item label="Confirm new password" prop="confirm_password">
      <el-input v-model="form.checkPassword" type="password" show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="success" size="large" style="width: 100%">
        Reset password
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElButton, ElInput, ElCol } from "element-plus";
export default {
  name: "ResetPasswordComponent",
  components: {
    ElForm,
    ElFormItem,
    ElButton,
    ElInput,
    ElCol,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        checkPassword: "",
      },
    };
  },
};
</script>

<style scoped></style>
