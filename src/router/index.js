import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/_AboutView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import ProfileView from "../views/ProfileView.vue";
import DashboardView from "../views/DashboardView.vue";
import LanguageView from "../views/LanguageView.vue";
import CreateView from "../views/CreateView.vue";
import TestListView from "../views/TestListView.vue";
import TestView from "../views/TestView.vue";
import GameView from "../views/GameView.vue";
import ReportsView from "../views/ReportsView.vue";
import GroupsView from "../views/GroupsView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sign_up",
    name: "sign_up",
    component: SignUpView,
  },
  {
    path: "/sign_in",
    name: "sign_in",
    component: SignInView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/language",
    name: "language",
    component: LanguageView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/tests",
    name: "tests",
    component: TestListView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/",
    name: "game",
    component: GameView,
  },
  {
    path: "/reports",
    name: "reports",
    component: ReportsView,
  },
  {
    path: "/groups",
    name: "groups",
    component: GroupsView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
