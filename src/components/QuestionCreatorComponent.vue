<template>
  <div>
    <el-form @input="handleData">
      <el-form-item>
        <h2>Question Creator</h2>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="Type your question here"
          v-model="questionTitle"
        />
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <el-input
              placeholder="Add answer 1"
              type="textarea"
              :autosize="{ minRows: 2 }"
              resize="none"
              v-model="answer1.text"
            />
            <el-checkbox
              v-model="answer1.isCorrect"
              label="Correct answer"
              size="large"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-input
              placeholder="Add answer 2"
              type="textarea"
              :autosize="{ minRows: 2 }"
              resize="none"
              v-model="answer2.text"
            />
            <el-checkbox
              v-model="answer2.isCorrect"
              label="Correct answer"
              size="large"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item>
            <el-input
              placeholder="Add answer 3"
              type="textarea"
              :autosize="{ minRows: 2 }"
              resize="none"
              v-model="answer3.text"
            />
            <el-checkbox
              v-model="answer3.isCorrect"
              label="Correct answer"
              size="large"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-input
              placeholder="Add answer 4"
              type="textarea"
              :autosize="{ minRows: 2 }"
              resize="none"
              v-model="answer4.text"
            />
            <el-checkbox
              v-model="answer4.isCorrect"
              label="Correct answer"
              size="large"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElCol,
  ElRow,
  ElCheckbox,
} from "element-plus";

export default {
  name: "QuestionCreatorComponent",
  components: { ElForm, ElFormItem, ElInput, ElCol, ElRow, ElCheckbox },
  data() {
    return {
      questionTitle: "",
      answer1: {
        text: "",
        isCorrect: false,
      },
      answer2: {
        text: "",
        isCorrect: false,
      },
      answer3: {
        text: "",
        isCorrect: false,
      },
      answer4: {
        text: "",
        isCorrect: false,
      },
    };
  },
  methods: {
    handleData() {
      this.$emit("save-question", {
        title: this.questionTitle,
        answers: [this.answer1, this.answer2, this.answer3, this.answer4],
      });
    },
  },
};
</script>

<style scoped></style>
