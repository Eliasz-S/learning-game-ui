import { createStore } from "vuex";
import user from "./modules/user";
import creator from "./modules/creator";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    creator,
  },
});
