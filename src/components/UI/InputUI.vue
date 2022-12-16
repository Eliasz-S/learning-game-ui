<template>
  <el-input @input="updateInput" class="input" />
</template>

<script>
import { ElInput } from "element-plus";
export default {
  name: "input-ui",
  components: {
    ElInput,
  },
  props: {
    value: {
      type: [String, Number],
    },
  },
  methods: {
    updateInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.input {
  margin-bottom: 10px;
  padding: 3px 10px;
  border-radius: 5px;
  margin: 1rem 3rem !important;
}
</style>
