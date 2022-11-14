<template>
  <template v-if="error">
    <el-row>
      <el-col>
        <el-alert :title="error" type="error" show-icon />
      </el-col>
    </el-row>
  </template>
</template>

<script>
import { ElRow, ElCol, ElAlert } from "element-plus";
import { mapGetters } from "vuex";

export default {
  name: "LoginErrorComponent",
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
