import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import EventDetail from "./components/EventDetail.vue";
import Events from "./components/Events.vue";
import NotFound from "./components/NotFound.vue";
import EventEntry from "./components/EventEntry.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import myStore from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/account",
      component: Account,
      beforeEnter(to, from, next) {
        if (myStore.state.Token) {
          next();
        } else {
          next("/");
        }
      },
    },
    { path: "/login", component: Login },
    { path: "/events", component: Events },
    {
      path: "/events/:pk",
      component: EventDetail,
      children: [{ path: "entry", component: EventEntry }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
