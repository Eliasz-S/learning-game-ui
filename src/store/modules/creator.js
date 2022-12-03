import { api } from "@/utils/axios";
import { ElMessage } from "element-plus";

const getDefaultState = () => {
  return {
    questions: [{ questionId: Date.now(), timeLimit: "20" }],
    error: null,
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    questions(state) {
      return state.questions;
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    setQuestion(state, payload) {
      const currentQuestion = state.questions.find(
        (question) => question.questionId === payload.questionId
      );
      Object.assign(currentQuestion, payload);
    },
    addQuestion(state, payload) {
      state.questions.push(payload);
    },
    removeQuestion(state, question) {
      state.questions.splice(state.questions.indexOf(question), 1);
    },
    setError(state, error) {
      state.error = error;
    },
    resetState(state) {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    async createGame({ commit }, payload) {
      commit("setError", null);
      await api
        .post("games", payload)
        .then((response) => {
          console.log(response);
          if (response.statusText === "OK") {
            ElMessage({
              type: "success",
              message: "Your maven has been created!",
            });
          }
        })
        .catch((error) => {
          commit("setError", error.response.data.errors);
        });
    },
    editQuestion({ commit }, questionData) {
      commit("setQuestion", questionData);
    },
    addQuestion({ commit }, defaultQuestionData) {
      commit("addQuestion", defaultQuestionData);
    },
    deleteQuestion({ commit }, question) {
      commit("removeQuestion", question);
    },
    async resetState({ state, commit }) {
      await commit("resetState", state);
    },
  },
};
