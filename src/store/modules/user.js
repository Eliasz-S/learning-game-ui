import { api } from "@/utils/axios";
import { RESPONSE_STATUS_CODES } from "@/utils/constants";
import router from "@/router/index";
import { ElMessage } from "element-plus";

const messageSuccess = (message) => {
  ElMessage({
    type: "success",
    message: message,
    duration: 6000,
  });
};

export default {
  namespaced: true,
  state() {
    return {
      isFetched: false,
      data: null,
      error: null,
    };
  },
  getters: {
    isFetched(state) {
      return state.isFetched;
    },
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
      state.data = payload;
    },
    setError(state, error) {
      state.error = error;
    },
    // setIsFetched(state, payload) {
    //   state.isFetched = payload;
    // },
  },
  actions: {
    login({ commit, dispatch }, payload) {
      api
        .post("login", payload)
        .then(() => {
          dispatch("fetchUser");
          router.push("/profile/home");
        })
        .catch((error) => {
          commit("setError", error.response.data.message);
        });
    },
    async fetchUser({ commit }) {
      try {
        const authResponse = await api.get("check-auth");
        if (!(authResponse.data && authResponse.data.isAuth)) return;

        const response = await api.get("user");
        if (response.data) {
          commit("setUser", response.data);
          // commit("setIsFetched", true);
        }
      } catch (e) {
        if (e.response.status !== RESPONSE_STATUS_CODES.UNAUTHORIZED) {
          console.error("Ошибка при получении данных пользователя", e);
        }
      }
    },
    registerUser({ commit, dispatch }, newUserData) {
      commit("setError", null);
      api
        .post("register", newUserData)
        .then((response) => {
          if (response.status === RESPONSE_STATUS_CODES.CREATED) {
            dispatch("fetchUser");
            commit("setUser", newUserData);
            router.push("/profile/home");
          }
        })
        .catch((error) => {
          commit("setError", error.response.data.errors);
        });
    },
    updateUser({ commit, dispatch, state }, dataToUpdate) {
      commit("setError", null);
      api
        .put(
          "user/profile-information",
          Object.assign(state.data, dataToUpdate)
        )
        .then(() => {
          dispatch("fetchUser");
        })
        .catch((error) => {
          commit("setError", error.response.data.errors);
        });
    },
    updatePassword({ commit }, payload) {
      commit("setError", null);
      api
        .put("user/password", payload)
        .then((response) => {
          if (response.statusText === "OK") {
            ElMessage({
              type: "success",
              message: "Your password has been changed!",
            });
          }
        })
        .catch((error) => {
          commit("setError", error.response.data.errors);
        });
    },
    async sendResetLink({ commit }, userEmail) {
      commit("setError", null);
      await api
        .post("forgot-password", userEmail)
        .then((response) => {
          if (response.statusText === "OK") {
            messageSuccess(response.data.message);
          }
        })
        .catch((error) => {
          commit("setError", error.response.data.errors);
        });
    },
    async resetPassword({ commit }, newPasswordData) {
      commit("setError", null);
      await api
        .post("/reset-password", newPasswordData)
        .then((response) => {
          if (response.statusText === "OK") {
            router.push("/auth/login");
            messageSuccess(response.data.message);
          }
        })
        .catch((error) => {
          commit("setError", error.response.data.errors);
        });
    },
    logout({ commit, dispatch }) {
      api.post("logout").then(() => {
        commit("setUser", null);
        dispatch("fetchUser");
        // commit("setIsFethed", false);
        router.push("/auth/login");
      });
    },
  },
};
