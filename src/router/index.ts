import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import AdminLayout from "@/layouts/Admin.vue";
import AuthLayout from "@/layouts/Auth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "admin",
      component: AdminLayout,
      meta: {
        auth: true,
      },
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
      ],
    },
    {
      path: "/sign-in",
      name: "auth",
      component: AuthLayout,
      children: [
        {
          path: "",
          name: "sign-in",
          component: SignInView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !localStorage.accessToken) {
    next("/sign-in");
  } else {
    next();
  }
});

export default router;
