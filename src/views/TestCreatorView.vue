<template>
  <div class="test-creator">
    <el-header class="test-creator-header">
      <el-row justify="space-between">
        <el-col :span="6">
          <h1>Test Creator Page</h1>
        </el-col>
        <el-col :span="4">
          <el-button type="info">Exit</el-button>
          <el-button type="primary" @click="handleGameData">Save</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container height="100%">
      <el-aside width="200px">
        <button
          v-for="question in questions"
          :key="question?.questionKey"
          @click="swapComponent(question.component)"
        >
          {{ question?.questionKey }}. Question
        </button>
        <el-button @click="saveQuestion()"> Add new question </el-button>
      </el-aside>
      <el-main>
        <el-form ref="gameForm">
          <el-form-item>
            <el-input v-model="game.title" placeholder="Game title" />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="game.description"
              type="textarea"
              :autosize="{ minRows: 2 }"
              resize="none"
              placeholder="Game description (optional)"
            />
          </el-form-item>
        </el-form>
        <keep-alive>
          <component
            :is="currentComponent"
            @save-question="handleQuestion"
            :key="questionKey"
          />
        </keep-alive>
      </el-main>
      <el-aside>
        <el-form label-position="top">
          <el-row justify="center">
            <el-form-item label="Question type">
              <el-select v-model="questionType">
                <el-option label="Quiz" value="quiz" />
                <el-option label="True or false" value="true-or-false" />
              </el-select>
            </el-form-item>
          </el-row>
          <el-row justify="center">
            <el-form-item label="Time limit">
              <el-select v-model="timeLimit">
                <el-option value="5 seconds" />
                <el-option value="10 seconds" />
                <el-option value="15 seconds" />
                <el-option value="20 seconds" />
              </el-select>
            </el-form-item>
          </el-row>
        </el-form>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import QuestionCreatorComponent from "@/components/QuestionCreatorComponent.vue";
import {
  ElAside,
  ElMain,
  ElContainer,
  ElHeader,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
} from "element-plus";
import { http } from "@/utils/axios";

export default {
  name: "TestCreatorView",
  components: {
    "question-creator-component": QuestionCreatorComponent,
    ElAside,
    ElMain,
    ElContainer,
    ElHeader,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
  },
  data() {
    return {
      currentComponent: "question-creator-component",
      questionKey: 1,
      game: {
        title: "",
        description: "",
      },
      timeLimit: "20 seconds",
      questions: [],
      newQuestion: null,
      questionType: "Quiz",
      games: null,
    };
  },
  methods: {
    swapComponent(component) {
      this.currentComponent = component;
    },
    getGamesList() {
      http.get("api/games").then((response) => {
        this.games = response.data;
        console.log(this.games);
      });
    },
    handleGameData() {
      this.saveQuestion();
      http
        .post("api/games", {
          game: this.game,
          questions: this.questions,
        })
        .then(() => {
          this.game = {};
          this.questions = [];
          this.getGamesList();
        });
    },
    handleQuestion(data) {
      this.newQuestion = {
        component: "question-creator-component",
        questionKey: this.questionKey,
        title: data.title,
        timeLimit: this.timeLimit,
        answers: data.answers,
      };
    },
    saveQuestion() {
      this.questions.push(this.newQuestion);
      console.log(this.questions);
      this.newQuestion = null;
      this.questionKey += 1;
    },
  },
};
</script>

<style scoped>
.test-creator-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: whitesmoke;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
  margin-bottom: 2rem;
}
</style>
