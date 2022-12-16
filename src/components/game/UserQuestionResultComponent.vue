<template>
  <div class="results">
    <div v-if="isCorrect" class="result">
      <div class="result_text">Correct</div>
      <div class="correct_icon">
        <font-awesome-icon icon="fa-solid fa-face-laugh-beam" />
      </div>
      <div class="plus_points">+ {{ pointsForCorrect }}</div>
      <div class="points">{{ points }} Points</div>
    </div>

    <div v-else class="result">
      <div class="result_text">Incorrect</div>
      <div class="incorrect_icon">
        <font-awesome-icon icon="fa-solid fa-face-sad-tear" />
      </div>
      <div class="points">Total score: {{ points }} points</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OwnerQuestionResultComponent",

  props: {
    lobbyId: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
      isCorrect: false,
      pointsForCorrect: 500,
    };
  },
  created() {
    this.checkAnswer();
  },
  methods: {
    checkAnswer() {
      const answer = sessionStorage.getItem(`answer-${this.lobbyid}`);
      if (answer) this.isCorrect = JSON.parse(answer);
      sessionStorage.removeItem(`answer-${this.lobbyid}`);
    },
  },
};
</script>

<style lang="css" scoped>
.results {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.result {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 34px;
  font-family: "Nunito", sans-serif;
  line-height: 70px;
}
.incorrect_icon > svg {
  color: white;
  background: red;
  width: 150px;
  padding: 10px;
  border-radius: 7px;
}
.correct_icon > svg {
  color: white;
  background: #8bc34a;
  width: 150px;
  padding: 10px;
  border-radius: 7px;
}
</style>
