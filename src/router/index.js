import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import TestCreatorView from "../views/TestCreatorView.vue";
import GameView from "../views/GameView.vue";

const routes = [
  {
    path: "/",
    name: "game",
    component: GameView,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUpView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test-creator",
    name: "test-creator",
    component: TestCreatorView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
