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
        <div class="dashed">
          <h2>
            <font-awesome-icon icon="fa-solid fa-folder-plus" />
            Create the game
          </h2>
        </div>
      </div>
      <div class="calendar">
        <el-calendar v-model="value" />
      </div>
    </div>
  </section>
</template>

<script>
import SetNameDialog from "@/components/Profile/SetNameDialogComponent.vue";
import { mapActions, mapGetters } from "vuex";
import { ElButton, ElCarousel, ElCarouselItem, ElCalendar } from "element-plus";
import { ref } from "vue";

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
  },
};
</script>
<style scoped>
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
  color: #673ab7;
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
  background: #fff;
  margin-right: 40px;
  color: #242424;
  border: 1px solid #fff3;
  border-radius: 7px;
  min-height: 267px;
  font-size: 14px;
  text-align: left;
  box-shadow: 5px 5px 10px #ffffff75, -5px -5px 10px #c7a3e72e;
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
  grid-template-areas: "sidebar main main main" "creater creater creater calendar";
  padding: 0 40px;
  grid-gap: 40px 0;
}
.calendar {
  grid-area: calendar;
  color: #222;
}
.el-calendar {
  border-radius: 7px;
}
@media screen and (max-width: 970px) {
  .grid {
    grid-template-areas: "sidebar creater creater creater" "main main main main" "calendar calendar . .";
  }
  .user_info {
    min-height: 200px;
  }
  .creater {
    margin-left: 80px !important;
    margin-right: 0 !important;
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
