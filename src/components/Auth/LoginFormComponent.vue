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
    <template v-if="error">
      <el-col>
        <el-alert :title="error" type="error" show-icon />
      </el-col>
    </template>
    <el-form-item label="Username or email" prop="login">
      <el-input v-model="form.login" label-position="top" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
    <el-form-item>
      <div>
        Forgot password?
        <router-link to="forgot-password"> Reset your password </router-link>
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
  ElAlert,
} from "element-plus";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "LoginComponent",
  components: {
    ElForm,
    ElFormItem,
    ElButton,
    ElRow,
    ElCol,
    ElInput,
    ElAlert,
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
  computed: {
    ...mapGetters("user", ["error"]),
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
