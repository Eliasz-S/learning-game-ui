import { http } from "@/utils/axios";

export default {
  namespaced: true,
  state() {
    return {
      data: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.data = { ...payload };
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await http.get("/api/user");
        if (response.data) {
          commit("setUser", response.data);
        }
      } catch (e) {
        const UNAUTHORIZED = 401;
        if (e.response.status !== UNAUTHORIZED) {
          console.error("Ошибка при получении данных пользователя", e);
        }
      }
    },
  },
};
