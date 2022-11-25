<template>
  <template v-if="error">
    <el-row justify="center" v-for="(errorList, idx) in error" :key="idx">
      <el-col :span="8">
        <el-alert
          v-for="(errorMsg, idx) in errorList"
          :key="idx"
          :title="errorMsg"
          type="error"
          show-icon
        />
      </el-col>
    </el-row>
  </template>
</template>

<script>
import { ElRow, ElCol, ElAlert } from "element-plus";
import { mapGetters } from "vuex";

export default {
  name: "CreatorErrorComponent",
  components: {
    ElRow,
    ElCol,
    ElAlert,
  },
  computed: {
    ...mapGetters("creator", ["error"]),
  },
};
</script>
