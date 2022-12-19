<template>
  <el-dialog
    :dialogTableVisible="dialogTableVisible"
    @click="showDialog"
    width="40%"
  >
    <template #header>
      <el-form class="set-name-dialog">
        <el-form-item>
          <h2>Edit your name</h2>
        </el-form-item>
        <el-form-item>
          <p>Please enter your name below</p>
        </el-form-item>
        <el-form-item>
          <el-input @keydown.enter.prevent="handleSubmit" v-model.trim="name" />
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-row :gutter="20">
        <el-col :span="6"><div /></el-col>
        <el-col :span="6">
          <el-button style="width: 100%" @click="handleDialogClose">
            Cancel
          </el-button>
        </el-col>
        <el-col :span="6">
          <el-button
            type="success"
            style="width: 100%"
            @click="handleSubmit"
            :disabled="!name"
          >
            Done
          </el-button>
        </el-col>
        <el-col :span="6"><div /></el-col>
      </el-row>
    </template>
  </el-dialog>
</template>

<script>
import {
  ElDialog,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElButton,
  ElInput,
} from "element-plus";

export default {
  name: "SetNameDialog",
  components: {
    ElDialog,
    ElForm,
    ElFormItem,
    ElRow,
    ElCol,
    ElButton,
    ElInput,
  },
  model: {
    prop: "dialogTableVisible",
    event: "show-dialog",
  },
  props: {
    dialogTableVisible: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    showDialog() {
      this.$emit("show-dialog", true);
    },
    handleSubmit() {
      this.$emit("handle-submit", {
        name: this.name,
      });
    },
    handleDialogClose() {
      this.$emit("handle-close");
    },
  },
};
</script>

<style scoped>
.set-name-dialog {
  color: black;
}
</style>
