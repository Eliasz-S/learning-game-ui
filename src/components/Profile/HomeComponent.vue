<template>
  <section class="section">
    <div class="grid">
      <div class="sidebar">
        <div class="user_info">
          <p class="profile_info_t">
            <span>Profile</span>
          </p>
          <el-button
            v-if="!userData.name"
            @click="dialogTableVisible = !dialogTableVisible"
          >
            Add name &nbsp; <font-awesome-icon icon="fa-solid fa-plus" />
          </el-button>
          <p v-else class="profile_info_p">
            <span>Name: </span>{{ userData.name }}
          </p>
          <SetNameDialog
            v-model="dialogTableVisible"
            @handle-submit="handleChangeName"
            @handle-close="handleDialogClose"
          />
          <p class="profile_info_p"><span>Email: </span>{{ userData.login }}</p>
          <button @click="$router.push('/profile/settings')" class="change_btn">
            <font-awesome-icon icon="fa-solid fa-user-pen" />
            Edit profile
          </button>
        </div>
      </div>
      <div class="main">
        <div class="events">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in events" :key="item">
              <img
                style="height: inherit"
                v-bind:src="item.image"
                alt="event"
              />
              <h3>{{ item.id }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="creater">
        <div class="dashed" @click="$router.push('/test-creator')">
          <h2>
            <font-awesome-icon icon="fa-solid fa-folder-plus" />
            Create the game
          </h2>
        </div>
      </div>
      <div class="calendar">
        <el-calendar v-model="value" />
      </div>
      <div class="games">
        <div class="games_title">
          <h3>Last games</h3>
          <div class="cards">
            <div class="card" v-for="game in searchedGames" :key="game.id">
              <div class="front">
                <h4>{{ game.title }}</h4>
                <div class="elements">
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
              <div class="back">
                <div class="info">
                  <h4>Plays: 0 times</h4>
                  <h4>Questions: {{ game.questions }}</h4>
                </div>
                <div class="elements">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SetNameDialog from "@/components/Profile/SetNameDialogComponent.vue";
import { mapActions, mapGetters } from "vuex";
import { ElButton, ElCarousel, ElCarouselItem, ElCalendar } from "element-plus";
import { ref } from "vue";
import { api } from "@/utils/axios";

export default {
  name: "HomeComponent",
  components: {
    SetNameDialog,
    ElButton,
    ElCarousel,
    ElCarouselItem,
    ElCalendar,
  },
  data() {
    return {
      games: [],
      value: ref(new Date()),
      dialogTableVisible: false,
      events: [
        {
          id: 1,
          image: require("../../../public/img/education.png"),
        },
        {
          id: 2,
          image: require("../../../public/img/education2.png"),
        },
      ],
    };
  },
  computed: {
    ...mapGetters("user", ["userData"]),
    searchedGames() {
      return this.games.slice(-3);
    },
  },
  created() {
    this.fetchGames();
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    handleChangeName(payload) {
      this.name = payload.name;
      this.updateUser({ name: this.name });
      this.handleDialogClose();
    },
    handleDialogClose() {
      this.dialogTableVisible = false;
    },
    async fetchGames() {
      const response = await api.get("games/user");
      this.games = response.data;
    },
  },
};
</script>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  cursor: pointer;
  width: 150px;
  height: 260px;
  margin: 20px;
  transform-style: preserve-3d;
  transition: 0.3s ease;
  position: relative;
}
.elements > span {
  position: absolute;
}
span.circle {
  top: 10px;
  left: 10px;
  color: yellow;
}
span.square {
  top: 10px;
  right: 10px;
  color: rgb(15, 247, 27);
}
span.rhombus {
  bottom: 10px;
  left: 10px;
  color: #00c4ff;
}
span.triangle {
  bottom: 10px;
  right: 10px;
  color: rgb(245, 52, 52);
  transform: rotate(-90deg);
}
.front,
.back {
  vertical-align: middle;
  display: grid;
  align-items: center;
  align-content: center;
  width: 150px;
  height: 260px;
}
.back {
  text-align: center;
  font-size: 13px;
  border-radius: 7px;
  box-shadow: 5px 4px 12px -4px #9976d7;
  border: 2px solid #ffffff6b;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  color: #673ab7;
}
.front {
  text-align: center;
  font-size: 13px;
  border-radius: 7px;
  box-shadow: 5px 4px 12px -4px #9976d7;
  border: 2px solid #ffffff6b;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  background: #673ab7;
  color: #fff;
}
.card:hover {
  transform: rotateY(180deg);
}
.card:hover .back {
  z-index: 5;
  transform: rotateY(-180deg);
}

