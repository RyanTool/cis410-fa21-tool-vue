import { createStore } from "vuex";

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

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
  },
  actions: {},
});
