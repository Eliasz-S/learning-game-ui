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
      <div v-if="questionShow" class="question_bl question_bl__anim">
        {{ question?.text }}
      </div>
      <div v-else class="question_answer_component">
        <div class="question_bl">{{ question?.text }}</div>
        <!-- <button @click="handleNext" class="next_btn">Next</button> -->
        <div class="helpful_info">
          <div class="helpful_info__row">
            <div class="timer">{{ gameTimer }}</div>
            <div class="answers">{{ answersQuantity }}</div>
          </div>
        </div>
        <div class="answers_bl row">
          <div class="circle_answer item">
            <span class="circle item_icon">
              <font-awesome-icon icon="fa-solid fa-circle" />
            </span>
            <p class="item_text">{{ answers[0]?.text }}</p>
          </div>
          <div class="square_answer item">
            <span class="square item_icon">
              <font-awesome-icon icon="fa-solid fa-square" />
            </span>
            <p class="item_text">{{ answers[1]?.text }}</p>
          </div>
          <div class="rhombus_answer item">
            <span class="rhombus item_icon">
              <font-awesome-icon icon="fa-solid fa-diamond" />
            </span>
            <p class="item_text">{{ answers[2]?.text }}</p>
          </div>
          <div class="triangle_answer item">
            <span class="triangle item_icon">
              <font-awesome-icon icon="fa-solid fa-play" />
            </span>
            <p class="item_text">{{ answers[3]?.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  name: "OwnerQuestionComponent",
  props: {
    question: {
      type: Object,
      required: true,
    },
    lobbyChannel: {
      type: Object,
      required: true,
    },
    lobbyId: {
      type: Number,
      required: true,
    },
    answerDistribution: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentTime: 5,
      counter: false,
      gameTimerStart: false,
      gameTimer: this.question.timeLimit,
      loadingStartBlock: true,
      timer: null,
      questionShow: false,
    };
  },

  computed: {
    answers() {
      return this.question.answers;
    },
    answersQuantity() {
      return this.answerDistribution.reduce((acc, value) => {
        return acc + value;
      }, 0);
    },
  },

  methods: {
    handleNext() {
      this.$router.push({ name: "questionResult" });
    },
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
      setTimeout(() => {
        this.questionShow = false;
        this.gameTimerMethod();
      }, 6000);
    },
    gameTimerMethod() {
      if (this.gameTimer > 0) {
        setTimeout(() => {
          this.gameTimer--;
        }, 1000);
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  unmounted() {
    this.stopTimer();
  },
  watch: {
    // Здесь таймер игры, который начинает меняться, если поменялось значение gameTimer
    gameTimer() {
      if (this.gameTimer > 0) {
        setTimeout(() => {
          this.gameTimer--;
        }, 1000);
      } else {
        this.$router.push({ name: "questionResult" });
        api.post(`lobby/show-question-result/${this.lobbyId}`);
      }
    },
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
        this.questionShowMethod();
        api.post(`lobby/show-question/${this.lobbyId}`);
      }
    },
  },
  created() {
    setTimeout(() => (this.loadingStartBlock = false), 2000);
  },
};
</script>

<style lang="css" scoped>
.next_btn {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 10%;
  background: #3f51b5;
  font-size: 20px;
  padding: 0.3rem 1rem;
  border-radius: 7px;
  border: none;
  color: #fff;
  font-family: "Nunito", sans-serif;
}
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
.question_bl {
  width: 100%;
  background: #fff;
  color: #2c2c2c;
  font-size: 28px;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  padding: 20px 0;
}
.helpful_info__row {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
}
.answers_bl {
  width: 80%;
  margin: 0 auto;
  color: #222;
  position: absolute;
  bottom: 40px;
  left: 10%;
}
.row {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
}
.item {
  padding: 2rem 1rem 2rem 4rem;
  margin: 4px;
  border-radius: 7px;
  position: relative;
  box-shadow: 3px 3px 4px #222222bf;
  color: #fff;
  font-family: sans-serif;
}
.item_text {
  padding: 20px 0;
  text-align: center;
  font-size: 16px;
}
.item_icon {
  position: absolute;
  left: 15px;
  font-size: 35px;
  top: 15px;
}
span.triangle.item_icon {
  transform: rotate(-90deg);
}
.circle_answer {
  background: #d7a307;
}
.square_answer {
  background: #5eb53f;
}
.rhombus_answer {
  background: #3f51b5;
}
.triangle_answer {
  background: #b92020;
}
.helpful_info {
  width: 80%;
  margin: 9rem auto;
}
.timer,
.answers {
  background: #fff;
  color: #3f1581;
  padding: 10px;
  font-size: 30px;
  font-weight: 800;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  box-shadow: 3px 5px 12px 2px #1c0a3a;
}
.answers::before {
  content: "Answers: ";
  font-size: 16px;
  position: absolute;
  left: -96px;
  color: #fff;
  font-weight: 700;
}
.answers {
  position: relative;
}
.question_bl__anim {
  animation: question-animate 6s infinite;
  animation-iteration-count: 1;
}
@keyframes question-animate {
  0% {
    height: 0px;
    padding: 20px 0;
    line-height: 20px;
  }
  50% {
    height: 300px;
    padding: 137px 0;
    line-height: 300px;
  }
  100% {
    height: 38px;
    padding: 20px 0;
    line-height: 20px;
  }
}
</style>
