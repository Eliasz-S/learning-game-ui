<template>
  <template v-if="error">
    <el-row v-for="(errorList, idx) in error" :key="idx">
      <el-col v-for="(errorMsg, idx) in errorList" :key="idx">
        <el-alert :title="errorMsg" type="error" show-icon />
      </el-col>
    </el-row>
  </template>
</template>

<script>
import { ElRow, ElCol, ElAlert } from "element-plus";
import { mapGetters } from "vuex";

export default {
  name: "UserDataErrorComponent",
  components: {
    ElRow,
    ElCol,
    ElAlert,
  },
  computed: {
    ...mapGetters("user", ["error"]),
  },
};
</script>
