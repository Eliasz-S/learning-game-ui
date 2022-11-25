<template>
  <el-form-item>
    <el-col>
      <h2>Password recovery</h2>
    </el-col>
  </el-form-item>
  <el-form label-position="top" label-width="small">
    <el-form-item label="Please, enter your email address">
      <el-input v-model="form.email" label-position="top"></el-input>
    </el-form-item>
    <el-button
      type="success"
      size="large"
      style="width: 100%"
      @click="handleReset"
    >
      Send a reset link
    </el-button>
  </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElButton, ElInput, ElCol } from "element-plus";
import { api } from "@/utils/axios";
export default {
  name: "ForgotPasswordComponent",
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
      },
    };
  },
  methods: {
    handleReset() {
      api.post("forgot-password", this.form);
    },
  },
};
</script>

<style scoped></style>
