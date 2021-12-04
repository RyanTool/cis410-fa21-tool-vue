import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

export default createStore({
  state: {
    Token: null,
    user: null,
    events: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.Token = myToken;
    },
    storeEvents(state, events) {
      state.events = events;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    clearAuthData(state) {
      state.Token = null;
      state.user = null;
    },
  },
  actions: {
    getEvents({ commit }) {
      axios.get("/events").then((aResponse) => {
        console.log("response in /events", aResponse);
        commit("storeEvents", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/attendees/logout", null, {
          headers: {
            Authorization: `Bearer ${state.Token}`,
          },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
