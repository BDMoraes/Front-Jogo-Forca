<template>
  <b-container class="home">
    <b-row class="title title-div" align-h="center">
      <h1>Ranking de Jogadores</h1>
    </b-row>
    <b-row align-h="center">
      <b-form-group label-for="player-name">
        <b-form-input
          id="player-name"
          type="text"
          v-model="jogador"
          required
          placeholder="Informe seu nickname"
        />
      </b-form-group>
    </b-row>
    <b-row align-h="center">
      <b-button class="btn-lg" variant="primary" @click="finalizar">Gravar</b-button>
    </b-row>
  </b-container>
</template>

<script>
import {baseApiUrl} from '@/global';

import axios from 'axios';

export default {
  name: "Final",
  data: function () {
    return {
      jogador: "",
    };
  },
  methods: {
    finalizar() {
      const pontos = this.$route.params.pontuacao;
      const url = `${baseApiUrl}/api/ranking`;
      axios.post(url, { name: this.jogador, score: pontos });
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
  },
};
</script>

<style>
@font-face {
  font-family: fontDalek;
  src: url("../assets/fonts/DALEKPINPOINTBOLD.TTF");
}
.home {
  background-color: white;
  width: 80%;
  height: 70%;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.title {
  font-family: fontDalek;
}
.title-div {
  background-color: orange;
  border-radius: 10px;
  width: 120%;
}
.botao {
  background-color: orange;
}
.ranking {
  font-family: fontDalek;
  font-size: 20px;
}
.name {
  color: orange;
  padding-right: 90px;
  padding-left: 90px;
}
.ran {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}
</style>
