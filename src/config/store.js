import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const login = (accessToken, state) => {
  if (state) {
    state.accessToken = accessToken;
    state.authenticated = true;
  }

  if (accessToken) {
    localStorage.setItem('access_token', accessToken);

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }
};

const accessToken = localStorage.getItem('access_token');

login(accessToken);

export default new Vuex.Store({
  state: {
    accessToken,
    authenticated: accessToken !== null,
    pontuacao: 0,
  },
  mutations: {
    login(state, accessToken) {
      login(accessToken, state);
    },
    logout(state) {
      state.accessToken = null;
      state.authenticated = false;

      localStorage.removeItem('access_token');

      delete axios.defaults.headers.common['Authorization'];
    },
    setPontuacao(state, pontuacao) {
      state.pontuacao = pontuacao;
    },
  },
});
