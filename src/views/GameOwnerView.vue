<template>
  <div class="game">
    <div class="screen">
      <img
        class="bg_objects bg_objects__square"
        src="../../public/svg/square.svg"
        width="500"
        height="500"
      />
      <img
        class="bg_objects bg_objects__circle"
        src="../../public/svg/circle.svg"
        width="500"
        height="500"
      />
      <div class="content">
        <LoadingUi v-if="loading" />
        <router-view
          v-else
          :users="users"
          :pin="lobby.pincode.toString()"
          :gameAnswers="gameAnswers"
          :gameQuestions="gameQuestions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/axios";
import Echo from "@/utils/echo";
import LoadingUi from "@/components/UI/LoadingUI.vue";

export default {
  name: "GameOwnerView",
  components: {
    LoadingUi,
  },
  data() {
    return {
      gameQuestions: [
        {
          id: "1",
          text: "First question",
          question_type_id: "1",
          time_limit: "30",
        },
        {
          id: "1",
          text: "Second question",
          question_type_id: "1",
          time_limit: "10",
        },
      ],
      gameAnswers: [
        {
          id: "1",
          question_id: "1",
          text: "Some answer 1",
          is_correct: "1",
        },
        {
          id: "2",
          question_id: "1",
          text: "Some answer 2",
          is_correct: "0",
        },
        {
          id: "3",
          question_id: "1",
          text: "Some answer 3",
          is_correct: "0",
        },
        {
          id: "4",
          question_id: "1",
          text: "Some answer 4",
          is_correct: "0",
        },
        {
          id: "5",
          question_id: "2",
          text: "Some answer 1",
          is_correct: "0",
        },
        {
          id: "6",
          question_id: "2",
          text: "Some answer 2",
          is_correct: "1",
        },
      ],
      loading: true,
      lobby: {},
      lobbyChannel: null,
      pin: "",
      users: [],
    };
  },

  created() {
    this.createLobby();
  },

  beforeUnmount() {
    api.post(`lobby/close/${this.lobby.id}`);
  },

  methods: {
    async createLobby() {
      try {
        this.loading = true;
        const response = await api.post(`lobby/${this.$route.params.gameId}`);
        if (response.status === 201) {
          this.lobby = response.data;
          this.subscribeToChannel();
        }
      } catch (e) {
        console.log("error", e);
      } finally {
        this.loading = false;
      }
    },
    subscribeToChannel() {
      this.lobbyChannel = Echo.join(`lobby.${this.lobby.id}`);

      this.lobbyChannel
        .joining((user) => {
          console.log("joining", user);
        })
        .leaving((user) => {
          console.log("leaving", user);
        })
        .error((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.content {
  z-index: 100;
}
.screen {
  background-color: #5626a3;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 0%;
  height: 100vh;
}
.screen_main {
  z-index: 999;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.screen_footer {
  z-index: 999;
  justify-self: flex-end;
  flex: 0 0 auto;
}
.input_pin {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
}
.input_pin_child {
  text-align: center;
  margin: 5px 0;
  padding: 5px 3px;
  font-size: 1.2em;
}
button.input_pin_child {
  background-color: #222;
  color: #fff;
  cursor: pointer;
}
input.input_pin_child {
  border: 2px solid #c3c3c3;
  border-radius: 5px;
}
.screen_footer__info {
  margin: 20px 0 40px 0;
}
.screen_footer__info > a {
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  color: #6cd36c;
  font-family: cursive;
  font-size: 13px;
}
.bg_objects {
  z-index: 0;
  position: fixed;
  transform: rotate(45deg);
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}
.bg_objects__square {
  animation-name: moveSquare;
}
.bg_objects__circle {
  animation-name: moveCircle;
}
@keyframes moveSquare {
  0% {
    left: 0px;
    top: -120px;
  }
  100% {
    left: -180px;
    top: -50px;
  }
}
@keyframes moveCircle {
  0% {
    right: -180px;
    bottom: -180px;
  }
  100% {
    right: -80px;
    bottom: -140px;
  }
}
@media only screen and (max-width: 900px) {
  .bg_objects {
    display: none;
  }
}
</style>
