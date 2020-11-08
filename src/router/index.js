import Vue from "vue";
import VueRouter from "vue-router";
import Browse from "../views/Home.vue";
import Search from "../views/Search.vue";
import MyInspo from "../views/MyInspo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/browse",
    name: "Browse",
    component: Browse
  },
  {
    path: "/",
    name: "Search",
    component: Search
  },
  {
    path: "/myInspo",
    name: "My Inspo",
    component: MyInspo
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
