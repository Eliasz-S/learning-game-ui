<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-position="top"
      label-width="small"
      status-icon
      @keydown.enter="handleSubmit"
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
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item>
            <el-button
              type="success"
              size="large"
              style="width: 100%"
              @click="handleSubmit"
            >
              Sign up
            </el-button>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-button
              type="info"
              size="large"
              style="width: 100%"
              @click="handleReset"
            >
              Reset
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
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
    handleSubmit() {
      if (!this.$refs.formRef) return;
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.$emit("save-data", this.form);
          this.$refs.formRef.resetFields(); // очистка формы после передачи данных из формы,
          // потом можно будет убрать/заменить на редирект
          this.$swal.fire({
            title: "Good job!",
            text: "You are a member now!",
            icon: "success",
            allowEnterKey: false,
          }); // тест sweetalerts2
        } else {
          return false;
        }
      });
    },

    handleReset() {
      if (!this.$refs.formRef) return;
      this.$refs.formRef.resetFields();
      this.$swal.fire({
        title: "Done!",
        text: "All fields have been reset!",
        icon: "info",
      }); // тест sweetalerts2
    },

    validateConfirm(rule, value, callback) {
      if (value === "" && this.form.password.length) {
        callback(new Error("Please input the password again"));
      } else if (value !== this.form.password && this.form.password.length) {
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
