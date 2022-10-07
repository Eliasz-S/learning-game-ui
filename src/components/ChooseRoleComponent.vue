<template>
  <div class="choose-role">
    <div @click="handleClick" class="square">Teacher</div>
    <div @click="handleClick" class="square">Student</div>
  </div>
</template>

<script>
export default {
  name: "ChooseRoleComponent",
  data() {
    return {
      role: this.roleChosen,
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
