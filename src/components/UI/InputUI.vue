<template>
  <el-input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
import { ElInput } from "element-plus";
export default {
  name: "input-ui",
  components: {
    ElInput,
  },
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
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