.change_btn {
  color: #fff;
  background: #673ab7;
  border: 1px solid #673ab7;
  border-radius: 7px;
  padding: 0.4rem 1rem;
  box-shadow: 5px 5px 10px -3px #3c1e72d1;
  transition: 0.3s ease;
  cursor: pointer;
}
.change_btn:hover {
  color: #673ab7;
  background: #fff;
}
p.profile_info_p > span {
  display: block;
  font-weight: 700;
  color: #673ab7;
}
p.profile_info_p {
  margin-bottom: 10px;
}
p.profile_info_t > span {
  display: block;
  font-weight: 700;
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
}
.el-carousel {
  border-radius: 7px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  border-radius: 7px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  border-radius: 7px;
}
.user_info {
  padding: 1rem 2rem;
  margin-right: 40px;
  color: #ffffff;
  border-radius: 7px;
  min-height: 267px;
  font-size: 14px;
  text-align: left;
  box-shadow: 5px 5px 10px #ffffff0d, -5px -5px 10px #c7a3e71f;
  min-width: -moz-fit-content;
  min-width: fit-content;
}
section.section {
  max-width: 1800px;
  margin: 0 auto;
  padding: 80px 0;
}
.grid {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  grid-template-areas: "sidebar main main main" "creater creater creater calendar" "games games games .";
  padding: 0 40px;
  grid-gap: 40px 0;
}
.games_title > h3 {
  position: relative;
  font-family: "Paytone One";
  font-size: 25px;
  margin-left: 60px;
}
.games_title > h3:after {
  content: "";
  background: #09f309;
  height: 2px;
  width: 50px;
  position: absolute;
  top: 20px;
  left: -60px;
  border-radius: 7px;
}
.calendar {
  grid-area: calendar;
  color: #222;
}
.games {
  grid-area: games;
  color: #fff;
  text-align: left;
  margin: 20px 40px;
}
.el-calendar {
  border-radius: 7px;
}
@media screen and (max-width: 970px) and (min-width: 630px) {
  .grid {
    grid-template-areas: "sidebar creater creater creater" "main main main main" "calendar games games games";
  }
  .user_info {
    min-height: 200px;
  }
  .creater {
    margin-left: 80px !important;
    margin-right: 0 !important;
  }
}
@media screen and (max-width: 810px) {
  .grid {
    grid-template-areas: "sidebar creater creater creater" "main main main main" "games games games games";
  }
  .calendar {
    display: none;
  }
}
@media screen and (max-width: 630px) {
  .grid {
    grid-template-areas: "sidebar sidebar sidebar sidebar" "creater creater creater creater" "main main main main" "games games games games";
  }
  .user_info,
  .games,
  .creater {
    margin: 0 !important;
  }
}
.main {
  grid-area: main;
}
.creater {
  grid-area: creater;
  background: #fff;
  color: #673ab7;
  border-radius: 7px;
  min-height: 200px;
  align-items: center;
  display: inherit;
  cursor: pointer;
  margin-right: 40px;
}
.dashed {
  height: -webkit-fill-available;
  align-items: center;
  display: inherit;
  margin: 15px;
  border: 3px dashed #787878c2;
  border-radius: 4px;
}
.sidebar {
  grid-area: sidebar;
}
</style>
