<template>
  <div class="answers_screen">
    <button class="circle_answer item" @click="answer(0)">
      <font-awesome-icon icon="fa-solid fa-circle" />
    </button>
    <button class="square_answer item" @click="answer(1)">
      <font-awesome-icon icon="fa-solid fa-square" />
    </button>
    <button class="rhombus_answer item" @click="answer(2)">
      <font-awesome-icon icon="fa-solid fa-diamond" />
    </button>
    <button class="triangle_answer item" @click="answer(3)">
      <font-awesome-icon icon="fa-solid fa-play" />
    </button>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  name: "UserQuestionComponent",

  props: {
    lobbyId: {
      type: Number,
      required: true,
    },
    question: {
      type: Object,
      required: true,
    },
  },

  methods: {
    answer(answerIndex) {
      api
        .post(`lobby/user-answer/${this.lobbyId}/${this.question.id}`, {
          answerIndex,
        })
        .then((response) => {
          if (response.data) {
            sessionStorage.setItem(
              `answer-${this.lobbyid}`,
              response.data.isCorrect
            );
            if (response.data.isCorrect) {
              this.$emit("add-points", 500);
            }
          }
          this.$emit("set-loading", true);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.answers_screen {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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
.item > svg {
  display: block;
  margin: 0 auto;
  transform: rotate(-90deg);
  font-size: 100px;
  color: #ffffffde;
}
.item {
  position: relative;
  cursor: pointer;
  border: none;
}
</style>
