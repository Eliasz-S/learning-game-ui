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
    <LoginErrorComponent />
    <el-form-item label="Username or email" prop="login">
      <el-input v-model="form.login" label-position="top" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
    <el-form-item>
      <div>
        Forgot password?
        <router-link to="/auth/forgot-password">
          Reset your password
        </router-link>
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
        <router-link to="/auth/sign-up">Sign up</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import LoginErrorComponent from "@/components/Errors/LoginErrorComponent.vue";
import {
  ElForm,
  ElFormItem,
  ElButton,
  ElRow,
  ElCol,
  ElInput,
} from "element-plus";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "LoginComponent",
  components: {
    LoginErrorComponent,
    ElForm,
    ElFormItem,
    ElButton,
    ElRow,
    ElCol,
    ElInput,
  },
  created() {
    this.setError(null);
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
    ...mapMutations("user", ["setError"]),

    ...mapActions("user", ["login"]),

    handleLogin() {
      this.setError(null);
      this.login(this.form);
    },
  },
};
</script>

<style scoped>
.grid-content {
  font-size: 14px;
}
</style>
