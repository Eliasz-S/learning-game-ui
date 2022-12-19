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
          :lobbyId="lobby.id"
          :pin="lobby.pincode"
          :question="currentQuestion"
          :lobby-channel="lobbyChannel"
          :is-last-question="isLastQuestion"
          :answer-distribution="answerDistributions[currentQuestionNumber - 1]"
          @next="toNextQuestion"
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
      currentQuestionNumber: 0,
      loading: true,
      lobby: {},
      lobbyChannel: null,
      pin: "",
      questions: [],
      users: [],
      userAnswers: [],
    };
  },

  computed: {
    gameId() {
      return this.$route.params.gameId;
    },
    currentQuestion() {
      const index =
        this.currentQuestionNumber > 0
          ? this.currentQuestionNumber - 1
          : this.currentQuestionNumber;
      return this.questions[index];
    },
    questionQty() {
      return this.questions.length;
    },
    isLastQuestion() {
      return this.currentQuestionNumber >= this.questionQty;
    },
    answerDistributions() {
      const result = [];
      for (let i = 0; i < this.questionQty; i++) {
        result[i] = [0, 0, 0, 0];
      }

      for (let i = 0; i < this.userAnswers.length; i++) {
        Object.values(this.userAnswers[i]).forEach((index) => {
          result[i][index] += 1;
        });
      }
      return result;
    },
  },

  created() {
    this.createLobby();
    this.fetchQuestions();
  },

  beforeUnmount() {
    api.post(`lobby/close/${this.lobby.id}`);
  },

  methods: {
    async createLobby() {
      try {
        this.loading = true;
        const response = await api.post(`lobby/${this.gameId}`);
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
          this.users.push(user);
        })
        .leaving((user) => {
          this.users = this.users.filter((u) => u.id !== user.id);
        })
        .listen("SendUserAnswer", this.onSendUserAnswer);
    },
    fetchQuestions() {
      api
        .get(`games/${this.gameId}`)
        .then((response) => {
          if (response.data) {
            this.questions = response.data.questions;
          }
        })
        .catch((e) => {
          console.error("Не удалось получить игру с вопросами");
          console.error(e.message);
        });
    },
    toNextQuestion() {
      this.$router.push({ name: "question" });
      setTimeout(() => {
        this.currentQuestionNumber += 1;
        api.post(
          `lobby/next-question/${this.lobby.id}/${this.currentQuestion.id}`
        );
      }, 1000);
    },
    onSendUserAnswer(data) {
      if (!this.userAnswers[this.currentQuestionNumber - 1]) {
        this.userAnswers[this.currentQuestionNumber - 1] = {};
      }
      this.userAnswers[this.currentQuestionNumber - 1][data.playerId] =
        data.answerIndex;
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
