import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import TokenDummy from "../views/TokenDummy.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/tokenDummy",
    name: "TokenDummy",
    component: TokenDummy
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
