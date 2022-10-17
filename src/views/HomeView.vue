<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <router-link to="/"
      ><el-menu-item index="1">GAME</el-menu-item></router-link
    >
    <router-link to="/login"
      ><el-menu-item index="2">LOGIN</el-menu-item></router-link
    >
    <router-link to="/sign-up"
      ><el-menu-item index="3">SIGN UP</el-menu-item></router-link
    >
    <router-link to="/profile"
      ><el-menu-item index="4">PROFILE</el-menu-item></router-link
    >
  </el-menu>
  <el-carousel type="card" height="50vh">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.flex-grow {
  flex-grow: 1;
}
</style>

<script>
import { ElCarousel, ElCarouselItem, ElMenu, ElMenuItem } from "element-plus";

export default {
  name: "HomeView",
  components: {
    ElCarousel,
    ElCarouselItem,
    ElMenu,
    ElMenuItem,
  },
};
</script>
