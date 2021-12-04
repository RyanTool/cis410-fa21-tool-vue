import { createStore } from "vuex";
import axios from "axios";

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
  },
  actions: {
    getEvents({ commit }) {
      axios.get("/events").then((aResponse) => {
        console.log("response in /events", aResponse);
        commit("storeEvents", aResponse.data);
      });
    },
  },
});
