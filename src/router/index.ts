import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home/index",
  },
  {
    path: "/home/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/home/index",
      },
      {
        path: "index",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
      {
        path: "/podcasts/:podcast_id",
        component: () => import("@/views/podcast/PodcastView.vue"),
        name: "PodcastView",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
