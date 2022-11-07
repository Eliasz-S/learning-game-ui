import { http } from "@/utils/axios";
import { RESPONSE_STATUS_CODES } from "@/utils/misc";
import router from "@/router/index";

export default {
  namespaced: true,
  state() {
    return {
      data: null,
      error: null,
    };
  },
  getters: {
    userData(state) {
      return state.data;
    },
    error(state) {
      return state.error;
    },
    isAuth(state) {
      return state.data !== null;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.data = { ...payload };
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    login({ commit, dispatch }, payload) {
      http
        .post("login", payload)
        .then(() => {
          dispatch("fetchUser");
          // router.push("profile");
        })
        .catch((error) => {
          commit("setError", error.response.data.message);
        });
    },
    async fetchUser({ commit }) {
      try {
        const response = await http.get("/api/user");
        if (response.data) {
          commit("setUser", response.data);
        }
      } catch (e) {
        if (e.response.status !== RESPONSE_STATUS_CODES.UNAUTHORIZED) {
          console.error("Ошибка при получении данных пользователя", e);
        }
      }
    },
    registerUser({ commit, dispatch }, newUserData) {
      http
        .post("register", newUserData)
        .then((response) => {
          if (response.status === RESPONSE_STATUS_CODES.CREATED) {
            dispatch("fetchUser");
            commit("setUser", newUserData);
            router.push("profile");
          }
        })
        .catch((error) => {
          commit("setError", error.response.data.errors);
        });
    },
    logout({ commit, dispatch }) {
      http.post("logout").then(() => {
        commit("setUser", null);
        dispatch("fetchUser");
        // router.push("login");
      });
    },
  },
};
