<template>
  <div class="test-creator">
    <el-header class="test-creator-header">
      <el-row justify="space-between" class="test-header-section">
        <el-col :span="8">
          <el-row justify="space-between">
            <el-col :span="4">
              <img
                class="logo-img"
                src="../../public/img/maven-logo.png"
                alt="logo"
              />
            </el-col>
            <el-col :span="16" class="game-details-dialog">
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
          <el-row
            v-for="(question, idx) in questions"
            class="question-link"
            size="large"
            :key="idx"
            :style="
              currentQuestionId === question.questionId
                ? 'background-color: wheat;'
                : 'background-color: whitesmoke;'
            "
            @click="selectQuestion(question.questionId)"
          >
            <span class="slide-title">{{ question.title }}</span>
            <el-button
              v-if="questions.length > 1"
              @click.stop="removeQuestion(question)"
              type="danger"
              circle
            >
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </el-button>
          </el-row>
        </el-col>
        <el-button @click="addNewQuestion">Add new question</el-button>
      </el-aside>
      <el-main>
        <GameDataDialogComponent
          v-model="dialogTableVisible"
          :game-data="game"
          @handle-submit="handleGameData"
          @handle-close="handleDialogClose"
        />
        <keep-alive>
          <QuestionCreatorComponent
            @save-question="handleQuestionData"
            :key="currentQuestionId"
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
              <el-select v-model="timeLimit" @change="handleTimeLimit">
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
  ElButton,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
} from "element-plus";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "TestCreatorView",
  components: {
    QuestionCreatorComponent,
    GameDataDialogComponent,
    CreatorErrorComponent,
    ElAside,
    ElMain,
    ElContainer,
    ElHeader,
    ElForm,
    ElFormItem,
    ElButton,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
  },
  created() {
    this.setInitialQuestionData();
  },
  beforeUnmount() {
    this.resetState();
  },
  data() {
    return {
      dialogTableVisible: false,
      currentQuestionId: null,
      game: {
        title: "",
        description: "",
      },
      timeLimit: null,
      questionType: "Quiz", // ???????????? ?????? v-model ?????????? ????????????????????, ???? ?????? ???????? ??????????????????
    };
  },
  computed: {
    ...mapGetters("creator", ["questions", "error"]),
  },
  methods: {
    ...mapActions("creator", [
      "createGame",
      "editQuestion",
      "addQuestion",
      "deleteQuestion",
      "resetState",
    ]),
    ...mapMutations("creator", ["setError", "setQuestions"]),

    handleSaveGame() {
      this.createGame({
        game: this.game,
        questions: this.questions,
      }).then(() => {
        if (!this.error) {
          this.game = { title: "", description: "" };
          this.resetState().then(() => {
            this.setInitialQuestionData();
          });
        }
      });
    },
    handleQuestionData(data) {
      this.editQuestion({
        questionId: this.currentQuestionId,
        title: data.title,
        timeLimit: this.timeLimit,
        answers: data.answers,
      });
    },
    handleTimeLimit() {
      this.editQuestion({
        questionId: this.currentQuestionId,
        timeLimit: this.timeLimit,
      });
    },
    addNewQuestion() {
      this.addQuestion({
        questionId: (this.currentQuestionId += Date.now()),
        timeLimit: this.timeLimit,
      });
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
    selectQuestion(id) {
      this.currentQuestionId = id;
      const question = this.questions.find(
        (question) => question.questionId === id
      );
      this.timeLimit = question?.timeLimit;
    },
    removeQuestion(question) {
      const index = this.questions.indexOf(question);
      const previousQuestionId = this.questions[index - 1]?.questionId;
      const nextQuestionId = this.questions[index + 1]?.questionId;
      if (index === this.questions.length - 1) {
        this.selectQuestion(previousQuestionId);
      } else {
        this.selectQuestion(nextQuestionId);
      }

      this.deleteQuestion(question);
    },
    setInitialQuestionData() {
      const initialQuestionId =
        this.$store.state.creator.questions[0].questionId;
      const initialTimeLimit = this.$store.state.creator.questions[0].timeLimit;
      this.currentQuestionId = initialQuestionId;
      this.timeLimit = initialTimeLimit;
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
.question-link {
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 4px;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;
  cursor: pointer;
}
.question-link:hover {
  opacity: 80%;
}
.logo-img {
  height: 3rem;
  background: linear-gradient(
    109.6deg,
    rgb(157, 75, 199) 11.2%,
    rgb(119, 81, 204) 83.1%
  );
}
.test-header-section {
  align-items: center;
}
.game-details-dialog {
  display: flex;
  align-items: center;
}
</style>
