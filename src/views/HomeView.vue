<template>
  <div class="home">
    <h1>Home Page Menu</h1>
  </div>
  <div class="block text-center">
    <el-carousel type="card" height="50vh">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
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
</style>

<script>
import { ElCarousel, ElCarouselItem } from "element-plus";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    ElCarousel,
    ElCarouselItem,
  },
};
</script>
