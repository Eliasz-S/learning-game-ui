<template>
  <LoadingUi v-if="loading" />
  <div v-else class="results">
    <!-- Если ответ игрока неверный

    <div class="result">
      <div class="result_text">Incorrect</div>
      <div class="incorrect_icon">
        <font-awesome-icon icon="fa-solid fa-face-sad-tear" />
      </div>
      <div class="points">100 Points</div>
    </div>

    -->
    <!-- Если ответ игрока верный -->
    <div class="result">
      <div class="result_text">Correct</div>
      <div class="correct_icon">
        <font-awesome-icon icon="fa-solid fa-face-laugh-beam" />
      </div>
      <div class="plus_points">+ 240</div>
      <div class="points">340 Points</div>
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
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => (this.loading = false), 2000);
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
