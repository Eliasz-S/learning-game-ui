<template>
  <el-form
    label-position="top"
    label-width="small"
    @keydown.enter.prevent="handleSendLink"
  >
    <el-form-item>
      <el-col>
        <h2>Password recovery</h2>
      </el-col>
    </el-form-item>
    <UserDataErrorComponent />
    <el-form-item label="Please, enter your email address">
      <el-input v-model="form.email" label-position="top"></el-input>
    </el-form-item>
    <el-button
      type="success"
      size="large"
      style="width: 100%"
      @click="handleSendLink"
      :loading="loading"
    >
      Send a reset link
    </el-button>
  </el-form>
</template>

<script>
import UserDataErrorComponent from "@/components/Errors/UserDataErrorComponent.vue";
import { ElForm, ElFormItem, ElButton, ElInput, ElCol } from "element-plus";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "ForgotPasswordComponent",
  components: {
    UserDataErrorComponent,
    ElForm,
    ElFormItem,
    ElButton,
    ElInput,
    ElCol,
  },
  created() {
    this.setError(null);
  },
  data() {
    return {
      loading: false,
      form: {
        email: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["sendResetLink"]),
    ...mapMutations("user", ["setError"]),

    handleSendLink() {
      this.loading = true;
      this.sendResetLink(this.form).then(() => {
        this.loading = false;
        this.form = { email: "" };
      });
    },
  },
};
</script>

<style scoped></style>
