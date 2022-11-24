import { http } from "@/utils/axios";
import { ElMessage } from "element-plus";

export default {
  namespaced: true,
  state() {
    return {
      questions: [],
      error: null,
    };
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    setQuestion(state, question) {
      state.questions.push(question);
    },
    removeQuestion(state, question) {
      state.questions.splice(state.questions.indexOf(question), 1);
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    createGame({ commit, state }, payload) {
      commit("setError", null);
      http
        .post("api/games", payload)
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
    addNewQuestion({ commit }, questionData) {
      commit("setQuestion", questionData);
    },
    deleteQuestion({ commit }, questionId) {
      commit("removeQuestion", questionId);
    },
  },
};
