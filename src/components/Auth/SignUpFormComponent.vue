<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-position="top"
      label-width="small"
      @keydown.enter="handleData"
    >
      <el-form-item>
        <el-col>
          <h2>Sign up</h2>
        </el-col>
      </el-form-item>
      <el-form-item label="Create login" prop="name">
        <el-input v-model="form.name" label-position="top" />
      </el-form-item>
      <el-form-item label="Create password" prop="password">
        <el-input v-model="form.password" type="password" show-password />
      </el-form-item>
      <el-form-item label="Repeat password" prop="checkPassword">
        <el-input v-model="form.checkPassword" type="password" show-password />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" label-position="top" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          size="large"
          style="width: 100%"
          @click="handleData"
        >
          Sign up
        </el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col>
        <div class="grid-content">
          Already have an account?
          <router-link to="/login">Sign in</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  ElForm,
  ElFormItem,
  ElButton,
  ElRow,
  ElCol,
  ElInput,
} from "element-plus";

export default {
  name: "SignUpFormComponent",
  components: {
    ElForm,
    ElFormItem,
    ElButton,
    ElRow,
    ElCol,
    ElInput,
  },
  data() {
    return {
      form: {
        name: "",
        password: "",
        checkPassword: "",
        email: "",
      },
      rules: {
        name: [
          {
            required: true,
            whitespace: true,
            message: "Please input your login",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input the password",
            trigger: "blur",
          },
        ],
        checkPassword: [
          {
            validator: this.validateConfirm,
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleData() {
      this.$emit("save-data", this.form);
    },

    validateConfirm(rule, value, callback) {
      if (value === "" && this.form.password.length) {
        callback(new Error("Please input the password again"));
      } else if (value !== this.form.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    },
  },
};
</script>

<style scoped>
.grid-content {
  font-size: 14px;
}
</style>
