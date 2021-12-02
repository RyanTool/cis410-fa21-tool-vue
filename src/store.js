import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
    user: null,
    events: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
  },
  actions: {},
});
