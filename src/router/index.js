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
    name: "profile",
    meta: { requiresAuth: true },
    component: ProfileView,
  },
  // роуты для гостя
  {
    path: "/auth",
    name: "auth",
    meta: { isGuest: true },
    component: AuthView,
    children: [
      {
        path: "/login",
        name: "login",
        component: LoginFormComponent,
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: SignUpComponent,
      },
      {
        path: "/forgot-password",
        name: "forgot-password",
        component: ForgotPasswordComponent,
      },
      {
        path: "/reset-password",
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["user/isAuth"]) {
    next({ name: "login" });
  } else if (to.meta.isGuest && store.getters["user/isAuth"]) {
    next({ name: "profile" });
  } else {
    next();
  }
});

// router.beforeEach((to) => {
//   if (to.meta.isGuest && store.getters["user/isAuth"]) {
//     return { name: "profile" };
//   }
// });

// router.beforeEach((to) => {
//   if (to.meta.requiresAuth && !store.getters["user/isAuth"]) {
//     return { name: "login" };
//   }
// });

export default router;
