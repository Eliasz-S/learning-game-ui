import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import ProfileView from "@/views/ProfileView.vue";
import TestCreatorView from "@/views/TestCreatorView.vue";
import GameView from "@/views/GameView.vue";
import AuthView from "@/views/AuthView.vue";
import ForgotPasswordComponent from "@/components/Auth/ForgotPasswordComponent.vue";
import ResetPasswordComponent from "@/components/Auth/ResetPasswordComponent.vue";
import LoginFormComponent from "@/components/Auth/LoginFormComponent.vue";
import SignUpComponent from "@/components/Auth/SignUpComponent.vue";
import ProfileSettingsComponent from "@/components/Profile/ProfileSettingsComponent.vue";
import GroupsComponent from "@/components/Profile/GroupsComponent.vue";
import LibraryComponent from "@/components/Profile/LibraryComponent.vue";
import ReportsComponent from "@/components/Profile/ReportsComponent.vue";
import HomeComponent from "@/components/Profile/HomeComponent.vue";

const routes = [
  {
    path: "/",
    name: "game",
    component: GameView,
  },
  {
    path: "/test-creator",
    name: "test-creator",
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
