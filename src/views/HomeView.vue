<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <img
          class="logo_img"
          src="../../public/img/maven-logo.png"
          alt="logo"
        />
      </div>
      <div class="menu">
        <el-button
          v-if="userData"
          type="success"
          size="large"
          @click="redirectToProfile"
        >
          <font-awesome-icon icon="fa-solid fa-user" />
          &nbsp; &nbsp; {{ userData.login }}
        </el-button>

        <el-button
          class="btn_in"
          v-if="!userData"
          size="large"
          @click="redirectToLogin"
        >
          Sign in
        </el-button>
        <el-button
          v-if="!userData"
          class="btn_up"
          type="success"
          size="large"
          @click="redirectToSignUp"
        >
          Sign up
        </el-button>
      </div>
    </div>
    <div class="banner">
      <div class="banner_flex">
        <div class="banner_text">
          <div class="banner_title">
            <h2>Each education should be fun!</h2>
            <el-button class="btn_white" size="large" @click="redirectToGame">
              Let`s play!
            </el-button>
          </div>
        </div>
        <img
          class="banner_img"
          src="../../public/img/mobile.png"
          alt="smartphone"
        />
      </div>
    </div>
  </div>
  <div class="content">
    <section class="section">
      <div class="forms">
        <div class="forms_title">Choose your correct answer!</div>
        <div class="forms_img">
          <span class="circle">
            <font-awesome-icon icon="fa-solid fa-circle" />
          </span>
          <span class="square">
            <font-awesome-icon icon="fa-solid fa-square" />
          </span>
          <span class="triangle">
            <font-awesome-icon icon="fa-solid fa-play" />
          </span>
          <span class="rhombus">
            <font-awesome-icon icon="fa-solid fa-diamond" />
          </span>
        </div>
      </div>
    </section>
    <section class="section carousel">
      <div class="bg_img">
        <img
          class="squiggly_img"
          src="../../public/img/squiggly.png"
          alt="squiggly"
        />
      </div>
      <div class="section_title">
        <h2>How to create your own Maven?</h2>
      </div>
      <el-carousel class="carousel" type="card" :interval="9000" height="60vh">
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
    </section>
    <section class="section steps">
      <div class="torus">
        <img class="torus_img" src="../../public/img/torus.png" alt="" />
      </div>
      <div class="section_flex">
        <div style="height: 350px">
          <el-steps direction="vertical">
            <el-step title="Sign up your account"></el-step>
            <el-step title="Create your game"></el-step>
            <el-step title="Click start the game"></el-step>
            <el-step title="Share your lobby pin with your friends"></el-step>
            <el-step title="Enjoy your game!"></el-step>
          </el-steps>
        </div>
        <img
          class="education_img"
          src="../../public/img/education.png"
          alt=""
        />
      </div>
    </section>
    <section class="section login">
      <div class="bg_img">
        <img class="entry_img" src="../../public/img/entry.png" alt="entry" />
      </div>
      <div class="section_title">
        <h2>Log in to your account</h2>
      </div>
      <div class="login-box">
        <h2>Login</h2>
        <form ref="formRef" :model="form" @keydown.enter="handleLogin">
          <LoginErrorComponent />
          <div class="user-box">
            <input v-model="form.login" type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              v-model="form.password"
              type="password"
              name=""
              required=""
            />
            <label>Password</label>
          </div>
          <el-form-item>
            <div class="frgt_pass">
              Forgot password?
              <router-link class="form_btn" to="/auth/forgot-password">
                Reset your password
              </router-link>
            </div>
          </el-form-item>
          <a @click="handleLogin" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
          <el-row>
            <el-col>
              <div class="grid-content">
                Don't have an account?
                <router-link class="form_btn" to="/auth/sign-up">
                  Sign up
                </router-link>
              </div>
            </el-col>
          </el-row>
        </form>
      </div>
    </section>
    <section class="section footer">
      <div class="section_flex between">
        <img src="../../public/img/maven-logo.png" alt="logo" />
        <h2 class="desc_txt">
          &copy;2022 This application was created for diplom project by
          GeekBrains University students.
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
import LoginErrorComponent from "@/components/Errors/LoginErrorComponent.vue";
import {
  ElCarousel,
  ElCarouselItem,
  ElButton,
  ElSteps,
  ElStep,
} from "element-plus";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "HomeView",
  components: {
    LoginErrorComponent,
    ElCarousel,
    ElCarouselItem,
    ElButton,
    ElSteps,
    ElStep,
  },
  computed: {
    ...mapGetters("user", ["userData"]),
  },
  created() {
    this.setError(null);
  },
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations("user", ["setError"]),

    ...mapActions("user", ["login"]),

    handleLogin() {
      this.setError(null);
      this.login(this.form);
    },
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
.frgt_pass,
.frgt_pass > a {
  font-size: 12px !important;
}
.grid-content {
  margin-top: 40px;
}
a.form_btn {
  font-size: 12px;
  text-transform: capitalize !important;
  letter-spacing: normal !important;
  cursor: pointer !important;
  display: inline !important;
  white-space: pre;
  color: #317421 !important;
}
a.form_btn:hover {
  background: none !important;
  box-shadow: none !important;
  color: #00ff37 !important;
}
section.section.footer {
  padding: 40px 0;
  margin: 100px auto 0 auto;
}
h2.desc_txt {
  font-size: 10px;
  line-height: 50px;
}
.section_flex.between > img {
  height: 50px;
}
.between {
  justify-content: space-between !important;
}
.carousel {
  margin: 80px 0;
}
.section_flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
img.education_img {
  height: 350px;
}
img.torus_img {
  height: 390px;
  position: absolute;
  left: 20px;
  top: 40px;
}
img.squiggly_img {
  height: 500px;
  position: absolute;
  right: 20px;
  top: -53px;
}
.section_title > h2:after {
  content: "";
  background: #09f309;
  height: 4px;
  width: 160px;
  position: absolute;
  top: 20px;
  left: 0;
  border-radius: 7px;
}
.section_title > h2 {
  font-family: "Paytone One";
  font-size: 30px;
  text-align: left;
  padding-left: 180px;
}
.section_title {
  margin: 40px 0 20px 0;
  position: relative;
}
.forms {
  height: 150px;
  position: relative;
}
.triangle > svg {
  color: #b92020;
  position: absolute;
  top: 80px;
  left: 46%;
  font-size: 50px;
  animation: loading-animate-triangle 8s infinite;
  transform: rotate(-90deg);
}
@keyframes loading-animate-triangle {
  0% {
    left: 48%;
    font-size: 0px;
    color: #b9202000;
  }
  25% {
    left: 36%;
    font-size: 25px;
    color: #b920205b;
  }
  50% {
    left: 46%;
    font-size: 70px;
    color: #b92020;
  }
  75% {
    left: 60%;
    font-size: 25px;
    color: #b920205b;
  }
  100% {
    left: 48%;
    font-size: 0px;
    color: #b9202000;
  }
}
.circle > svg {
  color: #ffec07;
  position: absolute;
  top: 80px;
  left: 46%;
  font-size: 50px;
  animation: loading-animate-circle 8s infinite;
}
@keyframes loading-animate-circle {
  0% {
    left: 46%;
    font-size: 70px;
    color: #ffc107;
  }
  25% {
    left: 60%;
    font-size: 25px;
    color: #ffc10741;
  }
  50% {
    left: 48%;
    font-size: 0px;
    color: #ffc10700;
  }
  75% {
    left: 36%;
    font-size: 25px;
    color: #ffc10741;
  }
  100% {
    left: 46%;
    font-size: 70px;
    color: #ffc107;
  }
}
.rhombus > svg {
  color: #3f51b5;
  position: absolute;
  top: 80px;
  left: 46%;
  font-size: 50px;
  animation: loading-animate-rhombus 8s infinite;
}
@keyframes loading-animate-rhombus {
  0% {
    left: 36%;
    font-size: 25px;
    color: #3f51b55e;
  }
  25% {
    left: 46%;
    font-size: 70px;
    color: #3f51b5;
  }
  50% {
    left: 60%;
    font-size: 25px;
    color: #3f51b55e;
  }
  75% {
    left: 48%;
    font-size: 0px;
    color: #3f51b500;
  }
  100% {
    left: 36%;
    font-size: 25px;
    color: #3f51b55e;
  }
}
.square > svg {
  color: #5eb53f;
  position: absolute;
  top: 80px;
  left: 46%;
  font-size: 50px;
  animation: loading-animate-square 8s infinite;
}
@keyframes loading-animate-square {
  0% {
    left: 60%;
    font-size: 25px;
    color: #5eb53f62;
  }
  25% {
    left: 48%;
    font-size: 0px;
    color: #5eb53f00;
  }
  50% {
    left: 36%;
    font-size: 25px;
    color: #5eb53f62;
  }
  75% {
    left: 46%;
    font-size: 70px;
    color: #5eb53f;
  }
  100% {
    left: 60%;
    font-size: 25px;
    color: #5eb53f62;
  }
}
.forms_title {
  margin-top: 30px;
  font-size: 25px;
  font-family: "Paytone One";
}
section.section {
  padding: 40px 80px;
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
}
.content {
  background: #211b2a;
  color: #fff;
}
button.btn_white {
  background: #ffffff;
  color: #673ab7;
  font-weight: 800;
  font-size: 35px;
  border: 1px solid #ffffff;
  border-radius: 7px;
  box-shadow: 5px 4px 10px -4px #35166c;
  transition: 0.6s ease;
  height: fit-content;
  position: absolute;
  left: 39px;
}
button.btn_white:hover {
  background: #482091;
  border: 1px solid #482091;
  color: #fff;
  box-shadow: 5px 4px 10px -4px #210e42;
}
.main {
  background: linear-gradient(
    109.6deg,
    rgb(157, 75, 199) 11.2%,
    rgb(119, 81, 204) 83.1%
  );
  height: 490px;
  overflow: hidden;
}
.banner_flex {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.banner_title {
  position: absolute;
  left: 20px;
  top: 103px;
  z-index: 900;
}
img.banner_img {
  height: 490px;
  position: absolute;
  right: 0px;
  top: 0px;
}
.banner_title > h2 {
  color: #fff;
  font-family: "Paytone One", sans-serif;
  font-size: 77px;
  padding: 20px 40px;
}
@media screen and (max-width: 900px) {
  .banner_title > h2 {
    font-size: 70px;
  }
}
@media screen and (min-width: 1800px) {
  img.banner_img {
    right: 20%;
  }
}
.forms_title:after {
  content: "";
  height: 2px;
  width: 167px;
  background: #27ff00;
  position: absolute;
  left: 44%;
  top: 40px;
  border-radius: 7px;
}
@media screen and (min-width: 1800px) {
  img.squiggly_img {
    height: 900px;
    top: -222px;
    right: -200px;
  }
  img.torus_img {
    height: 534px;
    top: 46px;
    left: -258px;
  }
  img.education_img {
    height: 476px;
    margin-left: 192px;
  }
}
@media screen and (max-width: 650px) {
  .banner_title > h2 {
    font-size: 50px;
  }
  .section_title > h2:after {
    width: 100px;
  }
  .section_title > h2 {
    padding-left: 120px;
  }
}
@media screen and (max-width: 600px) {
  .banner_title > h2 {
    font-size: 30px;
  }
  .header,
  .section {
    padding: 20px 20px !important;
  }
}
.logo > img.logo_img {
  z-index: 999;
  position: relative;
  height: 42px;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
  z-index: 999;
  position: relative;
}
button.btn_up {
  background: transparent;
  color: #fff;
  border: 2px solid #00ff08;
  font-size: 13px;
  margin: 0 !important;
  transition: 0.3s ease;
}
button.btn_in {
  background: transparent;
  color: #fff;
  border: none;
  font-size: 13px;
  transition: 0.3s ease;
}
button.btn_in:hover {
  color: #c1c1c1;
}
button.btn_up:hover {
  color: #c1c1c1;
  border: 1px solid #c1c1c1;
}
.el-carousel__item h3 {
  color: blueviolet;
  font-style: italic;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: rgb(255 255 255 / 62%);
  border-radius: 7px;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: rgb(255 255 255 / 62%);
  border-radius: 7px;
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

.login-box {
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgb(0 0 0 / 60%);
  border-radius: 10px;
  margin: 40px auto;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 91%;
  padding: 10px 15px;
  border-radius: 7px;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -30px;
  left: 0;
  color: #33ff00;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #33ff00;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #33ff00;
  color: #fff;
  border-radius: 5px;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #33ff00);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #33ff00);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #33ff00);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #33ff00);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
img.entry_img {
  position: absolute;
  height: 650px;
  top: 121px;
  right: 122px;
}
@media screen and (max-width: 1400px) {
  img.entry_img {
    height: 450px;
    top: 207px;
    right: 0;
    opacity: 0.2;
  }
  .login-box {
    width: 280px;
  }
}
@media screen and (max-width: 500px) {
  img.education_img {
    height: 236px;
  }
  img.torus_img {
    height: 200px;
  }
  img.entry_img {
    opacity: 0.2;
  }
}
</style>
