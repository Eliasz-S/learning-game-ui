import { createRouter, createWebHistory } from "vue-router";
import ProfileView from "../views/ProfileView.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import TestCreatorView from "../views/TestCreatorView.vue";
import GameView from "../views/GameView.vue";
import TestView from "../views/TestView.vue";

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
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
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
