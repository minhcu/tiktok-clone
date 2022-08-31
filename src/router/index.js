import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/following",
      name: "following",
      component: () => import("../views/FollowingView.vue"),
    },
    {
      path: "/@:user",
      name: "user",
      meta: {
        layout: "UserLayout",
      },
    },
    {
      path: "/upload",
      name: "upload",
      component: () => import("../views/UploadView.vue"),
      meta: {
        layout: "UploadLayout",
      },
    },
    {
      path: "/signup",
      name: "signup",
    },
    {
      path: "/feedback",
      name: "feedback",
    },
    {
      path: "/search",
      name: "search",
      children: {
        path: ":query",
      },
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
