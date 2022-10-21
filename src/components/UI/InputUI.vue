<template>
  <input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
export default {
  name: "input-ui",
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
  border: 2px solid rgb(93, 115, 216);
  border-radius: 5px;
  margin: 1rem 3rem !important;
}
</style>
