<template>
  <div class="choose-role">
    <div
      v-for="(role, idx) in roles"
      :key="idx"
      @click="handleClick"
      class="square"
    >
      {{ role }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseRoleComponent",
  data() {
    return {
      roles: ["Teacher", "Student"],
    };
  },
  methods: {
    handleClick() {
      this.handleLogin();
    },
  },
  props: ["handleLogin"],
};
</script>

<style scoped>
.choose-role {
  display: flex;
  flex-direction: row;
}
.square {
  border: solid 2px black;
  width: 12rem;
  height: 12rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
</style>
