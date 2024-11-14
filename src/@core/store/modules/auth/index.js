import api from "@core/api";
import Storage from "@core/bits/Storage";
import {
  AUTH_USER,
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
} from "@core/config/apiEndpoints";

export default {
  namespaced: true,

  state: {
    user: null,
  },

  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => !!state.user,
    authToken: (state) => state.user?.token || null,
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },

    CLEAR_USER() {
      Storage.remove("user");
      location.reload();
    },
  },

  actions: {
    async register({ commit }, credentials) {
      return api.post(REGISTER_URL, credentials).then(() => {});
    },

    async login({ commit }, credentials) {
      return api.post(LOGIN_URL, credentials).then(({ data }) => {
        commit("SET_USER", data);
        Storage.set("auth_token", data.token);
        Storage.set("user", data.user);
        location.reload();
      });
    },

    async logout({ commit }) {
      return api.post(LOGOUT_URL).then(() => {
        //commit('CLEAR_USER')
        commit("SET_USER", null);
      });
    },

    async fetchAuthenticatedUser({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .get(AUTH_USER)
          .then((response) => {
            resolve(response);

            commit("SET_USER", response.data.user);
            Storage.set("user", response.data.user);
          })
          .catch((error) => {
            reject(error);
            // Storage.remove("user");
            // Storage.remove("auth_token");
            //location.reload()
          });
      });
    },
  },
};
