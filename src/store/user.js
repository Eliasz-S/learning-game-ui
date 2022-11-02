import { http } from "@/utils/axios";

export default {
  namespaced: true,
  state() {
    return {
      data: {},
    };
  },
  getters: {
    userData(state) {
      return state.data;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.data = { ...payload };
    },
  },
  actions: {
    async fetchUser(ctx) {
      try {
        const response = await http.get("/api/user");
        if (response.data) {
          ctx.commit("setUser", response.data);
        }
      } catch (e) {
        const UNAUTHORIZED = 401;
        if (e.response.status !== UNAUTHORIZED) {
          console.error("Ошибка при получении данных пользователя", e);
        }
      }
    },
    logout() {
      http.post("logout");
    },
  },
};
