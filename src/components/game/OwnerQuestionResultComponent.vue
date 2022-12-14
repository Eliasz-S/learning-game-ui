<template>
  <LoadingUi v-if="loading" />
  <div v-else class="results">
    <div class="question_bl">{{ question.text }}</div>
    <button @click="handleNext" class="next_btn">Next</button>
    <div class="result_info">
      <div class="result_bls">
        <div class="circle_result item_result">
          <font-awesome-icon icon="fa-solid fa-circle" />
          2
          <font-awesome-icon
            v-if="answers[0].isCorrect"
            icon="fa-solid fa-check"
          />
        </div>
        <div class="square_result item_result">
          <font-awesome-icon icon="fa-solid fa-square" />
          1
          <font-awesome-icon
            v-if="answers[1].isCorrect"
            icon="fa-solid fa-check"
          />
        </div>
        <div class="rhombus_result item_result">
          <font-awesome-icon icon="fa-solid fa-diamond" />
          0
          <font-awesome-icon
            v-if="answers[2].isCorrect"
            icon="fa-solid fa-check"
          />
        </div>
        <div class="triangle_result item_result">
          <font-awesome-icon icon="fa-solid fa-play" />
          0
          <font-awesome-icon
            v-if="answers[3].isCorrect"
            icon="fa-solid fa-check"
          />
        </div>
      </div>
      <div class="answers_bl row">
        <div class="circle_answer item">
          <div v-if="!answers[0].isCorrect" class="uncorrect_answer"></div>
          <span class="circle item_icon">
            <font-awesome-icon icon="fa-solid fa-circle" />
          </span>
          <p class="item_text">{{ answers[0].text }}</p>
        </div>
        <div class="square_answer item">
          <!-- Сделать проверку, если ответ НЕверный, то показать блок uncorrect_answer -->
          <div v-if="!answers[1].isCorrect" class="uncorrect_answer"></div>
          <!-- --- -->
          <span class="square item_icon">
            <font-awesome-icon icon="fa-solid fa-square" />
          </span>
          <p class="item_text">{{ answers[1].text }}</p>
        </div>
        <div class="rhombus_answer item">
          <!-- Сделать проверку, если ответ НЕверный, то показать блок uncorrect_answer -->
          <div v-if="!answers[2].isCorrect" class="uncorrect_answer"></div>
          <!-- --- -->
          <span class="rhombus item_icon">
            <font-awesome-icon icon="fa-solid fa-diamond" />
          </span>
          <p class="item_text">{{ answers[2].text }}</p>
        </div>
        <div class="triangle_answer item">
          <!-- Сделать проверку, если ответ НЕверный, то показать блок uncorrect_answer -->
          <div v-if="!answers[3].isCorrect" class="uncorrect_answer"></div>
          <!-- --- -->
          <span class="triangle item_icon">
            <font-awesome-icon icon="fa-solid fa-play" />
          </span>
          <p class="item_text">{{ answers[3].text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingUi from "../UI/LoadingUI.vue";
export default {
  name: "OwnerQuestionResultComponent",
  components: {
    LoadingUi,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      loading: true,
    };
  },

  computed: {
    answers() {
      return this.question.answers;
    },
  },

  created() {
    setTimeout(() => (this.loading = false), 2000);
  },
};
</script>

<style lang="css" scoped>
.result_bls {
  display: grid;
  grid-template-columns: 120px 120px 120px 120px;
  justify-content: space-around;
}
.item_result {
  padding: 5px 10px;
}
.circle_result {
  background: #d7a307;
}
.square_result {
  background: #5eb53f;
}
.rhombus_result {
  background: #3f51b5;
}
.triangle_result {
  background: #b92020;
}
.triangle_result > svg:first-child {
  transform: rotate(-90deg);
}
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
.result_info {
  margin: 0 auto;
  padding: 13%;
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
  z-index: 100;
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
.uncorrect_answer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 7px;
  z-index: 200;
  background: #ffffff6b;
}
</style>
