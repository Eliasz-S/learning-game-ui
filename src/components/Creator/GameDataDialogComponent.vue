<template>
  <el-dialog
    :dialogTableVisible="dialogTableVisible"
    @click="showDialog"
    width="50%"
    :show-close="false"
  >
    <template #header>
      <el-form label-position="top" @keydown.enter.prevent="handleSubmit">
        <el-form-item>
          <h1>Maven summary</h1>
        </el-form-item>
        <el-form-item label="Game title">
          <el-input v-model="game.title" />
        </el-form-item>
        <el-form-item label="Game description (optional)">
          <el-input
            v-model="game.description"
            type="textarea"
            :autosize="{ minRows: 6 }"
            resize="none"
          />
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-row :gutter="20" justify="center">
        <el-col :span="6">
          <el-button style="width: 100%" @click="handleDialogClose">
            Cancel
          </el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="success" style="width: 100%" @click="handleSubmit">
            Done
          </el-button>
        </el-col>
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
    gameData: {
      type: Object,
    },
  },
  data() {
    return {
      game: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    showDialog() {
      this.$emit("show-dialog", true);
    },
    handleSubmit() {
      this.$emit("handle-submit", this.game);
      this.handleDialogClose();
    },
    handleDialogClose() {
      this.$emit("handle-close");
    },
  },
  watch: {
    gameData(value) {
      Object.assign(this.game, value);
    },
  },
};
</script>
