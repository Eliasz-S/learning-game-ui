import { api } from "@/utils/axios";
import { ElMessage } from "element-plus";

const getDefaultState = () => {
  return {
    questions: [{ questionId: 1, timeLimit: "20" }],
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
    createGame({ commit, state }, payload) {
      commit("setError", null);
      api
        .post("games", payload)
        .then((response) => {
          console.log(response);
          state.questions = [];
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
    resetState({ state, commit }) {
      commit("resetState", state);
    },
  },
};
