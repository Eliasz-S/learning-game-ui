<template>
  <el-row justify="space-between" class="settings-header">
    <el-col :span="4.5">
      <h4>User information</h4>
    </el-col>
    <el-col :span="4">
      <el-button type="success" @click="handleChangeName" style="width: 100%">
        Save
      </el-button>
    </el-col>
  </el-row>
  <el-form label-position="top" label-width="small">
    <el-row>
      <el-col :span="12">
        <el-form-item label="Login">
          <el-input disabled :value="userData?.login" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="Name">
          <el-input v-model="name" :value="userData?.name" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="Email">
          <el-input disabled :value="userData?.email" />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import {
  ElRow,
  ElForm,
  ElFormItem,
  ElInput,
  ElCol,
  ElButton,
} from "element-plus";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ChangeUserDataComponent",
  components: {
    ElRow,
    ElForm,
    ElFormItem,
    ElInput,
    ElCol,
    ElButton,
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters("user", ["userData"]),
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    handleChangeName() {
      this.updateUser({ name: this.name });
    },
  },
};
</script>

<style scoped>
.settings-header {
  align-items: center;
  padding: 0.5rem 0rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(242, 242, 242);
}
</style>
