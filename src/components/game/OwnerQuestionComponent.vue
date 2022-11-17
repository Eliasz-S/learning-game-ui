<template>
  <div class="owner_question__component">
    <div v-if="loadingStartBlock" class="start_block">
      <img src="../../../public/img/maven-logo.png" alt="Maven" />
    </div>
    <div v-else-if="currentTime > 0" class="counter">
      <div class="square_counter"></div>
      <p class="timer_counter">{{ currentTime }}</p>
    </div>
    <div v-else class="game_bl">
      <div v-if="questionShow === true" class="question_bl">
        {{ currentQuestion.text }}
      </div>
      <div v-else class="question_answer_component">Game comonent</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OwnerQuestionComponent",
  props: {
    users: Array,
    pin: String,
    gameQuestions: Array,
    gameAnswers: Array,
  },
  data() {
    return {
      currentTime: 5,
      timer: null,
      questionShow: false,
      loadingStartBlock: true,
      counter: false,
      currentQuestion: "1",
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
    questionShowMethod() {
      this.questionShow = true;
      setTimeout(() => (this.questionShow = false), 3000);
    },
  },
  mounted() {
    this.startTimer();
  },
  unmounted() {
    this.stopTimer();
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
        this.questionShowMethod();
      }
    },
  },
  created() {
    setTimeout(() => (this.loadingStartBlock = false), 2000);
  },
};
</script>

<style lang="css" scoped>
.start_block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150px;
  font-size: 25px;
  font-family: cursive, "sans-serif";
}
.counter {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.square_counter {
  background: #2222229c;
  width: 150px;
  height: 150px;
  line-height: 150px;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  animation: coube-animate 3s infinite;
}
.timer_counter {
  width: 150px;
  height: 150px;
  line-height: 150px;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@keyframes coube-animate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  25% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  75% {
    transform: translate(-50%, -50%) rotate(135deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
}
</style>
