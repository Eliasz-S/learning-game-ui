<template>
  <div class="auth">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AuthView",
};
</script>

<style scoped>
.auth {
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
  color: inherit;
  padding: 2rem;
  position: absolute;
  min-width: 23rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
