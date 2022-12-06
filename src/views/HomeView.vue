<template>
  <el-header class="home-top-menu">
    <el-row class="top-menu-contents" justify="space-between">
      <el-row class="home-logo">
        <el-col>
          <h1>Maven</h1>
        </el-col>
      </el-row>
      <el-row class="top-menu-buttons" justify="space-around">
        <el-button size="large" type="primary" @click="redirectToGame">
          Play
        </el-button>
        <el-row v-if="userData">
          <el-button type="success" size="large" @click="redirectToProfile">
            <font-awesome-icon icon="fa-solid fa-user" />
            &nbsp; &nbsp; {{ userData.login }}
          </el-button>
        </el-row>
        <el-row v-else>
          <el-button type="success" size="large" @click="redirectToSignUp">
            Sign up
          </el-button>
          <el-button size="large" @click="redirectToLogin">Log in</el-button>
        </el-row>
      </el-row>
    </el-row>
  </el-header>
  <el-carousel type="card" :interval="9000" height="60vh">
    <el-carousel-item>
      <h3>Welcome to our wonderful world!</h3>
    </el-carousel-item>
    <el-carousel-item>
      <h3>Create your own tests!</h3>
    </el-carousel-item>
    <el-carousel-item>
      <h3>Each education should be fun!</h3>
    </el-carousel-item>
    <el-carousel-item>
      <h3>Our mission</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {
  ElCarousel,
  ElCarouselItem,
  ElHeader,
  ElRow,
  ElCol,
  ElButton,
} from "element-plus";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    ElCarousel,
    ElCarouselItem,
    ElHeader,
    ElRow,
    ElCol,
    ElButton,
  },
  computed: {
    ...mapGetters("user", ["userData"]),
  },
  methods: {
    redirectToSignUp() {
      this.$router.push("/auth/sign-up");
    },
    redirectToLogin() {
      this.$router.push("/auth/login");
    },
    redirectToProfile() {
      this.$router.push("/profile/home");
    },
    redirectToGame() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: blueviolet;
  font-style: italic;
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
.home-logo {
  cursor: pointer;
  color: blueviolet;
}
.home-top-menu {
  background-color: whitesmoke;
  margin-bottom: 2rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
  display: flex;
  align-items: center;
}
.top-menu-contents {
  width: 100%;
}
.top-menu-buttons {
  width: 20%;
  align-items: center;
}
</style>
