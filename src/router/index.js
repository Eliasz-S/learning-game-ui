import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import ProfileView from "@/views/ProfileView.vue";
import TestCreatorView from "@/views/TestCreatorView.vue";
import GameView from "@/views/GameView.vue";
import AuthView from "@/views/AuthView.vue";
import HomeView from "@/views/HomeView.vue";
import ForgotPasswordComponent from "@/components/Auth/ForgotPasswordComponent.vue";
import ResetPasswordComponent from "@/components/Auth/ResetPasswordComponent.vue";
import LoginFormComponent from "@/components/Auth/LoginFormComponent.vue";
import SignUpComponent from "@/components/Auth/SignUpComponent.vue";
import ProfileSettingsComponent from "@/components/Profile/ProfileSettingsComponent.vue";
import GroupsComponent from "@/components/Profile/GroupsComponent.vue";
import LibraryComponent from "@/components/Profile/LibraryComponent.vue";
import ReportsComponent from "@/components/Profile/ReportsComponent.vue";
import HomeComponent from "@/components/Profile/HomeComponent.vue";
import GameOwnerView from "@/views/GameOwnerView.vue";
import OwnerQuestionComponent from "@/components/game/OwnerQuestionComponent.vue";
import UserQuestionComponent from "@/components/game/UserQuestionComponent.vue";
import LobbyComponent from "@/components/game/LobbyComponent.vue";
import LobbyGathering from "@/components/game/LobbyGathering.vue";
import OwnerQuestionResultComponentVue from "@/components/game/OwnerQuestionResultComponent.vue";
import UserQuestionResultComponentVue from "@/components/game/UserQuestionResultComponent.vue";
import AllResultsComponentVue from "@/components/game/AllResultsComponent.vue";

const routes = [
  {
    path: "/",
    name: "game",
    component: GameView,
  },
  // Game pages (Only for owner)
  {
    path: "/game-owner",
    redirect: { name: "lobby" },
    name: "gameowner",
    component: GameOwnerView,
    children: [
      {
        path: "lobby",
        name: "lobby",
        component: LobbyComponent,
      },
      {
        path: "lobby/:gameId",
        name: "lobby-gathering",
        component: LobbyGathering,
      },
      {
        path: "question",
        name: "question",
        component: OwnerQuestionComponent,
      },
      {
        path: "question-result",
        name: "questionresult",
        component: OwnerQuestionResultComponentVue,
      },
    ],
  },
  // END Game pages (Only for owner)
  // Game pages (Only for users)
  {
    path: "/game-user",
    redirect: { name: "lobbyUser" },
    name: "gameuser",
    component: GameOwnerView,
    children: [
      {
        path: "lobby/:gameId",
        name: "lobbyUser",
        component: LobbyGathering,
      },
      {
        path: "question",
        name: "questionUser",
        component: UserQuestionComponent,
      },
      {
        path: "question-result",
        name: "questionresultUser",
        component: UserQuestionResultComponentVue,
      },
    ],
  },
  // END Game pages (Only for users)
  {
    path: "/game-result",
    name: "gameresult",
    component: AllResultsComponentVue,
  },
  // End game pages
  {
    path: "/test-creator",
    name: "test-creator",
    meta: { requiresAuth: true },
    component: TestCreatorView,
  },
  {
    path: "/profile",
    redirect: { name: "profile-home" },
    name: "profile",
    meta: { requiresAuth: true },
    component: ProfileView,
    children: [
      {
        path: "settings",
        name: "profile-settings",
        component: ProfileSettingsComponent,
      },
      {
        path: "groups",
        name: "profile-groups",
        component: GroupsComponent,
      },
      {
        path: "library",
        name: "profile-library",
        component: LibraryComponent,
      },
      {
        path: "reports",
        name: "profile-reports",
        component: ReportsComponent,
      },
      {
        path: "home",
        name: "profile-home",
        component: HomeComponent,
      },
    ],
  },
  // роуты для гостя
  {
    path: "/auth",
    redirect: { name: "login" },
    name: "auth",
    meta: { isGuest: true },
    component: AuthView,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginFormComponent,
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: SignUpComponent,
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: ForgotPasswordComponent,
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: ResetPasswordComponent,
      },
    ],
  },
  // роуты для гостя
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (!store.getters["user/isFetched"]) {
    await store.dispatch("user/fetchUser");
  }

  if (to.meta.requiresAuth && !store.getters["user/isAuth"]) {
    next({ name: "login" });
  } else if (to.meta.isGuest && store.getters["user/isAuth"]) {
    next({ name: "profile-home" });
  } else {
    next();
  }
});

export default router;
