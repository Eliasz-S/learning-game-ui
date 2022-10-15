<template>
  <el-form :model="form" label-position="top" label-width="small">
    <el-form-item>
      <el-col>
        <h2>Log in</h2>
      </el-col>
    </el-form-item>
    <el-form-item label="Username or email">
      <el-input v-model="form.input" label-position="top" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
    <el-form-item>
      <div>
        Forgot password?
        <el-link type="primary" href="#" :underline="false">
          Reset your password
        </el-link>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="success" size="large" style="width: 100%">
        Log in
      </el-button>
    </el-form-item>
  </el-form>
  <el-row>
    <el-col>
      <div class="grid-content">
        Don't have an account?
        <router-link to="/sign-up">Sign up</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {
  ElForm,
  ElFormItem,
  ElButton,
  ElRow,
  ElCol,
  ElInput,
  ElLink,
} from "element-plus";

export default {
  name: "LoginComponent",
  components: {
    ElForm,
    ElFormItem,
    ElButton,
    ElRow,
    ElCol,
    ElInput,
    ElLink,
  },
  data() {
    return {
      form: {
        input: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
.grid-content {
  font-size: 14px;
}
</style>
