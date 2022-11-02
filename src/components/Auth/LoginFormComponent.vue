<template>
  <el-form
    ref="formRef"
    :model="form"
    label-position="top"
    label-width="small"
    @keydown.enter="handleLogin"
  >
    <el-form-item>
      <el-col>
        <h2>Log in</h2>
      </el-col>
    </el-form-item>
    <el-form-item label="Username or email" prop="name">
      <el-input v-model="form.login" label-position="top" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
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
      <el-button
        type="success"
        size="large"
        style="width: 100%"
        @click="handleLogin"
      >
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
import { http } from "@/utils/axios";

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
        login: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      http.post("login", this.form).then(() => {
        this.$router.push("profile");
      });
      if (this.form.login.trim()) {
        this.$swal.fire({
          title: "Success!",
          text: `You've logged in as ${this.form.login}`,
          icon: "success",
          allowEnterKey: false,
        });
      } // sweetalert2 test
      this.$refs.formRef.resetFields();
    },
  },
};
</script>

<style scoped>
.grid-content {
  font-size: 14px;
}
</style>
