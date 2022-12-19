<template>
  <el-form
    :model="form"
    label-position="top"
    label-width="small"
    @keydown.enter="handleResetPassword"
  >
    <el-form-item>
      <el-col>
        <h2>Password reset form</h2>
      </el-col>
    </el-form-item>
    <UserDataErrorComponent />
    <el-form-item label="Email" prop="login">
      <el-input v-model="form.email" :value="form.email" disabled />
    </el-form-item>
    <el-form-item label="New password" prop="password">
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
    <el-form-item label="Confirm new password" prop="confirm_password">
      <el-input
        v-model="form.password_confirmation"
        type="password"
        show-password
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="success"
        size="large"
        style="width: 100%"
        @click="handleResetPassword"
        :loading="loading"
      >
        Reset password
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import UserDataErrorComponent from "@/components/Errors/UserDataErrorComponent.vue";
import { ElForm, ElFormItem, ElButton, ElInput, ElCol } from "element-plus";
import { mapActions } from "vuex";
export default {
  name: "ResetPasswordComponent",
  components: {
    UserDataErrorComponent,
    ElForm,
    ElFormItem,
    ElButton,
    ElInput,
    ElCol,
  },
  created() {
    const { email } = this.$route.query;
    const { token } = this.$route.params;
    this.form.email = email;
    this.form.token = token;
  },
  data() {
    return {
      loading: false,
      form: {
        email: "",
        password: "",
        password_confirmation: "",
        token: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["resetPassword"]),
    handleResetPassword() {
      this.loading = true;
      this.resetPassword(this.form).then(() => {
        this.loading = false;
      });
    },
  },
};
</script>

<style scoped></style>
