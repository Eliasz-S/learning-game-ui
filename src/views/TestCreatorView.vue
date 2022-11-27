<template>
  <div class="test-creator">
    <el-header class="test-creator-header">
      <el-row justify="space-between">
        <el-col :span="8">
          <el-row justify="space-between">
            <el-col :span="4">
              <h1>Maven</h1>
            </el-col>
            <el-col :span="16">
              <el-button
                size="large"
                style="width: 80%"
                @click="dialogTableVisible = !dialogTableVisible"
                plain
              >
                <el-row justify="space-between">
                  <el-col :span="14" class="maven-title" v-if="!game.title">
                    Enter maven title...
                  </el-col>
                  <el-col :span="14" class="maven-title" v-else>
                    {{ game.title }}
                  </el-col>
                  <el-col :span="6">Settings</el-col>
                </el-row>
              </el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-button type="info" @click="redirectToProfile">Exit</el-button>
          <el-button type="primary" @click="handleSaveGame">Save</el-button>
        </el-col>
      </el-row>
    </el-header>
    <CreatorErrorComponent />
    <el-container height="100%">
      <el-aside>
        <el-col>
          <el-button
            v-for="(question, idx) in questions"
            :key="idx"
            size="large"
            text
          >
            <span class="slide-title">{{ question.title }}</span>
          </el-button>
        </el-col>
        <el-button @click="saveQuestion"> Add new question </el-button>
      </el-aside>
      <el-main>
        <GameDataDialogComponent
          v-model="dialogTableVisible"
          @handle-submit="handleGameData"
          @handle-close="handleDialogClose"
        />
        <keep-alive>
          <component
            :is="currentComponent"
            @save-question="handleQuestion"
            :key="questionId"
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
                <el-option value="5" label="5 seconds" />
                <el-option value="10" label="10 seconds" />
                <el-option value="15" label="15 seconds" />
                <el-option value="20" label="20 seconds" />
              </el-select>
            </el-form-item>
          </el-row>
        </el-form>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import QuestionCreatorComponent from "@/components/Creator/QuestionCreatorComponent.vue";
import GameDataDialogComponent from "@/components/Creator/GameDataDialogComponent.vue";
import CreatorErrorComponent from "@/components/Errors/CreatorErrorComponent.vue";
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
  ElAlert,
} from "element-plus";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "TestCreatorView",
  components: {
    "question-creator-component": QuestionCreatorComponent,
    GameDataDialogComponent,
    CreatorErrorComponent,
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
    ElAlert,
  },
  data() {
    return {
      dialogTableVisible: false,
      currentComponent: "question-creator-component",
      questionId: 1,
      game: {
        title: "",
        description: "",
      },
      timeLimit: "20",
      questionType: "Quiz", // только для v-model этого компонента, на бэк пока хардкодом
      newQuestion: {},
    };
  },
  computed: {
    ...mapGetters("creator", ["questions"]),
  },
  methods: {
    ...mapActions("creator", ["createGame", "addNewQuestion"]),
    ...mapMutations("creator", ["setError"]),
    swapComponent(component) {
      this.currentComponent = component;
    },
    handleSaveGame() {
      this.saveQuestion();
      this.createGame({
        game: this.game,
        questions: this.questions,
      }).then(() => {
        this.game = {};
      });
    },
    handleQuestion(data) {
      this.newQuestion = {
        component: "question-creator-component",
        questionId: this.questionId,
        title: data.title,
        timeLimit: this.timeLimit,
        answers: data.answers,
      };
    },
    saveQuestion() {
      this.addNewQuestion(this.newQuestion);
      this.newQuestion = {};
      this.questionId += 1;
    },
    handleGameData(gameData) {
      this.game.title = gameData.title;
      this.game.description = gameData.description;
    },
    handleDialogClose() {
      this.dialogTableVisible = false;
    },
    redirectToProfile() {
      this.setError(null);
      this.$router.push("/profile/home");
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
.slide-title {
  width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.maven-title {
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
